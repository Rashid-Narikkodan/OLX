import { useState } from "react";
import {
  X,
  ChevronLeft,
  ChevronRight,
  Smartphone,
  ArrowLeft,
} from "lucide-react";
import type { AuthPageProps } from "../auth.types";
import OLX from "@/assets/icons/OLX.svg";

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
          <>
            {/* Carousel Section */}
            <div className="relative mt-6 flex flex-col items-center">
              {/* Left Arrow */}
              <button className="absolute left-0 top-1/2 -translate-y-1/2 text-gray-400">
                <ChevronLeft size={20} />
              </button>

              {/* Right Arrow */}
              <button className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-400">
                <ChevronRight size={20} />
              </button>

              {/* Illustration */}
              <div className="flex justify-center">
                <div className="h-24 w-24 rounded-full bg-yellow-300 flex items-center justify-center">
                  <Smartphone className="h-10 w-10 text-black" />
                </div>
              </div>

              {/* Dots */}
            </div>
            <h2 className="mt-6 text-center text-lg font-semibold text-gray-900">
              Help us become one of the safest places to buy and sell
            </h2>

            <div className="mt-4 flex justify-center gap-2">
              <span className="h-2 w-2 rounded-full bg-blue-600" />
              <span className="h-2 w-2 rounded-full bg-gray-300" />
              <span className="h-2 w-2 rounded-full bg-gray-300" />
            </div>

            <div className="mt-6 space-y-3">
              <button className="flex w-full items-center justify-center gap-2 rounded border border-blue-600 py-3 font-medium text-blue-600 hover:bg-blue-50">
                <Smartphone size={18} />
                Continue with phone
              </button>

              <button className="flex w-full items-center justify-center gap-2 rounded border py-3 font-medium text-gray-700 hover:bg-gray-50">
                <img
                  src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
                  className="h-5 w-5"
                />
                Continue with Google
              </button>
            </div>

            <div className="my-5 text-center text-sm text-gray-500">OR</div>

            <button
              onClick={() => setMode("email")}
              className="w-full text-center text-sm font-semibold underline"
            >
              Login with Email
            </button>

            <p className="mt-6 text-center text-xs text-gray-400">
              All your personal details are safe with us.
            </p>
            <p className="mt-1 text-center text-xs text-gray-400">
              If you continue, you are accepting{" "}
              <span className="text-blue-600 cursor-pointer">
                OLX Terms and Conditions
              </span>{" "}
              and{" "}
              <span className="text-blue-600 cursor-pointer">
                Privacy Policy
              </span>
            </p>
          </>
        )}

        {/* ================= EMAIL SCREEN ================= */}
        {mode === "email" && (
          <>
            {/* Back */}
            <button
              onClick={() => setMode("options")}
              className="absolute left-4 top-4 text-gray-500 hover:text-black"
            >
              <ArrowLeft size={20} />
            </button>

            {/* Logo */}
            <div className="mt-8 flex justify-center">
              <img src={OLX} alt="OLX" className="h-30" />
            </div>

            <h2 className="mt-6 text-center text-lg font-semibold">
              Enter your email to login
            </h2>

            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-6 w-full rounded border border-blue-600 px-3 py-3 outline-none focus:ring-1 focus:ring-blue-600"
            />

            <div className="mt-4 rounded bg-yellow-50 px-3 py-2 text-sm text-gray-700">
              If you are a new user please select any other login option from
              previous page.
            </div>

            <button
              disabled={!email}
              className={`mt-6 w-full rounded py-3 font-semibold ${
                email ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-400"
              }`}
            >
              Next
            </button>

            <p className="mt-3 text-center text-xs text-gray-400">
              Your email is never shared with external parties nor do we use it
              to spam you in any way.
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default AuthPage;
