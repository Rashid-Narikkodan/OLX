import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { Ad } from "../ad.types";
import { getAdById } from "../ad.service";
import { Share2, Heart, ChevronLeft, ChevronRight } from "lucide-react";

const AdDetails = () => {
    const { id } = useParams();
    const [ad, setAd] = useState<Ad | null>(null);

    useEffect(() => {
        const fetchAdById = async () => {
            if (id) {
                const data = await getAdById(id);
                setAd(data);
            }
        };
        fetchAdById();
    }, [id]);

    if (!ad) return (
        <div className="flex justify-center items-center min-h-screen text-gray-500 font-medium">
            Loading...
        </div>
    );

    return (
        <div className="bg-[#f2f4f5] min-h-screen pb-10 px-40">
            {/* 1. Top Section: Full Width Image */}
            <div className="w-full relative bg-black flex justify-center items-center h-100 md:h-137.5">
                <img 
                    src={ad.images[0]} 
                    alt={ad.title} 
                    className="h-full object-contain"
                />
                <div className="absolutetop-0 left-0 right-0 bottom-0">
                    <ChevronLeft className="absolute top-[50%] text-white left-4" size={40}/>
                    <ChevronRight className="absolute top-[50%] text-white right-4" size={40}/>
                    <Share2 className="absolute top-4 text-white right-18"/>
                    <Heart className="absolute top-4 text-white right-6"/>
                </div>
            </div>

            {/* 2. Content Section: 70/30 Grid */}
            <div className="max-w-6xl mx-auto px-4 mt-6">
                <div className="grid grid-cols-1 lg:grid-cols-10 gap-6">
                    
                    {/* LEFT COLUMN (70%) */}
                    <div className="lg:col-span-7 space-y-4">
                        
                        {/* Title & Spans Section */}
                        <div className="bg-white p-6 rounded-sm border border-gray-300 shadow-sm">
                            <h1 className="text-2xl font-bold text-[#002f34] mb-2">{ad.title}</h1>
                            <div className="flex gap-4 text-sm text-gray-500">
                                <span className="flex items-center gap-1">{ad.id}</span>
                                <span className="flex items-center gap-1">Posted on: Today</span>
                            </div>
                        </div>

                        {/* Overview Section */}
                        <div className="bg-white p-6 rounded-sm border border-gray-300 shadow-sm">
                            <h2 className="text-xl font-bold text-[#002f34] mb-4 border-b pb-2">Overview</h2>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                                <div className="flex flex-col">
                                    <span className="text-gray-500 text-sm">Category</span>
                                    <span className="font-semibold text-[#002f34]">Electronics</span>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-gray-500 text-sm">Condition</span>
                                    <span className="font-semibold text-[#002f34]">Used</span>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-gray-500 text-sm">Ad ID</span>
                                    <span className="font-semibold text-[#002f34]">{ad.id}</span>
                                </div>
                            </div>
                        </div>

                        {/* Description Section */}
                        <div className="bg-white p-6 rounded-sm border border-gray-300 shadow-sm">
                            <h2 className="text-xl font-bold text-[#002f34] mb-4 border-b pb-2">Description</h2>
                            <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                                {ad.description}
                            </p>
                        </div>

                        {/* Related Ads Section */}
                        <div className="bg-white p-6 rounded-sm border border-gray-300 shadow-sm">
                            <h2 className="text-xl font-bold text-[#002f34] mb-4">Related Ads</h2>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                {/* Placeholder Related Ads */}
                                {[1, 2, 3].map((item) => (
                                    <div key={item} className="border border-gray-200 rounded p-2">
                                        <div className="h-32 bg-gray-100 mb-2 rounded"></div>
                                        <div className="h-4 w-3/4 bg-gray-200 mb-2"></div>
                                        <div className="h-4 w-1/2 bg-gray-100"></div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* RIGHT COLUMN (30%) */}
                    <div className="lg:col-span-3 space-y-4">
                        {/* Price Card */}
                        <div className="bg-white p-6 rounded-sm border border-gray-300 shadow-sm sticky top-4">
                            <h2 className="text-4xl font-bold text-[#002f34] mb-4">₹ {ad.price}</h2>
                            <button className="w-full bg-[#002f34] text-white font-bold py-3 rounded hover:bg-[#003d43] transition-colors mb-3">
                                Chat with seller
                            </button>
                            <button className="w-full border-2 border-[#002f34] text-[#002f34] font-bold py-3 rounded hover:bg-gray-50 transition-colors">
                                Call Seller
                            </button>
                        </div>

                        {/* Seller Card */}
                        <div className="bg-white p-6 rounded-sm border border-gray-300 shadow-sm">
                            <h3 className="text-lg font-bold text-[#002f34] mb-4">Seller Details</h3>
                            <div className="flex items-center gap-4">
                                <div className="w-14 h-14 bg-gray-200 rounded-full"></div>
                                <div>
                                    <p className="font-bold text-[#002f34]">{ad.title}</p>
                                    <p className="text-xs text-gray-500 uppercase tracking-tight">Member since 2024</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdDetails;