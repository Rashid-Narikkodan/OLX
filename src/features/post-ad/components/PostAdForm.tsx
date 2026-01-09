import { useState } from "react";
import type { Category } from "@/types/category.type";
import { addProduct } from "@/services/db";
import { useNavigate } from "react-router-dom";

type AdFormState = {
  title: string;
  description: string;
  price: number | "";
};

const PostAdForm = ({ category,onClick }: { category: Category,onClick:()=>void }) => {
  const [form, setForm] = useState<AdFormState>({
    title: "",
    description: "",
    price: "",
  });
  const navigate=useNavigate()

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, title: e.target.value }));
  };

  const handleDescriptionChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, description: e.target.value }));
  };

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setForm((prev) => ({
      ...prev,
      price: value === "" ? "" : Number(value),
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.title || !form.description || form.price === "") {
      return;
    }

    const adPayload = {
      title: form.title.trim(),
      description: form.description.trim(),
      price: form.price,
      category: category.id, // or category.slug based on your backend
    };

    try{
      const result = await addProduct(adPayload)
      if(result){
        navigate(-1)
      }
    }catch(err){
    console.log(err)
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-white overflow-auto">
      <div className="max-w-3xl mx-auto px-4 py-6 border border-gray-400 mt-30 rounded-2xl">
        {/* Selected Category */}
        <div className="flex items-center justify-between border-b pb-4 mb-6">
          <div>
            <p className="text-sm text-gray-500">Selected Category</p>
            <p className="text-base font-semibold text-gray-900">
              {category.name}
            </p>
          </div>
          <span onClick={onClick} className="text-blue-600 text-sm cursor-pointer hover:underline">
            Change
          </span>
        </div>

        {/* Form */}
        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Title */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Ad title *
            </label>
            <input
              type="text"
              value={form.title}
              onChange={handleTitleChange}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
              placeholder="Eg: iPhone 13 in excellent condition"
            />
            <p className="text-xs text-gray-400 mt-1">
              Mention the key features of your item
            </p>
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Description *
            </label>
            <textarea
              value={form.description}
              onChange={handleDescriptionChange}
              rows={4}
              className="w-full border border-gray-300 rounded-md px-3 py-2 resize-none focus:outline-none focus:border-blue-500"
              placeholder="Include condition, usage, reason for selling..."
            />
          </div>

          {/* Price */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Price *
            </label>
            <div className="relative">
              <span className="absolute left-3 top-2.5 text-gray-500">₹</span>
              <input
                type="number"
                value={form.price}
                onChange={handlePriceChange}
                className="w-full border border-gray-300 rounded-md pl-7 pr-3 py-2 focus:outline-none focus:border-blue-500"
                placeholder="Enter price"
              />
            </div>
          </div>

          <div className="pt-4 border-t">
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-md font-semibold hover:bg-blue-700 transition"
            >
              Post Now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostAdForm;
