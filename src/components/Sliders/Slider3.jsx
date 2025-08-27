import React from 'react';
import { motion } from 'framer-motion';
import Counter from "../HomeSection/Counter";
import bg3 from '../../img/background3.png';
import bottle2 from '../../img/bottles/liquid_desire.png';
import flowers1 from '../../img/gold_flowers.png';
import flowers2 from '../../img/gold_rose3.png';
import flowers3 from '../../img/gold_rose1.png';



const Slider3 = () => {
  return (
    <div
      className="relative w-full min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bg3})` }}
    >

      {/* Bottle and flowers */}
      <img
        src={bottle2}
        className="absolute top-[55%] left-[20%]
        md:top-[40%] md:left-[16%] 
        w-[128px] sm:w-[160px] md:w-[250px]"
        loading="lazy"
      />
      
      {/* THREE GOLD ROSES */}
      <img
        src={flowers1}
        className="absolute top-[72%] left-[8%] 
        md:top-[68%] md:left-[10%]
        opacity-80 rotate-340 drop-shadow-[0_4px_6px_rgba(0,0,0,0.99)]
        w-[80px] sm:w-[100px] md:w-[200px]"
        alt="Decorative Flowers"
        loading="lazy"
        animate={{ y: [0, -20, 0] }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

        {/* FIRST GOLD ROSE */}
      <motion.img
        src={flowers2}
        className="absolute top-[53%] left-[8%]
        md:top-[32%] md:left-[8%] 
        opacity-90 drop-shadow-[0_4px_6px_rgba(0,0,0,0.99)]
        w-[66px] sm:w-[100px] md:w-[150px]"
        alt="Decorative Flowers"
        loading="lazy"
        animate={{ y: [0, -20, 0] }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

        {/* SECOND GOLD ROSE */}
        <motion.img
        src={flowers3}
        className="absolute top-[78%] left-[56%] 
        md:top-[78%] md:left-[32%]
        opacity-80 drop-shadow-[0_4px_6px_rgba(0,0,0,0.99)]
        w-[76px] sm:w-[100px] md:w-[160px]"
        alt="Decorative Flowers"
        loading="lazy"
        animate={{ y: [0, -20, 0] }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

            {/* Text section */}
            <div className="absolute top-1/4 right-5 md:right-10 p-5 md:p-10 mt-2 space-y-3 md:space-y-5">
            <motion.h1
            className="text-3xl sm:text-3xl md:text-5xl text-orange-400 tracking-wider font-playfair"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2 }}
            >
            A MEMORY THAT LASTS
            </motion.h1>

            <div className="text-xs sm:text-sm md:text-lg leading-5 md:leading-6 space-y-2 md:space-y-2 max-w-[94vw]">
                <p>Handcrafted with love, our perfumes blend the finest ingredients into unique, distinctive scents.</p>
                <p>Experience luxury that's timeless, and made just for you.</p>
            </div>
        </div>

        <div className="absolute 
          bottom-4 left-1/2 transform -translate-x-1/2
          sm:bottom-6
          md:bottom-8 
          lg:top-[70%] lg:left-[71%] lg:bottom-auto 
          w-full z-10 flex justify-center cursor-pointer">
            <Counter/>
        </div>

    </div>
  );
};

export default Slider3;
