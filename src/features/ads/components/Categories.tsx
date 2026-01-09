import Button from "../../../components/ui/Button";
import { Menu } from "lucide-react";
import type { Category } from "@/types/category.type";

type CategoriesProps = {
  categories: Category[];
};

const Categories = ({ categories }: CategoriesProps) => {
const today = new Date();

const date = `${today
  .getDate()
  .toString()
  .padStart(2, "0")} ${today.toLocaleString("en-US", {
  month: "short",
})}, ${today.getFullYear()}`;


  return (
    <div className="w-full flex items-center gap-3 px-25 py-2 border-b border-gray-200 overflow-x-auto scroll-hidden">
      {/* All Categories Button */}
      <Button className="bg-blue-600 text-white rounded-3xl px-4 py-2 flex items-center gap-2 font-semibold">
        <Menu size={18} />
        <span className="text-sm whitespace-nowrap">ALL CATEGORIES</span>
      </Button>

      {/* Category Buttons */}
      {categories.map((category) => (
        <Button
          key={category.id}
          className="rounded-3xl px-3 py-1 flex items-center border-gray-300 border">
          {category.name}
        </Button>
      ))}

<span className="flex items-center border-l border-gray-300 pl-3 text-sm min-w-30">
  {date}
</span>
    </div>
  );
};

export default Categories;
