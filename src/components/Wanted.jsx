import React, { useState } from "react";
import PerfumeCarousel from './PerfumeCarousel'
import Popular from './Popular'

const Wanted = () => {

  return (
    <div className="w-full flex flex-col p-12 gap-12 text-white 
         items-center overflow-hidden relative min-h-screen">

      <h1 className="mt-10 text-center text-3xl sm:text-3xl md:text-5xl font-extrabold tracking-wider font-playfair text-white">
        MOST WANTED SCENTS
      </h1>

      <div>
        <PerfumeCarousel/>
      </div>

      <div>
        <h1 className="text-3xl sm:text-3xl md:text-5xl tracking-wider text-center font-bold text-[#f8f8f8] font-playfair mt-36">
          MOST POPULAR SCENTS
        </h1>
      </div>

      <div>
        <Popular/>
      </div>

      <div className="text-center text-xs md:text-sm mb-10 text-[#bbbbbb]">
        <span>Disclaimer: Bottles may be different from the images on the site</span>
      </div>
    </div>
  );
};

export default Wanted;