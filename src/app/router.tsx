import { createBrowserRouter } from "react-router-dom";
import MainLayout from "@/components/layout/MainLayout";
import Home from "@/features/home/pages/Home";
import PostAdPage from "@/features/post-ad/pages/PostAdPage";
import Wishlist from "@/features/wishlist/pages/WishList";
import Ads from '@/features/ads/pages/Ads'
import AdDetails from "@/features/ads/pages/AdDetails";
import MyAds from "@/features/ads/pages/MyAds";
export const router = createBrowserRouter([
  {
    element: <MainLayout />, // layout here
    children: [
      { path: "/", element: <Home /> },
      { path: "/ads", element: <Ads /> },
      { path: "/ads/:id", element: <AdDetails /> },
      { path: "/post", element: <PostAdPage /> },
      { path: "/wishlist", element: <Wishlist /> },
      { path: "/myads", element: <MyAds /> },
    ],
  }
]);
