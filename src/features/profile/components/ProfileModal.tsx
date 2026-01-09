import { 
  FileText, 
  Package, 
  ShoppingCart, 
  CreditCard, 
  HelpCircle, 
  Settings,
  LogOut
} from 'lucide-react';

type ProfileProps={
    onClose:()=>void
    onLogout:()=>void
}

const ProfileModal = ({ onClose, onLogout }:ProfileProps) => {
  return (
    // Overlay to detect clicks outside
    <div className="fixed inset-0 z-50 bg-transparent" onClick={onClose}>
      
      {/* Modal Card */}
      <div 
        className="absolute top-16 right-4 w-80 bg-white rounded-md shadow-xl border border-gray-100 overflow-hidden flex flex-col animate-in fade-in slide-in-from-top-2 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Section */}
        <div className="p-5 pb-4">
          <div className="flex items-center gap-3 mb-4">
           
            <div className="flex flex-col">
              <h2 className="text-lg font-bold text-[#002f34] truncate w-44">
                {'Guest User'}
              </h2>
            </div>
          </div>
          <button className="w-full bg-[#002f34] hover:bg-[#004d54] text-white font-bold py-3 rounded transition-colors duration-200">
            View and edit profile
          </button>
        </div>

        <hr className="border-gray-100" />

        {/* Menu List */}
        <div className="flex flex-col py-2">
          <button className="flex items-center gap-4 px-5 py-3 hover:bg-gray-100 transition-colors text-[#002f34]">
            <FileText size={20} /> 
            <span className="text-[15px]">My ADS</span>
          </button>

          <button className="flex items-center gap-4 px-5 py-3 hover:bg-gray-100 transition-colors text-[#002f34]">
            <Package size={20} /> 
            <span className="text-[15px]">Buy Business Packages</span>
          </button>

          <button className="flex items-center gap-4 px-5 py-3 hover:bg-gray-100 transition-colors text-[#002f34]">
            <ShoppingCart size={20} /> 
            <span className="text-[15px]">View Cart</span>
          </button>

          <button className="flex items-center gap-4 px-5 py-3 hover:bg-gray-100 transition-colors text-[#002f34]">
            <CreditCard size={20} /> 
            <span className="text-[15px]">Bought Packages & Billing</span>
          </button>
          
          <hr className="my-2 border-gray-100" />
          
          <button className="flex items-center gap-4 px-5 py-3 hover:bg-gray-100 transition-colors text-[#002f34]">
            <HelpCircle size={20} /> 
            <span className="text-[15px]">Help</span>
          </button>

          <button className="flex items-center gap-4 px-5 py-3 hover:bg-gray-100 transition-colors text-[#002f34]">
            <Settings size={20} /> 
            <span className="text-[15px]">Settings</span>
          </button>

          <button 
            onClick={onLogout}
            className="flex items-center gap-4 px-5 py-3 hover:bg-red-50 transition-colors text-red-600"
          >
            <LogOut size={20} /> 
            <span className="text-[15px] font-medium">Logout</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileModal;