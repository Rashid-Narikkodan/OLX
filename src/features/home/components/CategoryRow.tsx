import AdCard from "@/components/ui/AdCard";  // your existing Card component
import type { Ad } from "@/features/ads/ad.types";
import LoadingRing from "@/components/ui/Loading";

type CategoryRowProps = {
  title: string;
  ads: Ad[];
  exploreLink?: string;
  loading:boolean
};

const CategoryRow = ({ title, ads, exploreLink, loading }: CategoryRowProps) => {
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
<div className={`${loading?'flex justify-center items-center':"grid grid-cols-2 md:grid-cols-4 gap-4"}`}>
  {!loading?ads.map(ad => (
    <AdCard key={ad.id} product={ad}/>
  )):
  <LoadingRing />
  }
</div>

    </div>
  );
};

export default CategoryRow;
