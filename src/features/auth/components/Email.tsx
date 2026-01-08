import { ArrowLeft } from "lucide-react"
import OLX from '@/assets/icons/OLX.svg'

type EmailProps={
    email:string
    setMode:()=>void,
    setEmail:(value:string)=>void,
}

const Email = ({setMode,setEmail,email}:EmailProps) => {
  return (
<>
            {/* Back */}
            <button
              onClick={setMode}
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
              onChange={(e)=>setEmail(e.target.value)}
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
          </>  )
}

export default Email