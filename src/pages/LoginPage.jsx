import React from "react"
import { useNavigate } from "react-router-dom"
import { FcGoogle } from "react-icons/fc"
import { FaApple } from "react-icons/fa"
import LoginWithBtn from "../components/LoginWithBtn"
import Btn from "../components/Btn"
const LoginPage = () => {
  const navigate = useNavigate()
  return (
    <div className="w-11/12">
      <div className="w-full ml-4 lg:w-1/2 lg:mx-auto">
        <div className="w-full flex flex-col items-center space-y-8">
          <span className="text-white text-2xl font-bold">Login</span>
          <LoginWithBtn AuthProvider={FcGoogle} text={"Login With Google"} />
          <LoginWithBtn AuthProvider={FaApple} text={"Login With Apple"} />
          <span className="text-white">or</span>
          <form className="w-full md:w-1/2">
            <input
              type="email"
              className="w-full px-3 py-2 rounded-xl outline-none border-2 focus:border-red-300 mb-4"
              placeholder="Enter an Email"
              required
            />
            <input
              type="password"
              className="w-full px-3 py-2 rounded-xl outline-none border-2 focus:border-red-300 mb-4"
              placeholder="EnterA Password"
              required
            />
            <Btn value={"Login"} type={"submit"} width={"full"} />
          </form>
          <LoginWithBtn AuthProvider={"span"} text={"Forgot Password"} />
          <span className="text-gray-200">
            No account with us?{" "}
            <span
              className="text-sky-400 hover:underline cursor-pointer"
              onClick={() => navigate("/user")}
            >
              Signup
            </span>
          </span>
        </div>
      </div>
    </div>
  )
}

export default LoginPage