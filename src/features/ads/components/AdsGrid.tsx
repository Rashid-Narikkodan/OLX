import AdCard from "@/components/ui/AdCard";
import type { Ad } from "@/features/ads/ad.types";
import Loading from "@/components/ui/Loading";
import NoResult from "@/assets/images/noResults (1).webp";

type AdsGridProps = {
  ads: Ad[] | null;
  loading: boolean;
};

const AdsGrid = ({ ads, loading }: AdsGridProps) => {
  if (loading) {
    return (
      <div className="grid grid-cols-3 gap-6">
        {[...Array(9)].map((_, i) => (
          <div
            key={i}
            className="h-65 bg-gray-200 rounded animate-pulse flex justify-center items-center"
          >
            <Loading />
          </div>
        ))}
      </div>
    );
  }

  if (!ads || ads.length === 0) {
    return (
      <div className="flex justify-center items-center">
      <div className="pt-20">
        <p className="text-2xl font-semibold ">Oops... we didn't find anything that matches this search :(</p>
        <p className="text-gray-700">
          Try search for something more general, change the filters or check for
          spelling mistakes
        </p>
        <div className="text-center py-20 text-gray-500 flex justify-center items-center">
          <img src={NoResult} alt="" />
        </div>
      </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-3 gap-6">
      {ads.map((ad) => (
        <AdCard key={ad.id} product={ad} />
      ))}
    </div>
  );
};

export default AdsGrid;
