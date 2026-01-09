import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import type { Ad, Filter } from "../ad.types";
import AdsGrid from "../components/AdsGrid";
import AdsHeader from "../components/AdsHeader";
import Filters from "../components/Filters";
import { getAds } from "@/services/db";

const Ads = () => {
  const [params, setParams] = useSearchParams();

  const [ads, setAds] = useState<Ad[] | null>(null);
  const [loading, setLoading] = useState(false);


  const query = params.get("q") || "";
  const category = params.get("cat");
  const min = params.get("min");
  const max = params.get("max");
  const sort = (params.get("sort") || "date") as
    | "date"
    | "price_low"
    | "price_high";


  const filter: Filter = useMemo(
    () => ({
      category: category || null,
      min: min ? Number(min) : null,
      max: max ? Number(max) : null,
    }),
    [category, min, max]
  );


  useEffect(() => {
    const fetchAds = async () => {
      setLoading(true);
      const result = await getAds(filter, sort, query);
      setAds(result);
      setLoading(false);
    };

    fetchAds();
  }, [filter,query,sort]);


  const handleFilter = (f: Filter) => {
    const next = new URLSearchParams(params);

    if (f.category) next.set("cat", f.category);
    else next.delete("cat");

    if (f.min) next.set("min", String(f.min));
    else next.delete("min");

    if (f.max) next.set("max", String(f.max));
    else next.delete("max");

    setParams(next);
  };

  const handleSort = (v: "date" | "price_low" | "price_high") => {
    const next = new URLSearchParams(params);
    next.set("sort", v);
    setParams(next);
  };


  return (
    <div className="max-w-7xl mx-auto px-2 py-6">
      <div className="grid grid-cols-12 gap-6">
        {/* Left Filters */}
        <aside className="col-span-3 border-r border-gray-200 pr-4">
          <Filters onChange={handleFilter} />
        </aside>

        {/* Right Content */}
        <main className="col-span-9">
          {ads && ads.length!==0 ? <AdsHeader
            query={query}
            total={ads?.length || 0}
            sort={sort}
            onSortChange={handleSort}
          />:''}

          <AdsGrid ads={ads} loading={loading} />
        </main>
      </div>
    </div>
  );
};

export default Ads;
