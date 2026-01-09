import { useEffect, useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import type { Filter } from "../ad.types";
import { getCategories } from "@/services/db";

const Filters = ({ onChange }:{onChange:(filter:Filter)=>void}) => {
  const [openCat, setOpenCat] = useState(true);
  const [openBudget, setOpenBudget] = useState(true);
  const [categories, setCategories] = useState<string[] | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [min, setMin] = useState("");
  const [max, setMax] = useState("");

  useEffect(() => {
    const fetchCategories = async () => {
      const cats = await getCategories();
      setCategories(cats.map((c) => c.name));
    };
    fetchCategories();
  }, []);

  // single source of truth for pushing filters
  const pushFilters = (patch = {}) => {
    const next = {
      category: selectedCategory,
      min: min ? Number(min) : null,
      max: max ? Number(max) : null,
      ...patch,
    };
    onChange(next);
  };

  return (
    <div className="space-y-6 text-sm">

      {/* ---------------- CATEGORIES ---------------- */}
      <div className="border-b border-gray-400 pb-4">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => setOpenCat(!openCat)}
        >
          <h3 className="font-bold text-lg uppercase">Categories</h3>
          {openCat ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </div>

        {openCat && (
          <div className="mt-3 space-y-2">
            <p
              onClick={() => {
                setSelectedCategory(null);
                pushFilters({ category: null });
              }}
              className={`cursor-pointer font-semibold ${
                !selectedCategory ? "font-semibold text-blue-600" : ""
              }`}
            >
              All Categories
            </p>

            {categories &&
              categories.map((cat) => (
                <p
                  key={cat}
                  onClick={() => {
                    setSelectedCategory(cat);
                    pushFilters({ category: cat });
                  }}
                  className={`cursor-pointer hover: py-2 px-3 rounded ${
                    selectedCategory === cat
                      ? "font-semibold text-md bg-blue-200"
                      : "text-balck"
                  }`}
                >
                  {cat}
                </p>
              ))}
          </div>
        )}
      </div>

      <p className="text-gray-500">Filters</p>

      {/* ---------------- BUDGET ---------------- */}
      <div className="border-b border-gray-400 pb-4">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => setOpenBudget(!openBudget)}
        >
          <h3 className="font-bold text-lg uppercase">Budget</h3>
          {openBudget ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </div>

        {openBudget && (
          <div className="mt-3">
            <p className="text-gray-500 mb-2">Choose a range below</p>

            <div className="flex items-center gap-2">
              <input
                type="number"
                placeholder="min"
                value={min}
                onChange={(e) => {
                  const v = e.target.value;
                  setMin(v);
                }}
                className="w-1/2 border px-2 py-1 rounded"
              />
              <span>to</span>
              <input
                type="number"
                placeholder="max"
                value={max}
                onChange={(e) => {
                  const v = e.target.value;
                  setMax(v);
                }}
                className="w-1/2 border px-2 py-1 rounded"
              />

              <button
                className="w-full bg-gray-200 py-1 rounded disabled:opacity-50"
                onClick={()=>pushFilters({ max: max ? Number(max) : null, min: min ? Number(min) : null })}
              >
                Apply
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Filters;
