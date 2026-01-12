import { ArrowLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { getCategories } from "@/services/category.service";
import { useEffect, useState } from "react";
import type { Category } from "@/types/category.type";
import PostAdForm from "../components/PostAdForm";

const PostAdPage = () => {
  const navigate = useNavigate();

  const [categories, setCategories] = useState<Category[]>([]);
  const [error, setError] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const result = await getCategories();
        setCategories(result);
      } catch (err: unknown) {
        setError(
          err instanceof Error ? err.message : "Categories not available"
        );
      }
    };

    fetchCategories();
  }, []);

  return (
    <div className="fixed inset-0 z-50 bg-white overflow-auto">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-gray-100 px-6 py-4 flex items-center">
        <ArrowLeft onClick={() => navigate("/")} className="cursor-pointer" />
      </header>

      {/* Main */}
      <main className="flex justify-center px-4 py-10">
        <div className="w-full max-w-5xl border rounded-md">
          <div className="text-center font-bold text-xl py-6 border-b">
            POST YOUR AD
          </div>

          <div className="grid grid-cols-2 min-h-105">
            {/* LEFT COLUMN */}
            <div className="border-r">
              <ul>
                {error && <li className="px-6 py-4 text-red-500">{error}</li>}

                {categories.map((cat) => (
                  <li
                    key={cat.id}
                    className="flex items-center justify-between px-6 py-4 border-t cursor-pointer hover:bg-gray-50"
                    onClick={() => setSelectedCategory(cat)}
                  >
                    <span className="text-gray-700">{cat.name}</span>
                    <ChevronRight className="text-gray-400" />
                  </li>
                ))}
              </ul>
            </div>

            {/* RIGHT COLUMN */}
            <div>
                  <li className="px-6 py-4 text-gray-400">
                    Select a category
                  </li>
            </div>
          </div>
        </div>
        {selectedCategory && <PostAdForm category={selectedCategory} onClick={()=>setSelectedCategory(null)}/> }
      </main>
    </div>
  );
};

export default PostAdPage;
