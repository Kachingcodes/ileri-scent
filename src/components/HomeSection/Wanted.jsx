import React, { useState } from "react";
import PerfumeCarousel from './PerfumeCarousel'

const Wanted = () => {

  return (
    <section id="popular">
      <div className="bg-[#e8d6be] dark:bg-[#0f0b0b] w-full min-h-screen flex flex-col p-8 gap-8 text-[#2E2E2E] dark:text-white items-center overflow-hidden relative">

        <h1 className="mt-10 text-center text-2xl sm:text-2xl md:text-4xl font-extrabold tracking-wider font-playfair">
          MOST WANTED SCENTS
        </h1>

        <div>
          <PerfumeCarousel/>
        </div>

        <div className="text-center text-xs md:text-sm mb-8">
          <span>Disclaimer: Bottles may be different from the images on the site</span>
        </div>
      </div>
    </section>
  );
};

export default Wanted;