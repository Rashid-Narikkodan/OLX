import { Search, Heart, User, MapPin, ChevronDown } from "lucide-react";
import OLX from "@/assets/icons/OLX.svg";
import SellButton from "../ui/SellButton";
import { useState, useEffect } from "react";
import AuthPage from "@/features/auth/pages/AuthModal";
import { useAuth } from "@/hooks/useAuth";
import { MessageCircleIcon } from "lucide-react"; 
import Profile from '@/assets/images/profile.png'
import { Bell } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Categories from "@/components/ui/Categories";
import { getCategories } from "@/services/db";
import { logout } from "@/features/auth/auth.service";
import type { Category } from "@/types/category.type";

export default function Header() {
  const [index, setIndex] = useState(0);
  const [wannaLogin, setLogin] = useState(false);
  const [placeholders, setPlaceholder] = useState<string[]>(['Somthing']);
  const {user}=useAuth()
  const navigate = useNavigate()
  const [categories,setCategories]=useState<Category[]|null>(null)
  const [q,setQ]=useState('')
  useEffect(()=>{
    const fetchCategories=async ()=>{
      const cats= await getCategories()
      setCategories(cats)
      setPlaceholder(cats.map((c)=>c.name))
    }
    fetchCategories()
  },[])
  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % placeholders.length);
    }, 1500);

    return () => clearInterval(id);
  }, [placeholders.length]);

  const handleClick=()=>{
    if(user){
      navigate('/post');
    }else{
      setLogin(true)
    }
  }

  return (
    <>
    <header className="w-full h-18 flex items-center px-3 bg-[#F5FAFF] border-b border-[rgb(229,231,235)]">
      <div onClick={()=>navigate('/')} className="flex items-center mr-4">
        <img
          src={OLX}
          alt="OLX"
          className="h-12 w-auto"
        />
      </div>

      <div className="flex items-center gap-1 px-2 sm:px-3 py-3 border border-[#d1d5db] bg-white rounded-full cursor-pointer text-[#1f2937] font-medium">
        <MapPin size={18} className="text-blue-500" />
        <span className="hidden sm:inline text-sm whitespace-nowrap">
          Chennai, Tamil Nadu
        </span>
        <ChevronDown size={20} className="rotate-270 text-gray-500" />
      </div>

        
      <form onSubmit={(e)=>{e.preventDefault();navigate(`/ads?q=${q}`)}} className="flex flex-1 mx-6 h-12 bg-white border border-[#d1d5db] rounded-full">
        <input
          type="text"
          placeholder={`Search "${placeholders[index]}"`}
          value={q}
          onChange={(e)=>setQ(e.target.value)}
          className="flex-1 px-5 text-sm outline-none text-[#1f2937]"
          />
        <button type="submit" className="w-12 m-1 bg-[#3b82f6] rounded-full text-white flex items-center justify-center hover:bg-[#2563eb]">
          <Search size={23} />
        </button>
      </form>
        
      <div className="flex items-center lg:gap-8 gap-2">
        <button className="flex flex-col items-center text-[#1f2937] hover:text-[#111827] text-xs font-medium">
          <Heart size={22} className="text-blue-800" />
          Wishlist
        </button>

        { !user ? <button
          onClick={() => setLogin(true)}
          className="flex flex-col items-center text-[#1f2937] hover:text-[#111827] text-xs font-medium"
        >
          <User size={22} className="text-blue-800" />
          Login
        </button>
        :<button
          className="flex flex-col items-center text-[#1f2937] hover:text-[#111827] text-xs font-medium"
        >
          <MessageCircleIcon size={22} className="text-blue-800" />
          Chat
        </button>
        }
        {user&&
          <div className="rounded-full bg-gray-500 object-cover" onClick={()=>logout()}>
            <img src={Profile} alt="" className="rounded-3xl size-12"/>
        </div>
        }
        <SellButton onClick={()=>handleClick()} />

        {user&&
        <button
          className="flex flex-col items-center text-[#1f2937] hover:text-[#111827] text-xs font-medium"
        >
          <Bell size={22} className="text-gray-900" />
        </button>
        }
      </div>
      {wannaLogin && <AuthPage onClose={() => setLogin(false)} />}
    </header>
          {categories&&<Categories categories={categories} />}
    </>
  )
}
