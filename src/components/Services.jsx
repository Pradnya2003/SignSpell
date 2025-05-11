import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import pic from "../assets/no1.jpeg";
import pic2 from "../assets/upload.png";
import pic1 from "../assets/no1.jpeg";
import back from "../assets/back.png";
import image from "../assets/deaf.jpg"
import service from "../assets/service.jpg"

function Services() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Navigation functions
  const goBackToLanding = () => {
    navigate("/"); // Replace "/" with your actual landing page route if different
  };
  const goToVoice = () => {
    navigate("/services/Voice"); // Updated route to be consistent
  };
  const goToVideo = () => {
    navigate("/services/Video"); // Updated route to be consistent
  };
  const goToText = () => {
    navigate("/services/Text"); // Updated route to be consistent
  };

  return (
    <div>
      {/* Header / Back Button */}
      <div className="p-5">
        <div onClick={goBackToLanding} className="flex flex-row cursor-pointer">
          <img className=" flex flex-row pt-10 pl-10 w-15 h-15" src={back} alt="Back to Landing Page "/>
          <label className=" flex flex-row mt-9 text-[18px]  ">Back</label>
        </div>
        <div className="">
          <img className="h-120 w-420"src={service} alt="" />
          
          <h1 className="flex flex-row items-center justify-center font-bold text-[50px]">
             <span className="text-green-500">OUR</span>&nbsp;SERVICES
            </h1>
        </div>
        
      </div>

      {/* Voice Translation Section */}
      <div className="p-20">
        <h1 className="font-semibold text-[40px] pt-20 pl-30">Voice Translation</h1>
        <div className="flex flex-row items-center justify-between w-full h-100 pl-30">
          <div className="flex flex-row text-left justify-between w-120 pr-2">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium vitae non quam! 
              Repellendus autem provident impedit consectetur sit dolorem reprehenderit, ullam praesentium? 
              Sequi mollitia optio, totam excepturi sapiente repellat reprehenderit. Lorem ipsum dolor sit amet 
              consectetur adipisicing elit. Praesentium vitae non quam! Repellendus autem provident impedit consectetur 
              sit dolorem reprehenderit, ullam praesentium? Sequi mollitia optio, totam excepturi sapiente repellat reprehenderit.
            </p>
          </div>
          <div className="flex flex-row pr-20 items-center justify-between h-100 w-130 m-5">
            <img src={image} alt="Voice Translation" />
          </div>
        </div>
        <div className="p-30">
          <div className="bg-gray-100 h-40 flex flex-col items-center justify-between">
            <div className="p-16 flex flex-col items-center justify-center ">
              <h2>Check Your Voice Get Translated</h2>
              <div className="flex flex-col items-center gap-10">
                <div onClick={goToVoice} className="inline-block cursor-pointer">
                  <button className="rounded-2xl p-2 w-32 bg-gray-300">
                    View
                  </button>
                </div>
              </div>
            </div>
            {/* <div className="h-60 w-70 pt-10 pr-10 mr-30 bg-gray-300">
              
            </div> */}
          </div>
        </div>
      </div>

      {/* Video Translation Section */}
      <div className="p-20">
        <h1 className="font-semibold text-[40px] pt-20 pl-30">Video Translation</h1>
        <div className="flex flex-row items-center justify-between w-full h-100 pl-30">
          <div className="flex flex-row text-left justify-between w-120 pr-2">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium vitae non quam! 
              Repellendus autem provident impedit consectetur sit dolorem reprehenderit, ullam praesentium? 
              Sequi mollitia optio, totam excepturi sapiente repellat reprehenderit. Lorem ipsum dolor sit amet 
              consectetur adipisicing elit. Praesentium vitae non quam! Repellendus autem provident impedit consectetur 
              sit dolorem reprehenderit, ullam praesentium? Sequi mollitia optio, totam excepturi sapiente repellat reprehenderit.
            </p>
          </div>
          <div className="flex flex-row pr-20 items-center justify-between h-100 w-130 m-5">
            <img src={pic} alt="Video Translation" />
          </div>
        </div>
        <div className="p-30">
          <div className="bg-gray-100 h-40 flex flex-col items-center justify-between">
            <div className="p-16 flex flex-col">
              <h2>Check Your Video Get Translated</h2>
              <div className="flex flex-col items-center gap-10">
                <div onClick={goToVideo} className="inline-block cursor-pointer">
                  <button className="rounded-2xl p-2 w-32 bg-gray-300">
                    View
                  </button>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>

      {/* Text Translation Section */}
      <div className="p-20">
        <h1 className="font-semibold text-[40px] pt-20 pl-30">Text Translation</h1>
        <div className="flex flex-row items-center justify-between w-full h-100 pl-30">
          <div className="flex flex-row text-left justify-between w-120 pr-2">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium vitae non quam! 
              Repellendus autem provident impedit consectetur sit dolorem reprehenderit, ullam praesentium? 
              Sequi mollitia optio, totam excepturi sapiente repellat reprehenderit. Lorem ipsum dolor sit amet 
              consectetur adipisicing elit. Praesentium vitae non quam! Repellendus autem provident impedit consectetur 
              sit dolorem reprehenderit, ullam praesentium? Sequi mollitia optio, totam excepturi sapiente repellat reprehenderit.
            </p>
          </div>
          <div className="flex flex-row pr-20 items-center justify-between h-100 w-130 m-5">
            <img src={pic} alt="Text Translation" />
          </div>
        </div>
        <div className="p-30">
          <div className="bg-gray-100 h-40 flex flex-col items-center justify-between">
            <div className="p-16 flex flex-col">
              <h2>Check Your Text Get Translated</h2>
              <div className="flex flex-col items-center gap-10">
                <div onClick={goToText} className="inline-block cursor-pointer">
                  <button className="rounded-2xl p-2 w-32 bg-gray-300">
                    View
                  </button>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
