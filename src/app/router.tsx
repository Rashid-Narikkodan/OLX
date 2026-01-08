import { createBrowserRouter } from "react-router-dom";
import MainLayout from "@/components/layout/MainLayout";
import Home from "@/features/ads/pages/Ads";

export const router = createBrowserRouter([
  {
    element: <MainLayout />, // layout here
    children: [
      { path: "/", element: <Home /> },
    ],
  },
]);
