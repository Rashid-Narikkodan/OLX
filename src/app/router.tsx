import { createBrowserRouter } from "react-router-dom";
import MainLayout from "@/components/layout/MainLayout";
import Home from "@/features/ads/pages/Ads";
import PostAdPage from "@/features/post-ad/pages/PostAdPage";
import Wishlist from "@/features/wishlist/pages/WishList";

export const router = createBrowserRouter([
  {
    element: <MainLayout />, // layout here
    children: [
      { path: "/", element: <Home /> },
      { path: "/post", element: <PostAdPage /> },
      { path: "/wishlist", element: <Wishlist /> },
    ],
  }
]);
