import React from 'react'
import { useState } from 'react'
import pic from "../assets/voice.png";
import pic1 from "../assets/upload.png";
import back from "../assets/back.png";
import { useParams, useNavigate } from "react-router-dom";


function Voice() {
  const { id } = useParams();
  const navigate = useNavigate();
  const goBackTo = () => {
    navigate("/"); // Replace "/" with your actual landing page route if different  
  }
    const [file , setFile] = useState();


    function handleFile(event){
        setFile(event.target.files[0]);
        console.log(file);
        };
  return (
    <div id='Voice' className="">
      <div onClick={goBackTo} className="inline-block cursor-pointer">
        <img className="pt-10 pl-10 h-20 w-20" src={back} alt="Back to Landing Page" />
          </div>
     <div className="">
             <h1 className="font-semibold text-[40px] pt-20 pl-30">Voice Translation</h1>
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
                 <img src={pic} alt="" />
             </div>
             
             </div>
             <div className="p-30">
             <div className="bg-gray-100 h-100  flex flex-row items-center justify-between ">
               
               <h2 className="flex flex-row items-center p-30  "> Check you Voice Get Translated  
                  
                </h2>
               <div className="flex flex-row items-center justify-center mr-30 h-60 w-100 bg-gray-300">
               <div className="flex flex-col items-center justify-center">
               <img className="flex  flex-col  items-center justify-center "  src={pic1} alt="" />
               <input className="flex flex-col   w-20  items-center justify-center " type="file" accept='mp3' />
               
                <p className=" flex flex-col  items-center justify-center " >Upload File Here </p>
                </div>
               </div>
            </div> 
            </div>
          </div> 
    </div>
  )
}

export default Voice
