import React, { useState, useEffect } from "react";
import white from "../assets/whitelogo.png"
import { Outlet } from 'react-router-dom';
import Home from "./Home";
import { useParams, useNavigate } from "react-router-dom";


export default function Navbar() {
   const { id } = useParams();
    const navigate = useNavigate();
    // Navigation functions
   
  
    const login = () => {
      navigate("/Login"); // Updated route to be consistent
    };
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Change threshold as needed; here, it toggles after scrolling 200px.
      setIsScrolled(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-colors duration-300 ${
        isScrolled ? "bg-black" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto p-4  ">
        <div className="flex justify-between items-center">
          <div className="flex gap-4 items-center ">
         <img className="w-15 h-15 " src={white} alt="" />
          <div className="text-green-500 text-[28px] flex justify-center items-center font-bold m xl:px-0 py-0 "> SIGN SPELL</div>
          </div>
          <ul className="flex justify-center items-center space-x-7 pl-0 py-0 ">
            <li>
              <a href="#Home" className=" flex justify-center items-center text-white">
                Home
              </a>
            </li>
            <li>
              <a href="#About" className="text-white">
                About
              </a>
            </li>
            <li>
              <a href="#services" className="text-white">
                Services
              </a>
            </li>
            <li>
              <a href="#OurTeam" className="text-white">
               OurTeam
              </a>
            </li>
            <li>
              <a href="#Contact " className="text-white">
                Contact
              </a>
            </li>
            <li>
              <button onClick={login} className="bg-green-500 hover:bg-green-600 text-white py-1 px-5 rounded-lg font-semibold text-sm md:text-base transition duration-300"> 
                Login </button>
                
              
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
