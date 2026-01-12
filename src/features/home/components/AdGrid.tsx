import { useEffect, useState } from "react";
import CategoryRow from "./CategoryRow";
import type { Category } from "@/types/category.type";
import type { Ad } from "@/features/ads/ad.types";
import { getAdsByCategory } from "@/features/ads/ad.service";

type AdGridProps = {
  categories: Category[];
};

const AdGrid = ({ categories }: AdGridProps) => {
  const [adsByCategory, setAdsByCategory] = useState<
    Record<string, Ad[]>
  >({});
  const [laoding,setLoading]=useState(true)

  useEffect(() => {
    const loadAds = async () => {
      setLoading(true)
      const result: Record<string, Ad[]> = {};
      
      for (const category of categories) {
        result[category.id] = await getAdsByCategory(category.id, 4);
      }
      
      setAdsByCategory(result);
      setLoading(false)
    };

    loadAds();
  }, [categories]);

  return (
    <div className="flex flex-col gap-8 px-4 md:px-8 mt-5">
      {categories.map((category) => (
        <CategoryRow
          key={category.id}
          title={category.name}
          ads={adsByCategory[category.id] || []}
          exploreLink={`/category/${category.slug}`}
          loading={laoding}
        />
      ))}
    </div>
  );
};

export default AdGrid;
