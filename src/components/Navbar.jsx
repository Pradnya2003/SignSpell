import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import white from "../assets/whitelogo.png";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const login = () => {
    navigate("/Login");
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-colors duration-300 ${
        isScrolled ? "bg-black" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto p-4">
        <div className="flex justify-between items-center">
          <div className="flex gap-4 items-center">
            <img className="w-15 h-13" src={white} alt="logo" />
            <div className="text-green-500 text-[28px] font-bold">SIGN SPELL</div>
          </div>

          <ul className="flex space-x-7">
            {["Home", "About", "services", "OurTeam", "Contact"].map((section) => (
              <li key={section}>
                <ScrollLink
                  to={section}
                  smooth={true}
                  duration={300}
                  offset={-70} // adjust if you have a fixed header
                  className="text-white cursor-pointer hover:text-green-400 transition-colors"
                >
                  {section}
                </ScrollLink>
              </li>
            ))}
            <li>
              <button
                onClick={login}
                className="bg-green-500 hover:bg-green-600 text-white py-1 px-5 rounded-lg font-semibold text-sm md:text-base transition duration-300"
              >
                Login
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
