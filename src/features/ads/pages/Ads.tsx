import CategoryCards from "../components/CategoryCards"
import '@/styles/ads.css'
//mockdata
import {categories} from "@/../mock/categories"

const ProductsPage = () => {
  return (
    <div>
      <CategoryCards categories={categories}/>
    </div>
  )
}

export default ProductsPage