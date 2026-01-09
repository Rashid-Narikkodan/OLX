import { collection, getDocs, query, where, addDoc } from "firebase/firestore";
import { db } from "@/services/firebase";
import type { Category } from "@/types/category.type";
import type { Ad } from "@/features/ads/ad.types";

/* -----------------------------
   Fetch active categories
----------------------------- */
export const getCategories = async (): Promise<Category[]> => {
  const q = query(
    collection(db, "categories"),
    where("isActive", "==", true)
  );

  const snap = await getDocs(q);

  return snap.docs.map(doc => ({
    id: doc.id,
    ...doc.data() as Omit<Category, "id">
  }));
};

/* -----------------------------
   Add a new product
----------------------------- */
export const addProduct = async (product: Omit<Ad, "id">): Promise<string> => {
  try {
    const docRef = await addDoc(collection(db, "products"), {
      ...product,
      createdAt: new Date(),
      isActive: true, // default
    });
    return docRef.id; // return generated product ID
  } catch (error) {
    console.error("Error adding product:", error);
    throw new Error("Failed to add product");
  }
};
