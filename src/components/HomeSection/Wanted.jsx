import React, { useState } from "react";
import { motion } from "framer-motion";
import PerfumeCarousel from './PerfumeCarousel'

const Wanted = () => {

  return (
    <section id="popular">
      <div className="bg-[#e8d6be] dark:bg-[#060606] py-6 w-full flex flex-col text-[#2E2E2E] dark:text-white items-center overflow-hidden relative">

        <motion.h1
          className="mt-10 text-center text-2xl sm:text-2xl md:text-4xl font-bold tracking-wide font-playfair"
          initial={{ opacity: 0, y: -100 }}    
          whileInView={{ opacity: 1, y: 0 }}   
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}            
        >
          BEST SELLERS
        </motion.h1>

        <div>
          <PerfumeCarousel/>
        </div>

        <div className="text-center text-xs md:text-sm mb-8">
          <span>Disclaimer: Bottles may be different from the images on the site but the product remains the same</span>
        </div>
      </div>
    </section>
  );
};

export default Wanted;