export interface Category {
  id: number;
  name: string;        // Display name (e.g. "Mobiles")
  // slug: string;        // URL-safe (e.g. "mobiles")
  imageUrl?: string;   // Optional banner image
}
