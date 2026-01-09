import { useEffect, useState } from "react";
import CategoryRow from "./CategoryRow";
import type { Category } from "@/types/category.type";
import type { Ad } from "@/features/ads/ad.types";
import { getAdsByCategory } from "@/services/db";

type AdGridProps = {
  categories: Category[];
};

const AdGrid = ({ categories }: AdGridProps) => {
  const [adsByCategory, setAdsByCategory] = useState<
    Record<string, Ad[]>
  >({});

  useEffect(() => {
    const loadAds = async () => {
      const result: Record<string, Ad[]> = {};

      for (const category of categories) {
        result[category.id] = await getAdsByCategory(category.id, 4);
      }

      setAdsByCategory(result);
    };

    loadAds();
  }, [categories]);

  return (
    <div className="flex flex-col gap-8 px-4 md:px-8">
      {categories.map((category) => (
        <CategoryRow
          key={category.id}
          title={category.name}
          products={adsByCategory[category.id] || []}
          exploreLink={`/category/${category.slug}`}
        />
      ))}
    </div>
  );
};

export default AdGrid;
