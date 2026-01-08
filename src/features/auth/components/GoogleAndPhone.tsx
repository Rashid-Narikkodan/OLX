import { ChevronLeft, ChevronRight,Smartphone } from "lucide-react"
import { useAuth } from "@/hooks/useAuth"
const GoogleAndPhone = ({setMode}:{setMode:()=>void}) => {
  const { loginWithGoogle }=useAuth()
  const handleGoogleAuth=()=>{
    loginWithGoogle()
  }
  return (
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

              <button onClick={handleGoogleAuth} className="flex w-full items-center justify-center gap-2 rounded border py-3 font-medium text-gray-700 hover:bg-gray-50">
                <img
                  src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
                  className="h-5 w-5"
                />
                Continue with Google
              </button>
            </div>

            <div className="my-5 text-center text-sm text-gray-500">OR</div>

            <button
              onClick={setMode}
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
  )
}

export default GoogleAndPhone