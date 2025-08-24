import React, { useState } from "react";
import { motion } from "framer-motion";
import { IoArrowDownCircleOutline } from "react-icons/io5";
import men from "../img/bottles/men.png";
import women from "../img/bottles/women.png";
import unisex from "../img/bottles/unisex.png";
import diffuser from "../img/bottles/diffuser2.png";
import Store from "./Store"; // import your Store component

const Categories = () => {
  const [activeCategory, setActiveCategory] = useState(null);

  const card = {
    hiddenUp: { opacity: 0, y: 100 },
    hiddenDown: { opacity: 0, y: -100 },
    visible: { opacity: 1, y: 0 },
  };

//   const cardUp = {
//     hiddenUp: { opacity: 0, y: 100 },
//     visible: { opacity: 1, y: 0 },
//   };

  return (
    <div className="bg-white w-full flex flex-col items-center justify-start p-9 min-h-screen">
        <h1 className="text-center text-3xl sm:text-3xl md:text-5xl font-extrabold tracking-wider font-playfair text-black">CATEGORIES</h1>
    
    {/* CATEGORY CARDS */}
      <div className="flex flex-col md:flex-row items-center justify-evenly gap-12 mt-40">

        {/* MEN */}
        <motion.div
          className="w-60 h-60 relative flex flex-col items-center justify-end p-2 rounded-2xl shadow-md/60"
          variants={card}
          initial="hiddenUp"
          whileInView="visible"
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <img src={men} alt="Men Perfume" className="absolute -top-20 w-50 h-62" loading="lazy" />
          <div
            className="bg-gradient-to-br from-[#e2e8f0] via-[#cd9d18] to-[#c2b68f] 
              p-3 flex flex-row items-center justify-center gap-2 md:gap-5 rounded-xl w-full cursor-pointer"
            onClick={() => setActiveCategory("MEN")}
          >
            <span className="text-md md:text-2xl font-semibold">MEN</span>
            <IoArrowDownCircleOutline className="animate-bounce mt-1 text-2xl" />
          </div>
        </motion.div>

        {/* WOMEN */}
        <motion.div
          className="w-60 h-60 relative flex flex-col items-center justify-end p-2 rounded-2xl shadow-md/60"
          variants={card}
          initial="hiddenDown"
          whileInView="visible"
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <img src={women} alt="Women Perfume" className="absolute -top-22 w-35 h-68" loading="lazy" />
          <div
            className="bg-gradient-to-br from-[#e2e8f0] via-[#cd9d18] to-[#c2b68f] 
              p-3 flex flex-row items-center justify-center gap-2 md:gap-5 rounded-xl w-full cursor-pointer"
            onClick={() => setActiveCategory("WOMEN")}
          >
            <span className="text-md md:text-2xl font-semibold">WOMEN</span>
            <IoArrowDownCircleOutline className="animate-bounce mt-1 text-2xl" />
          </div>
        </motion.div>

        {/* UNISEX */}
        <motion.div
          className="w-60 h-60 relative flex flex-col items-center justify-end p-2 rounded-2xl shadow-md/60"
          variants={card}
          initial="hiddenUp"
          whileInView="visible"
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <img src={unisex} alt="Unisex Perfume" className="absolute -top-20 w-46" loading="lazy" />
          <div
            className="bg-gradient-to-br from-[#e2e8f0] via-[#cd9d18] to-[#c2b68f] 
              p-3 flex flex-row items-center justify-center gap-2 md:gap-5 rounded-xl w-full cursor-pointer"
            onClick={() => setActiveCategory("UNISEX")}
          >
            <span className="text-md md:text-2xl font-semibold">UNISEX</span>
            <IoArrowDownCircleOutline className="animate-bounce mt-1 text-2xl" />
          </div>
        </motion.div>

        {/* DIFFUSERS */}
        <motion.div
          className="w-60 h-60 relative flex flex-col items-center justify-end p-2 rounded-2xl shadow-md/60"
          variants={card}
          initial="hiddenDown"
          whileInView="visible"
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <img src={diffuser} alt="Unisex Perfume" className="absolute -top-44 w-66" loading="lazy" />
          <div
            className="bg-gradient-to-br from-[#e2e8f0] via-[#cd9d18] to-[#c2b68f] 
              p-3 flex flex-row items-center justify-center gap-2 md:gap-5 rounded-xl w-full cursor-pointer"
            onClick={() => setActiveCategory("DIFFUSER")}
          >
            <span className="text-md md:text-2xl font-semibold">DIFFUSERS</span>
            <IoArrowDownCircleOutline className="animate-bounce mt-1 text-2xl" />
          </div>
        </motion.div>

      </div>

            {/* STORE SECTION */}
      {activeCategory && (
        <div className="w-full mt-12">
          <Store category={activeCategory} />
        </div>
      )}

    </div>
  );
};

export default Categories;
