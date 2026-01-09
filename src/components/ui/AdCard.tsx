import type { Ad } from "@/features/ads/ad.types";

type AdCardProps = {
  product: Ad;
};

const AdCard = ({ product }: AdCardProps) => {
  return (
    <div className="border rounded-md bg-white p-4 hover:shadow-sm transition cursor-pointer">

      <div className="text-lg font-semibold">
        ₹ {product.price.toLocaleString()}
      </div>

      <div className="text-sm text-gray-700 truncate">
        {product.title}
      </div>

      <div className="text-xs text-gray-500 mt-1 capitalize">
        {product.category}
      </div>

      <p className="text-sm text-gray-600 mt-2 line-clamp-2">
        {product.description}
      </p>

    </div>
  );
};

export default AdCard;
