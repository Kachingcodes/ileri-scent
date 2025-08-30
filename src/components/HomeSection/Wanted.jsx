import React, { useState } from "react";
import PerfumeCarousel from './PerfumeCarousel'

const Wanted = () => {

  return (
    <div className="bg-[#e8d6be] w-full flex flex-col p-8 gap-8 text-[#2E2E2E] items-center overflow-hidden relative min-h-screen">

      <h1 className="mt-10 text-center text-3xl sm:text-3xl md:text-5xl font-extrabold tracking-wider font-playfair">
        MOST WANTED SCENTS
      </h1>

      <div>
        <PerfumeCarousel/>
      </div>

      <div className="text-center text-xs md:text-sm text-[#2E2E2E]">
        <span>Disclaimer: Bottles may be different from the images on the site</span>
      </div>
    </div>
  );
};

export default Wanted;