import Categories from "@/components/ui/Categories"
import CategoryCards from "../components/CategoryCards"
const ProductsPage = () => {
  const categories = [
  { id: 1, name: "Cars", imageUrl: "/images/cars.png" },
  { id: 2, name: "Bikes", imageUrl: "/images/bikes.png" },
  { id: 3, name: "Plots", imageUrl: "/images/properties.png" }, // using properties.png
  { id: 4, name: "Furnitures", imageUrl: "/images/furniture.png" },
  { id: 5, name: "Mobiles", imageUrl: "/images/mobiles.png" },
  { id: 6, name: "Laptops", imageUrl: "/images/electronics.png" }, // assuming laptops in electronics
  { id: 7, name: "Fashion", imageUrl: "/images/fashion.png" },
  { id: 8, name: "Guitar", imageUrl: "/images/guitar.png" },
  { id: 9, name: "Jobs", imageUrl: "/images/jops.png" },
  { id: 10, name: "Pets", imageUrl: "/images/pets.png" },
  { id: 11, name: "Toys", imageUrl: "/images/toys.png" },
];

  return (
    <div>
      <Categories categories={categories} />
      <CategoryCards categories={categories}/>
    </div>
  )
}

export default ProductsPage