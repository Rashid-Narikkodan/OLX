import AdCard from "@/components/ui/AdCard";
import type { Ad } from "@/features/ads/ad.types";
import { useAuth } from "@/hooks/useAuth";
import { getWishlistProducts } from "@/services/wishlist.service";
import { useEffect, useState } from "react";
import { useWish } from "@/hooks/useWish";
import NoWishes from '@/assets/images/noWishes.webp'
import { useNavigate } from "react-router-dom";

const Wishlist = () => {
  const { user } = useAuth();
  const [wishlistProducts, setWishlistProducts] = useState<Ad[]>([]);
  const { wishlist } = useWish();
  const navigate = useNavigate()

  useEffect(() => {
    const fetchAds = async () => {
      if (!user?.uid) return; // Guard clause if user isn't logged in

      try {
        const data = await getWishlistProducts(user.uid);
        setWishlistProducts(data);
      } catch (error) {
        console.error("Error fetching wishlist:", error);
      }
    };

    fetchAds();
  }, [user?.uid, wishlist]);


  if(!wishlistProducts.length){
    return (
      <div className="flex flex-col justify-center items-center mt-20">
        <img src={NoWishes} alt="" />
        <div className="text-center">
        <p className="text-2xl font-semibold">You haven't liked any ads yet</p>
        <p className="text-center text-gray-600">Like ads and share <br /> them with the world</p>
        <button className="p-4 mt-2 border-blue-700 border-2 rounded text-blue-800" onClick={()=>navigate('/ads')}>Discover</button>
        </div>
      </div>
    )
  }

  return (
    <div className="p-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {wishlistProducts.map((ad) => (
          <AdCard key={ad.id} product={ad} />
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
