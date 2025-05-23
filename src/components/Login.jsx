import React from 'react'
import sign from "../assets/sign.svg"
import background from "../assets/background.png";
import back from "../assets/back.png";
import { useParams, useNavigate } from "react-router-dom";
function Login() {
    const { id } = useParams();
      const navigate = useNavigate();
      // Navigation functions
     
    
      const Signup = () => {
        navigate("/Signup"); // Updated route to be consistent
      };
      const goBackToLanding = () => {
        navigate("/"); // Updated route to be consistent
      };


  return (
<section class="bg-gray-300 shadow-xl/30">
        <div onClick={goBackToLanding} className="flex flex-row cursor-pointer">
          <img className=" flex flex-row pt-10 pl-10 w-15 h-15" src={back} alt="Back to Landing Page "/>
          <label className=" flex flex-row mt-9 text-[18px]  ">Back</label>
        </div>
<div className="">
    {/* background  */}
    <div className="absolute top-0 left-0 w-180 h-173 bg-cover bg-no-repeat bg-center"
    
    style={{
        backgroundImage: `url(${background})`,
      }}>
        <div onClick={goBackToLanding} className="flex flex-row cursor-pointer">
          <img className=" flex flex-row pt-10 pl-10 w-15 h-15" src={back} alt="Back to Landing Page "/>
          <label className=" flex flex-row mt-9 text-[18px]  ">Back</label>
        </div>
      </div>
      {/* login setUp */}
</div>
  <div class="flex flex-col items-center ml-170 justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-gray-900">
          <img class="w-8 h-8 mr-2 " src={sign} alt="logo"></img>
          SIGN X    
      </a>
      <div class="w-full bg-gray-200 rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                   LogIn to your account
              </h1>
              <form class="space-y-4 md:space-y-6" action="#">
                  <div>
                      <label for="email" class="block mb-2 text-sm font-medium text-gray-900">Your email</label>
                      <input type="email" name="email" id="email" class="bg-gray-150 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="name@company.com" required=""></input>
                  </div>
                  <div>
                      <label for="password" class="block mb-2 text-sm font-medium text-gray-900 ">Password</label>
                      <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-150 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required=""></input>
                  </div>
                  <div class="flex items-center justify-between">
                      <div class="flex items-start">
                          <div class="flex items-center h-5">
                            <input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-1 focus:ring-primary-300 " required=""></input>
                          </div>
                          <div class="ml-3 text-sm">
                            <label for="remember" class="text-gray-600">Remember me</label>
                          </div>
                      </div>
                      <a href="#" class="text-sm font-medium text-green-600 hover:underline dark:text-green-500">Forgot password?</a>
                  </div>
                  <button type="submit" class="w-full text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Sign in</button>
                  <p class="text-sm font-light text-gray-700 ">
                      Don’t have an account yet? <a onClick={Signup} href="#" class="font-medium text-green-600 hover:underline dark:text-green-500">Sign up</a>
                  </p>
              </form>
          </div>
      </div>
  </div>
</section>
  )
}

export default Login
