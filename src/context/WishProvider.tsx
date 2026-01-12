import { useEffect, useMemo, useState, useCallback } from "react";
import { WishContext } from "./WishContext";
import {
  addToWishlist,
  removeFromWishlist,
  getWishlist,
} from "@/services/wishlist.service";
import { useAuth } from "@/hooks/useAuth";

export const WishProvider = ({ children }: { children: React.ReactNode }) => {
  const { user } = useAuth();
  const [wishlist, setWishlist] = useState<Set<string>>(new Set());
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) {
      setWishlist(new Set());
      setLoading(false);
      return;
    }

    let isMounted = true;
    setLoading(true);

    const load = async () => {
      try {
        const items = await getWishlist(user.uid);

        if (isMounted) {
          setWishlist(new Set(items.map((i) => i.productId)));
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    load();

    return () => {
      isMounted = false;
    };
  }, [user]);

  /* Fixed Toggle wishlist using useCallback */
  const toggleWishlist = useCallback(
    async (productId: string) => {
      if (!user) return;

      setWishlist((prev) => {
        const updated = new Set(prev);
        if (updated.has(productId)) {
          updated.delete(productId);
          // Sync with DB (don't await inside setState)
          removeFromWishlist(user.uid, productId);
        } else {
          updated.add(productId);
          // Sync with DB
          addToWishlist(user.uid, productId);
        }
        return updated;
      });
    },
    [user]
  );

  /* Helper to check status */
  const isWishlisted = useCallback(
    (id: string) => wishlist.has(id),
    [wishlist]
  );

  const value = useMemo(
    () => ({
      wishlist,
      loading,
      isWishlisted,
      toggleWishlist,
    }),
    [wishlist, loading, isWishlisted, toggleWishlist]
  );

  return <WishContext.Provider value={value}>{children}</WishContext.Provider>;
};
