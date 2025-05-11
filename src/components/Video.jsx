import React, { useState } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import pic from "../assets/videocon.jpg";
import pic1 from "../assets/upload.png";
import back from "../assets/back.png";

function Video() {
  const { id } = useParams();
  const navigate = useNavigate(); 

  // State for the selected file and upload status
  const [file, setFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState("");

  // Navigate back to your landing page
  const goBackTo = () => {
    navigate("/"); // Update with your actual landing page route if different
  };

  // Handle the file input change
  const handleFile = (event) => {
    if (event.target.files && event.target.files[0]) {
      const selectedFile = event.target.files[0];
      setFile(selectedFile);
      console.log("Selected file:", selectedFile);
    }
  };

  // Function to upload the file to your backend server
  const handleUpload = async () => {
    if (!file) {
      setUploadStatus("Please select a video file before uploading.");
      return;
    }
    
    const formData = new FormData();
    formData.append("video", file);

    try {
      setUploadStatus("Uploading...");
      // Update the URL below with your actual upload endpoint
      const response = await fetch("http://your-backend-api.com/upload", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setUploadStatus("Upload successful!");
        // Handle further actions such as navigating or processing the response
      } else {
        setUploadStatus("Upload failed. Please try again.");
        console.error("Server error:", response.statusText);
      }
    } catch (error) {
      console.error("Error during file upload:", error);
      setUploadStatus("Error during file upload.");
    }
  };

  return (
    <div id="Voice" className="">
      <div onClick={goBackTo} className="inline-block cursor-pointer">
        <img className="pt-10 pl-10 h-20 w-20" src={back} alt="Back to Landing Page" />
      </div>
      <div className="">
        <h1 className="font-semibold text-[40px] pt-20 pl-30">Video Translation</h1>
        <div className="flex flex-row items-center justify-between w-full h-100 pl-30">
          <div className="flex flex-row text-left justify-between w-120 pr-2">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium vitae non quam! Repellendus autem provident impedit consectetur sit dolorem reprehenderit, ullam praesentium? Sequi mollitia optio, totam excepturi sapiente repellat reprehenderit. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div className="flex flex-row pr-20 items-center justify-between h-100 w-130 m-5">
            <img src={pic} alt="Video" />
          </div>
        </div>
        <div className="p-30">
          <div className="bg-gray-100 h-100 flex flex-row items-center justify-between">
            <h2 className="p-30 flex flex-col">
              Check your Text Get Translated
            </h2>
            <div className="flex flex-row items-center justify-center mr-30 h-60 w-80 bg-gray-300">
              <div className="flex flex-col items-center justify-center">
                <img className="flex items-center justify-center" src={pic1} alt="Upload Icon" />
                <input
                  className="w-20"
                  type="file"
                  accept="video/mp4,video/webm,video/ogg"
                  onChange={handleFile}
                />
                <p>Upload File Here</p>
              </div>
              
            </div>
          </div>
          <div className="ml-150 mt-10 ">
          <button 
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleUpload}
          >
            Upload Video
          </button>
          {uploadStatus && <p className="mt-2">{uploadStatus}</p>}
        </div>
       
        </div>
        {/* Upload button and status message */}
        
      </div> 
    </div>
  );
}

export default Video;
