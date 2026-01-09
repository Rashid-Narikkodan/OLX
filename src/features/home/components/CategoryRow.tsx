import AdCard from "@/components/ui/AdCard";  // your existing Card component
import type { Ad } from "@/features/ads/ad.types";

type CategoryRowProps = {
  title: string;
  products: Ad[];
  exploreLink?: string;
};

const CategoryRow = ({ title, products, exploreLink }: CategoryRowProps) => {
  return (
    <div className="mb-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-4 px-2">
        <h2 className="text-lg font-semibold">{title}</h2>
        {exploreLink && (
          <a href={exploreLink} className="text-blue-600 hover:underline text-sm">
            Explore More &rarr;
          </a>
        )}
      </div>

      {/* Scrollable row */}
      <div className="flex space-x-4 overflow-x-auto px-2">
        {products.map((product) => (
          <AdCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default CategoryRow;
