import React from 'react';
import { motion } from 'framer-motion';
import Counter from "../HomeSection/Counter";
import bg1 from '../../img/background1.png';
import bottle1 from '../../img/bottle_body.png';
import flowers1 from '../../img/blue_flowers1.png';
import flowers2 from '../../img/blue_flowers3.png';
import blue_roses2 from '../../img/blue_roses2.png';


const Slider1 = () => {
  return (
    <div
  className="relative w-full min-h-screen bg-cover bg-center bg-no-repeat"
  loading="lazy"
  style={{ backgroundImage: `url(${bg1})` }}
>

  {/* Text section */}
  <div className="absolute top-1/4 left-5 md:left-10 p-2 md:p-10 space-y-3 md:space-y-5">
    <motion.h1
      className="text-3xl sm:text-3xl md:text-5xl text-blue-300 tracking-wider font-playfair"
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
    >
      LUXURY IN EVERY DROP
    </motion.h1>

    <div className="text-xs sm:text-sm md:text-lg leading-5 md:leading-6 space-y-2 md:space-y-2 max-w-[94vw]">
      <p>
        Handcrafted with love, our perfumes blend the finest ingredients into
        unique, distinctive scents.
      </p>
      <p>Experience luxury that's timeless, and made just for you.</p>
    </div>
  </div>

  {/* Bottle and flowers */}
  <motion.img
    src={bottle1}
    className="absolute top-[54%] right-[20%]
    md:top-[50%] 
    w-[130px] md:w-[200px]"
    loading="lazy"
    initial={{ opacity: 0, y: 100 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1.8 }}
  />

  {/* DARK BLUE ROSES */}
  <motion.img
    src={flowers1}
    className="absolute top-[72%] left-[20%] 
    md:top-[74%] md:left-[58%] 
    opacity-90 drop-shadow-[0_4px_6px_rgba(0,0,0,0.99)] 
    w-[80px] md:w-[140px]"
    alt="Decorative Flowers"
    loading="lazy"
    animate={{ y: [0, -20, 0] }}
    transition={{
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />

  {/* LIGHT BLUE ROSE */}
  <motion.img
    src={blue_roses2}
    className="absolute top-[49%] left-[75%] 
    md:top-[38%] md:left-[78%] 
    opacity-90 drop-shadow-[0_4px_6px_rgba(0,0,0,0.99)] 
    w-[60px] md:w-[120px]"
    alt="Decorative Flowers"
    loading="lazy"
    animate={{ y: [0, -20, 0] }}
    transition={{
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />

  <img
    src={flowers2}
    className="absolute 
    top-[68%] left-[44%] 
    md:top-[72%] md:left-[68%] 
    opacity-90 drop-shadow-[0_4px_6px_rgba(0,0,0,0.99)] 
    w-[220px] md:w-[380px]"
    alt="Decorative Flowers"
    loading="lazy"
  />

    <div className="absolute 
      bottom-4 left-1/2 transform -translate-x-1/2
      sm:bottom-6
      md:bottom-8 
      lg:top-[70%] lg:left-[26%] lg:bottom-auto 
      w-full z-10 flex justify-center cursor-pointer">
      <Counter />
    </div>
</div>
  );
};

export default Slider1;
