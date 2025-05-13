import React, { useRef } from "react";
import { motion } from "framer-motion";
import Header from "./Header";
import MainSlider from './MainSlider'


const Body = () => {

  return (
    <div className="relative w-full bg-[#0d0d0d] flex flex-col text-white min-h-full ">

      <div className="absolute top-0 w-full z-50">
        <Header/>
      </div>

      <MainSlider/> 

    </div>
  );
};

export default Body;
