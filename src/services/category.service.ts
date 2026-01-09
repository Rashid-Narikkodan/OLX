import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "@/services/firebase";
import type { Category } from "@/types/category.type";

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
