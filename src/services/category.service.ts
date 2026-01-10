import { collection, getDocs,doc,getDoc, query, where } from "firebase/firestore";
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
export const getCategoryById = async (id: string): Promise<Category | null> => {
  if (!id) throw new Error("Category ID is required");

  try {
    const docRef = doc(db, "categories", id);
    
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return { id: docSnap.id, ...docSnap.data() } as Category;
    } else {
      console.log("No such category found!");
      return null;
    }
  } catch (error) {
    console.error("Error fetching category:", error);
    throw error;
  }
};