export type SubCategory = {
  name: string;
  slug: string;
};

export type Category = {
  id: string;
  name: string;
  slug: string;
  imageUrl?: string;
  isActive: boolean;
  order: number;
};
