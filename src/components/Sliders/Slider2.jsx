import React from 'react';
import { motion } from 'framer-motion';
import Counter from "../HomeSection/Counter";
import bg2 from '../../img/background2.png';
import bottle2 from '../../img/bottles/oud_wood2.png';
import flowers1 from '../../img/white1.png';
import flowers2 from '../../img/white2.png';
import flowers3 from '../../img/pink_roses2.png';
import flowers4 from '../../img/pink_roses3.png';


const Slider2 = () => {
  return (
    <div
      className="relative w-full min-h-screen bg-cover bg-center bg-no-repeat"
      loading="lazy"
      style={{ backgroundImage: `url(${bg2})` }}
    >

      {/* Bottle and flowers */}
      <img
        src={bottle2}
        className="absolute top-[55%] left-[26%]
        md:top-[38%] md:left-[18%]
        w-[130px] md:w-[230px]"
        loading="lazy"
      />

      {/* SINGLE WHITE FLOWER */}
      <motion.img
        src={flowers1}
        className="absolute top-[53%] left-[6%] 
        md:top-[34%] md:left-[10%]
        w-[90px] md:w-[180px]
        opacity-70 drop-shadow-[0_4px_6px_rgba(0,0,0,0.99)]"
        alt="Decorative Flowers"
        loading="lazy"
        animate={{ y: [0, -20, 0] }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

        {/* TWO WHITE FLOWERS */}
        <motion.img
        src={flowers2}
        className="absolute top-[78%] left-[54%] 
        md:top-[80%] md:left-[28%]
        opacity-70 rotate-336 drop-shadow-[0_4px_6px_rgba(0,0,0,0.99)]
        w-[100px] md:w-[210px]"
        alt="Decorative Flowers"
        loading="lazy"
        animate={{ y: [0, -20, 0] }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        />

        {/* FIRST PINK ROSE */}
        <img
        src={flowers3}
        className="absolute top-[70%] left-[10%] 
        md:top-[64%] md:left-[8%]
        opacity-85 drop-shadow-[0_4px_6px_rgba(0,0,0,0.99)]
        w-[80px] md:w-[180px]"
        alt="Decorative Flowers"
        loading="lazy"
        />

        {/* SECOND PINK ROSE */}
        <img
        src={flowers4}
        className="absolute top-[74%] left-[18%] 
        md:top-[73%] md:left-[13%]
        opacity-85 drop-shadow-[0_4px_6px_rgba(0,0,0,0.99)]
         w-[80px] md:w-[180px]"
        alt="Decorative Flowers"
        loading="lazy"
        />


            {/* Text section */}
            <div className="absolute top-1/4 right-5 md:right-10 p-5 md:p-10 mt-2 space-y-3 md:space-y-5">
            <motion.h1
            className="text-3xl sm:text-3xl md:text-5xl text-[#e88dae] tracking-wider font-playfair"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2 }}
            >

            A SCENT THAT LINGERS
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

export default Slider2;
