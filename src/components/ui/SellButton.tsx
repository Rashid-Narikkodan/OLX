import { Plus } from "lucide-react";
import '@/styles/sellButton.css'
export default function SellButton({onClick}:{onClick:()=>void}) {
  return (
<button onClick={onClick} className="relative flex items-center gap-2 px-5 py-3 bg-white rounded-full shadow-[0_4px_8px_rgba(0,0,0,0.25)]">
      <span className="absolute inset-0 rounded-full border-6 border-[#2563eb] clip-blue" />
      <span className="absolute inset-0 rounded-full border-6 border-[#facc15] clip-yellow" />
      <span className="absolute inset-0 rounded-full border-6 border-[#2fb5a9] clip-green" />
      <Plus size={16} strokeWidth={4} />
       <span className="text-[#004896] text-sm font-bold">
      SELL
      </span>
    </button>
  );
}
