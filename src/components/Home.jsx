import React from "react";
import { Link } from "react-router-dom";
import background from "../assets/design2.png";
import pic from "../assets/kavithamam.jpg";
import surya from "../assets/surya.jpg"
import srini from "../assets/srini.png"
import about from "../assets/CLAP (2).jpeg";
import pradnya from "../assets/pradnya.jpg";
import sms from "../assets/SriMathi.jpg";
import bg from "../assets/text.png";
import bg3 from "../assets/image2.png";
import linkedin from "../assets/linkedIn.svg";
import email from "../assets/email.svg";
import x from "../assets/x.png";
import Navbar from "./Navbar";
import Login from "./Login";
import Form from "./form";
import { useParams, useNavigate } from "react-router-dom";


export default function Home() {
  const { id } = useParams();
  const navigate = useNavigate();
  // Navigation functions
 

  const Voice = () => {
    navigate("/Voice"); // Updated route to be consistent
  };
  const Video = () => {
    navigate("/Video"); // Updated route to be consistent
  };
  const Text = () => {
    navigate("/Text"); // Updated route to be consistent
  };
 

  return (
    <div className="min-h-screen scroll-m-0 scroll-smooth">
      {/* Navbar appears fixed on top */}
      <Navbar />

      {/* Hero / Banner Section with Background Image */}
      <section
  id="Home"
  className="relative w-full min-h-screen bg-cover bg-center bg-no-repeat"
  style={{
    backgroundImage: `url(${background})`,
  }}
>
  {/* Overlay for contrast */}
  <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent"></div>

  {/* Content */}
  <div className="relative z-10 flex flex-col justify-center items-start h-full px-4  sm:px-6 md:px-10 lg:px-20 py-20">
    <h1 className="flex text-3xl pl-20 pt-50 sm:text-4xl md:text-5xl font-bold text-green-400 mb-4 leading-tight">
      SIGN SPELL
    </h1>
    <p className="text-base pl-20 sm:text-lg md:text-xl text-white mb-6 max-w-md md:max-w-lg">
      AI-powered Sign Language Translator
    </p>
    <Link
      to="/services"
      className="bg-green-500 ml-20 hover:bg-green-600 text-white py-2 px-5 rounded-lg font-semibold text-sm md:text-base transition duration-300"
    >
      Try Now
    </Link>
  </div>
</section>



      {/* About Section */}
       
      <section id="About"  className="flex flex-col  justify-between p-30 h-[100vh]">
        <p className="text-green-500 text-left pl-28 text-[17px]">Sign language translation</p>
        <h1 className="font-semibold text-[40px] ml-28 w-130 ">Empowering sign language access</h1>
          <div className="flex flex-row items-center justify-between w-full h-100 pl-30">
            
            <div className="flex flex-row text-left justify-between  w-120 pr-2  ">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
                    vitae non quam! Repellendus autem provident impedit consectetur sit dolorem reprehenderit
                    , ullam praesentium? Sequi mollitia optio, totam excepturi sapiente repellat reprehenderit.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
                    vitae non quam! Repellendus autem provident impedit consectetur sit dolorem reprehenderit
                    , ullam praesentium? Sequi mollitia optio, totam excepturi sapiente repellat reprehenderit.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
                    vitae non quam! Repellendus autem provident impedit consectetur sit dolorem reprehenderit
                    , ullam praesentium? Sequi mollitia optio, totam excepturi sapiente repellat reprehenderit.
                    </p>
            </div>
              <div className=" flex flex-row pr-20 items-center justify-between h-100 w-130 m-5">
                  <img src={about} alt="" />
              </div>
              
          </div>
          

      </section>




      {/* How it works Section */}
      <section id="services" className="flex flex-col justify-start items-start py-12 px-60">
        <p className="text-green-500 text-left text-[17px] pt-10">Sign language translation</p>
        <h1 className="text-[39px] font-bold text-left">Transform any content into sign language</h1>
        <div className="flex flex-row justify-center w-[1000px] items-center pt-20 gap-10 ">
          <div onClick={Text} className="h-auto ">
            <img className="h-100 w-100 hover:bg-gray-150" src={bg} alt="Transformation illustration" />
            <div className="text-xl p-6 text-left">
              <h1 className="text-[20px] font-semibold flex hover:text-green-300 transition-colors mb-2">Text Translation</h1>
              
              <p className="text-gray-600">
                Upload your text, voice, or video to begin the translation process.
              </p>
            </div>
          </div>
          <div onClick={Voice} className="h-auto">
            <img className="h-100 w-100" src={bg3} alt="Transformation illustration" />
            <div className="text-xl p-6 text-left">
            <h1 className="text-[20px] font-semibold flex hover:text-green-300 transition-colors mb-2">Voice Translation</h1>
             
              <p className="text-gray-600">
                Upload your text, voice, or video to begin the translation process.
              </p>
            </div>
          </div>
        </div>
      </section>

    {/* Services Section */}
<section id="OurTeam" className="bg-gray-100 py-12 px-4 sm:px-12 lg:px-60">
  <div className="w-full max-w-screen-xl mx-auto">
    {/* Section Title */}
    <p className="text-green-500 text-left pt-10 text-[17px]">Sign language translation</p>
    <h2 className="text-[39px] font-bold text-left text-gray-800 pb-8">OUR TEAM</h2>

    {/* Step Cards */}
    <div className="flex flex-wrap justify-center items-center p-10 gap-10">
      {/* Step 1: Voice Translation */}
      <div className="bg-white w-72 h-80 flex flex-col justify-center items-center rounded-lg shadow-lg text-center">
        <img className="h-72 w-full object-cover mx-auto" src={pic} alt="Voice Translation" />
        <div className="text-xl p-6 text-left">
          <h1 className="text-[20px] font-semibold text-center text-green-500 transition-colors mb-2">Mrs. Kavitha M</h1>
        </div>
      </div>

      {/* Step 2: Video Translation */}
      {/* Add your other steps here */}
    </div>

    {/* Grid on the second line */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
      {/* Card 1 */}
      <div onClick={Text} className="w-60 h-80 bg-white  rounded-lg shadow-lg text-center transition-transform">
        <img className="h-60 w-full rounded-sm object-cover mx-auto" src={pradnya} alt="Text Translation" />
        <div className="text-xl p-6 text-left">
          <h1 className="text-[20px] font-semibold text-center text-green-500 transition-colors mb-2">PRADNYA K T</h1>
        </div>
      </div>

      {/* Card 2 */}
      <div onClick={Video} className="w-60 h-80 bg-white rounded-lg shadow-lg text-center transition-transform">
        <img className="h-60 w-full object-cover mx-auto" src={sms} alt="Video Translation" />
        <div className="text-xl p-6 text-left">
          <h1 className="text-[20px] font-semibold text-center text-green-500 transition-colors mb-2">SRI MATHI S</h1>
        </div>
      </div>

      {/* Card 3 */}
      <div onClick={Text} className="w-60 h-80 bg-white rounded-lg shadow-lg text-center transition-transform">
        <img className="h-60 w-full object-cover mx-auto" src={srini} alt="Text Translation" />
        <div className="text-xl p-6 text-left">
          <h1 className="text-[20px] font-semibold text-center text-green-500 transition-colors mb-2">SRINIVASAN R</h1>
        </div>
      </div>

      {/* Card 4 */}
      <div onClick={Text} className="w-60 h-80 bg-white rounded-lg shadow-lg text-center transition-transform">
        <img className="h-60 w-full object-cover mx-auto" src={surya} alt="Text Translation" />
        <div className="text-xl p-6 text-left">
          <h1 className="text-[20px] font-semibold text-center text-green-500 transition-colors mb-2">SURYA B</h1>
        </div>
      </div>
    </div>
  </div>
</section>


      

      {/* Contact Section */}
      <Form />

      {/* Footer Section */}
    <section className="bg-black  py-12">
  <div className="container mx-auto px-6">
    <div className="flex flex-col md:flex-row justify-between items-center gap-8">
      
      {/* Logo and App Link */}
      <div className="text-center md:text-left">
        <h3 className="text-green-400 text-3xl font-semibold">SIGN SPELL</h3>
        <a href="https://saisurya7860.github.io/SignSpell/" target="_blank" className="text-white mt-4 block text-lg hover:underline">
          Explore the SignSpell App
        </a>
      </div>

      {/* Navigation Links */}
      <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
        <Link to="/" className="text-white text-lg hover:text-green-400 transition-colors">Home</Link>
        <Link to="/about" className="text-white text-lg hover:text-green-400 transition-colors">About</Link>
        <Link to="/services" className="text-white text-lg hover:text-green-400 transition-colors">Services</Link>
       
      </div>
    </div>

    <div className="mt-8 border-t-2 border-gray-600 pt-6">
      {/* Social Media Icons */}
      <div className="flex justify-center gap-8 text-white">
        <a href="https://www.linkedin.com/feed/" target="_blank" rel="noopener noreferrer">
          <img className="h-[30px] w-[30px] hover:scale-110 transition-transform" src={linkedin} alt="LinkedIn" />
        </a>
        <a href="mailto:pradnya08062003@gmail.com" target="_blank" rel="noopener noreferrer">
          <img className="h-[30px] w-[30px] hover:scale-110 transition-transform" src={email} alt="Email" />
        </a>
        <a href="https://x.com/?lang=en" target="_blank" rel="noopener noreferrer">
          <img className="h-[30px] w-[30px] hover:scale-110 transition-transform" src={x} alt="X" />
        </a>
      </div>

      {/* Footer Text */}
      <div className="text-center mt-6 text-white text-sm">
        <p>&copy; 2025 Machine Maestros. All rights reserved.</p>
      </div>
    </div>
  </div>
</section>

    </div>
  );
}
