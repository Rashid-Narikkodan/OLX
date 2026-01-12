import { useState } from "react";
import GoogleAndPhone from "../components/GoogleAndPhone";
import Email from "../components/Email";
import {
  X,
} from "lucide-react";
import type { AuthPageProps } from "../auth.types";

type AuthMode = "options" | "email";

const AuthPage = ({ onClose }: AuthPageProps) => {
  const [mode, setMode] = useState<AuthMode>("options");
  const [email, setEmail] = useState("");

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="relative w-full max-w-sm rounded-md bg-white px-6 py-5 shadow-lg">
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-black"
        >
          <X size={20} />
        </button>

        {/* ================= OPTIONS SCREEN ================= */}
        {mode === "options" && (
          <GoogleAndPhone setMode={()=>setMode('email')} onClose={onClose}/>
        )}

        {/* ================= EMAIL SCREEN ================= */}
        {mode === "email" && (
          <Email setMode={()=>setMode('options')} setEmail={setEmail} email={email}/>
        )}
      </div>
    </div>
  );
};

export default AuthPage;
