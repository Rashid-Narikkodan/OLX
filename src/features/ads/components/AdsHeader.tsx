
type AdsHeaderProps = {
  query: string;
  total: number;
  sort: "date" | "price_low" | "price_high";
  onSortChange: (v: AdsHeaderProps["sort"]) => void;
};

const AdsHeader = ({ query, total, sort, onSortChange }: AdsHeaderProps) => {
  return (
    <div className="flex items-center justify-between border-b pb-3 mb-4">
      
      {/* Left: Result info */}
      <div className="flex items-center gap-3 text-sm">
        <span className="text-gray-700">
          Showing results for {" "}
          <span className="font-semibold">"{query}"</span>
        </span>

        <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold">
          {total.toLocaleString()} Ads
        </span>
      </div>

      {/* Right: Sort */}
      <div className="flex items-center gap-2 text-sm">
        <span className="text-gray-700 font-semibold">SORT BY :</span>

        <select
          value={sort}
          onChange={(e) => onSortChange(e.target.value as AdsHeaderProps["sort"])}
          className="border-none bg-transparent font-semibold cursor-pointer focus:outline-none"
        >
          <option value="date">Date Published</option>
          <option value="price_low">Price: Low to High</option>
          <option value="price_high">Price: High to Low</option>
        </select>
      </div>
    </div>
  );
};

export default AdsHeader;
