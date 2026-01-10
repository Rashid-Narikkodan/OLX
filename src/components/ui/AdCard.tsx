import type { Ad } from "@/features/ads/ad.types";
import { useAuth } from "@/hooks/useAuth";
import { useWish } from "@/hooks/useWish";
import { Heart } from "lucide-react";
import { useNavigate } from "react-router-dom";

type AdCardProps = {
  product: Ad;
};

const AdCard = ({ product }: AdCardProps) => {
  const image = product.images?.[0] || "/placeholder.png";
  console.log(product.images[0])
  const navigate = useNavigate()
  const {setLogin,user}=useAuth()
  const {toggleWishlist,isWishlisted}=useWish()
  const handleToggle=(e:React.MouseEvent<HTMLButtonElement>)=>{
    e.stopPropagation()
    if(user){
      toggleWishlist(product.id)
    }else{
      setLogin(true)
    }
  }

  return (
    <div onClick={()=>navigate(`/ads/${product.id}`)} className="group relative w-full bg-white rounded-lg border overflow-hidden cursor-pointer hover:shadow-md transition">
      {/* Image */}
      <div className="relative w-full aspect-4/3 bg-gray-100 overflow-hidden">
        <img
          src={image}
          alt={product.title}
          className="w-full h-full p-2 object-cover group-hover:scale-105 transition-transform duration-300"
          />

        {/* Featured badge (UI placeholder) */}
        <div className="absolute bottom-3 left-4 bg-yellow-400 text-black text-xs font-semibold px-2 py-0.5 rounded">
          FEATURED
        </div>

        {/* Wishlist icon */}
        <button onClick={handleToggle} className="absolute top-2 right-2 bg-white rounded-full p-1 shadow">
          <Heart size={18} className="text-gray-600" fill={`${isWishlisted(product.id)?'black':'white'}`} />
        </button>

      </div>

      {/* Content */}
      <div className="p-3 space-y-1">

        {/* Price */}
        <div className="text-lg font-semibold text-gray-900">
          ₹ {product.price.toLocaleString()}
        </div>

        {/* Title */}
        <div className="text-sm font-medium text-gray-800 line-clamp-1">
          {product.title}
        </div>

        {/* Category */}
        <div className="text-xs text-gray-500 capitalize flex justify-between">
          {product.category}
          <span>Today</span>
        </div>
        </div>
        <span className="bg-yellow-300 p-[0.2rem] absolute left-0 bottom-0 h-[30%]"></span>

    </div>
  );
};

export default AdCard;
