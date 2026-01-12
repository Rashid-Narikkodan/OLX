import { useContext } from "react";
import { WishContext } from "@/context/WishContext";

export const useWish = () => {
  const ctx = useContext(WishContext);
  if (!ctx) {
    throw new Error("useAuth must be used inside AuthProvider");
  }
  return ctx;
};
