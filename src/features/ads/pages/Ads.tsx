import CategoryCards from "../components/CategoryCards"
import '@/styles/ads.css'
import AdGrid from "../components/AdGrid"
import { getCategories } from "@/services/db"
import { useEffect, useState } from "react"
import type { Category } from "@/types/category.type"
const ProductsPage = () => {
  const [categories,setCategories]=useState<Category[]|null>(null)
  const [error,setError]=useState<string|null>(null)
  useEffect(()=>{
    const fetchCategories=async()=>{
      try{
        const cats = await getCategories()
        setCategories(cats)
      }catch(error:unknown){
        setError(error instanceof Error ? error.message:"Catgeory not found")
      }
    }
      fetchCategories()
  },[])
  return (
    <div>
      {categories ? <CategoryCards categories={categories}/> : <div>{error}</div> }
      {categories && <AdGrid categories={categories}/> }
    </div>
  )
}

export default ProductsPage