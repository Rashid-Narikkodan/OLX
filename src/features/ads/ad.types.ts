import { Timestamp } from "firebase/firestore";

export type AdStatus = "active" | "sold" | "expired";

export type PriceType = "fixed" | "negotiable" | "free";

export type AdCondition = "new" | "used";

export interface AdImage {
  url: string;
  isCover: boolean;
}

export interface AdLocation {
  city: string;
  state: string;
  lat?: number;
  lng?: number;
}

export interface Ad {
  id: string;
  title: string;
  description: string;
  price: number;
  priceType: PriceType;
  categoryId: string;
  categorySlug: string;
  condition: AdCondition;
  images: AdImage[];
  location: AdLocation;
  sellerId: string;
  status: AdStatus;
  viewsCount: number;
  createdAt: Timestamp;
  updatedAt: Timestamp;
}
