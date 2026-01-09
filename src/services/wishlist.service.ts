import {
  doc,
  setDoc,
  deleteDoc,
  getDoc,
  getDocs,
  collection,
  serverTimestamp,
  query,
  where,
  documentId
} from "firebase/firestore"
import { db } from "@/services/firebase"
import type { Ad } from "@/features/ads/ad.types"

export type WishlistItem = {
  productId: string
  addedAt: Date
}

/* ================================
   Add product to wishlist
================================ */
export const addToWishlist = async (
  userId: string,
  productId: string
) => {
  if (!userId || !productId) {
    throw new Error("Invalid wishlist params")
  }

  const ref = doc(db, "users", userId, "wishlist", productId)

  await setDoc(ref, {
    productId,
    addedAt: serverTimestamp(),
  })
}

/* ================================
   Remove from wishlist
================================ */
export const removeFromWishlist = async (
  userId: string,
  productId: string
) => {
  const ref = doc(db, "users", userId, "wishlist", productId)
  await deleteDoc(ref)
}

/* ================================
   Check if wishlisted
================================ */
export const isWishlisted = async (
  userId: string,
  productId: string
): Promise<boolean> => {
  const ref = doc(db, "users", userId, "wishlist", productId)
  const snap = await getDoc(ref)
  return snap.exists()
}

/* ================================
   Get all wishlist products (IDs)
================================ */
export const getWishlist = async (
  userId: string
): Promise<WishlistItem[]> => {
  const ref = collection(db, "users", userId, "wishlist")
  const snap = await getDocs(ref)

  return snap.docs.map(doc => ({
    productId: doc.id,
    addedAt: doc.data().addedAt?.toDate(),
  }))
}
export const getWishlistProducts = async (userId: string): Promise<Ad[]> => {
  // 1. Get all IDs from the user's wishlist sub-collection
  const wishlistRef = collection(db, "users", userId, "wishlist")
  const wishlistSnap = await getDocs(wishlistRef)
  
  const productIds = wishlistSnap.docs.map(doc => doc.id)

  // 2. If wishlist is empty, return empty array immediately
  if (productIds.length === 0) return []

  // 3. Fetch product details from the main "products" collection
  // Note: Firestore 'in' queries are limited to batches of 30 IDs
  const productsRef = collection(db, "products")
  const q = query(productsRef, where(documentId(), "in", productIds))
  const productSnaps = await getDocs(q)

  return productSnaps.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  } as Ad))
}