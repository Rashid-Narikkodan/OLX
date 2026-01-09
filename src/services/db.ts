import { collection,type QueryConstraint, getDocs,orderBy, query, where, addDoc,limit, serverTimestamp } from "firebase/firestore";
import { db } from "@/services/firebase";
import type { Category } from "@/types/category.type";
import type { Ad, Filter } from "@/features/ads/ad.types";

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
      createdAt: serverTimestamp(),
      isActive: true, // default
    });
    return docRef.id; // return generated product ID
  } catch (error) {
    console.error("Error adding product:", error);
    throw new Error("Failed to add product");
  }
};



export const getAdsByCategory = async (
  category: string,
  max = 4
): Promise<Ad[]> => {
  const q = query(
    collection(db, "products"),
    where("category", "==", category),
    limit(max)
  );

  const snap = await getDocs(q);

  return snap.docs.map((doc) => ({
    id: doc.id,
    ...(doc.data() as Omit<Ad, "id">),
  }));
};

export const getAds = async (
  filter: Filter,
  sort: "date" | "price_low" | "price_high",
  search: string
): Promise<Ad[]> => {
  const ref = collection(db, "products");
  const constraints: QueryConstraint[] = [];

  /* ---------------- Category ---------------- */
  if (filter.category) {
    constraints.push(where("category", "==", filter.category));
  }

  /* ---------------- Price Range ---------------- */
  const hasMin = typeof filter.min === "number";
  const hasMax = typeof filter.max === "number";
  const hasPrice = hasMin || hasMax;

  if (hasMin) {
    constraints.push(where("price", ">=", filter.min!));
  }

  if (hasMax) {
    constraints.push(where("price", "<=", filter.max!));
  }

  /* ---------------- Sorting ---------------- */
  if (hasPrice) {
    // Firestore requires ordering by the same field used in range filters
    if (sort === "price_high") {
      constraints.push(orderBy("price", "desc"));
    } else {
      constraints.push(orderBy("price", "asc"));
    }
  } else {
    // No price filters → allow full sorting
    if (sort === "price_low") {
      constraints.push(orderBy("price", "asc"));
    } else if (sort === "price_high") {
      constraints.push(orderBy("price", "desc"));
    } else {
      constraints.push(orderBy("createdAt", "desc"));
    }
  }

  /* ---------------- Execute ---------------- */
  const q = query(ref, ...constraints);
  const snap = await getDocs(q);

  let ads: Ad[] = snap.docs.map((doc) => ({
    id: doc.id,
    ...(doc.data() as Omit<Ad, "id">),
  }));

  /* ---------------- Client-side Search ---------------- */
  if (search.trim()) {
  const term = search.trim().toLowerCase();
  ads = ads.filter((a) => {
    const title = (a.title || "").toString().toLowerCase();
    const desc  = (a.description || "").toString().toLowerCase();
    const cat  = (a.category || "").toString().toLowerCase();
    return title.includes(term) || desc.includes(term) || cat.includes(term)
  });
}


  return ads;
};
