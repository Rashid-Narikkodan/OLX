export interface Ad {
  id: string;
  title: string;
  category:string
  description: string;
  price: number;
  images:string[]
}
 export type Filter={
      category: string|null,
      min: number|null,
      max: number|null,
    }