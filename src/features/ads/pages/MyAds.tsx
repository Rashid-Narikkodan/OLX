import { useEffect, useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import { Link } from "react-router-dom";
import type { Ad } from "../ad.types";
import { getAdsByUser, deleteAdById } from "@/features/ads/ad.service";

const MyAds = () => {
  const { user } = useAuth();
  const [ads, setAds] = useState<Ad[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMyAds = async () => {
      if (!user?.uid) return;
      
      try {
        setLoading(true);
        const data = await getAdsByUser(user.uid);
        setAds(data);
        
      } catch (error) {
        console.error("Error fetching ads:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMyAds();
  }, [user]);
const handleDelete = async (id: string) => {

    try {
      setLoading(true);
      
      await deleteAdById(id) 
      
      setAds((prevAds) => prevAds.filter((ad) => ad.id !== id));
      
      console.log("Deleted successfully");
    } catch (erro) {
      console.log("Deletion failed:", erro);
    } finally {
      setLoading(false);
    }
  };
  const handleEdit=async(id:string)=>{
    try{
      console.log(id)
    }catch(erro){
      console.log(erro)
    }
  }

  return (
    <div className="min-h-screen bg-[#f2f4f5] pt-28 pb-12">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
          <h1 className="text-2xl font-black text-[#002f34] uppercase tracking-tight">
            Manage My Ads
          </h1>
          <Link 
            to="/post" 
            className="inline-flex items-center justify-center bg-[#002f34] text-white px-6 py-2.5 rounded font-bold border-2 border-[#002f34] hover:bg-white hover:text-[#002f34] transition-colors duration-200 shadow-sm"
          >
            + Post New Ad
          </Link>
        </div>

        {/* Content Section */}
        {loading ? (
          <div className="flex flex-col items-center justify-center h-80 bg-white rounded-md border border-gray-200 shadow-sm">
            <div className="animate-spin rounded-full h-10 w-10 border-4 border-gray-200 border-t-[#002f34]"></div>
            <p className="mt-4 text-[#002f34] font-medium">Loading your listings...</p>
          </div>
        ) : ads.length > 0 ? (
          <div className="space-y-4">
            {ads.map((ad) => (
              <div 
                key={ad.id} 
                className="group bg-white border border-gray-300 rounded-md p-4 flex flex-col sm:flex-row items-center gap-6 hover:shadow-lg transition-shadow duration-300"
              >
                {/* Image Placeholder */}
                <div className="w-full sm:w-40 h-32 bg-gray-100 rounded overflow-hidden shrink-0 relative">
                  {ad.images?.[0] ? (
                    <img src={ad.images[0]} alt={ad.title} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-400 text-xs">No Image</div>
                  )}
                  <div className="absolute top-2 left-2 bg-yellow-400 text-[10px] font-bold px-2 py-0.5 rounded uppercase">
                    Active
                  </div>
                </div>

                {/* Details */}
                <div className="grow text-center sm:text-left">
                  <h3 className="text-xl font-bold text-[#002f34] group-hover:text-blue-600 transition-colors">
                    ₹ {ad.price.toLocaleString('en-IN')}
                  </h3>
                  <p className="text-gray-700 text-lg line-clamp-1">{ad.title}</p>
                  <p className="text-gray-400 text-sm mt-1">Listed: {'Just now'}</p>
                </div>

                {/* Actions */}
                <div className="flex sm:flex-col gap-2 w-full sm:w-auto">
                  <button onClick={()=>handleEdit(ad.id)} className="flex-1 sm:w-32 px-4 py-2 border-2 border-[#002f34] text-[#002f34] font-bold rounded hover:bg-gray-50 transition-colors">
                    Edit
                  </button>
                  <button onClick={()=>handleDelete(ad.id)} className="flex-1 sm:w-32 px-4 py-2 text-red-600 font-bold hover:bg-red-50 rounded transition-colors">
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Empty State */
          <div>
            <img 
              src="https://statics.olx.in/external/base/img/no-publications.png" 
              alt="No listings" 
              className="mx-auto w-56 mb-6 opacity-80"
              />
            <h2 className="text-2xl font-bold text-[#002f34] mb-2">No ads found</h2>
            <p className="text-gray-500 max-w-sm mx-auto mb-8">
              You haven't posted any ads yet. Start selling your items to earn extra cash!
            </p>
            <Link 
              to="/post" 
              className="bg-[#002f34] text-white px-10 py-3 rounded-md font-bold text-lg hover:bg-[#003d44] transition-all transform hover:scale-105"
              >
              Post an ad now
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyAds;