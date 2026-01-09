import type { Category } from "@/types/category.type";

type CategoryCardsProps = {
  categories: Category[];
};

const CategoryCards = ({ categories }: CategoryCardsProps) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4 p-2 px-10">
      {categories.map((category) => (
        <div
          key={category.id}
          className="flex flex-col items-center text-center bg-gray-100 py-3 rounded-md hover:scale-105 hover:bg-blue-100 transition-shadow duration-200"
        >
          <img
            src={category.imageUrl}
            alt={category.name}
            className="w-12 h-12 sm:w-14 md:h-16 object-contain"
          />
          <span className="mt-2 text-xs sm:text-sm md:text-base font-medium">
            {category.name}
          </span>
        </div>
      ))}
    </div>
  );
};

export default CategoryCards;
