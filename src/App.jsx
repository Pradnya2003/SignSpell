import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Services from "./components/Services";
import Voice from "./components/Voice";
import Video from "./components/Video"; 
import Text from "./components/Text";
import Signup from "./components/Signup";

function App() {
  return (
   <Router basename="/SignSpell">

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/Voice" element={<Voice />} />
        <Route path="/services/Video" element={<Video />} />
        <Route path="/services/Text" element={<Text />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Video" element={<Video />} />
        <Route path="/Voice" element={<Voice />} />
        <Route path="/Text" element={<Text />} />
      </Routes>
    </Router>
  );
}

export default App;
