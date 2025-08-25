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
  const [searchItem, setSearchItem] = useState("");

  const baseStyle =
    "p-1.5 md:p-3 flex flex-row items-center justify-center gap-2 md:gap-5 rounded-xl w-full cursor-pointer transition";

  const getCategoryStyle = (category) => {
    return activeCategory === category
      ? "bg-blue-700 text-white shadow-md scale-105"
      : "bg-gradient-to-br from-[#e2e8f0] via-[#cd9d18] to-[#c2b68f] hover:scale-105";
  };
  
  const card = {
    hiddenUp: { opacity: 0, y: 100 },
    hiddenDown: { opacity: 0, y: -100 },
    visible: { opacity: 1, y: 0 },
  };


  return (
    <div className="bg-white w-full flex flex-col items-center justify-start p-0 md:p-10 min-h-screen">
        <h1 className="text-center text-4xl sm:text-3xl md:text-5xl mt-8 md:mt-0 font-extrabold tracking-wider font-playfair text-black">CATEGORIES</h1>
    
    {/* CATEGORY CARDS */}
      <div className="grid grid-cols-2 md:grid-cols-4 items-center justify-evenly gap-6 md:gap-12 mt-20 md:mt-40">
  
  {/* MEN */}
  <motion.div
    className="w-36 md:w-60 h-40 md:h-60 relative flex flex-col items-center justify-end p-2 rounded-2xl shadow-md/60"
    initial="hiddenUp"
    whileInView="visible"
    transition={{ delay: 0.5, duration: 0.8 }}
  >
    <img src={men} alt="Men Perfume" className="absolute -top-13 md:-top-20 w-30 md:w-50 h-40 md:h-62" loading="lazy" />
    <div
      className={`bg-gradient-to-br from-[#e2e8f0] via-[#cd9d18] to-[#c2b68f] 
       p-1.5 md:p-3 flex flex-row items-center justify-center gap-2 md:gap-5 rounded-xl w-full cursor-pointer ${baseStyle} ${getCategoryStyle("MEN")}`}
      onClick={() => setActiveCategory("MEN")}
    >
      <span className="text-lg md:text-2xl font-semibold">MEN</span>
      <IoArrowDownCircleOutline className="animate-bounce mt-1 text-xl md:text-2xl" />
    </div>
  </motion.div>

  {/* WOMEN */}
  <motion.div
    className="w-36 md:w-60 h-40 md:h-60 relative flex flex-col items-center justify-end p-2 rounded-2xl shadow-md/60"
    variants={card}
    initial="hiddenDown"
    whileInView="visible"
    transition={{ delay: 0.5, duration: 0.8 }}
  >
    <img src={women} alt="Women Perfume" className="absolute -top-16 md:-top-22 w-22 md:w-35 h-44 md:h-62" loading="lazy" />
    <div
      className={`bg-gradient-to-br from-[#e2e8f0] via-[#cd9d18] to-[#c2b68f] 
        p-1.5 md:p-3 flex flex-row items-center justify-center gap-2 md:gap-5 rounded-xl w-full cursor-pointer${baseStyle} ${getCategoryStyle("WOMEN")}`}
      onClick={() => setActiveCategory("WOMEN")}
    >
      <span className="text-lg md:text-2xl font-semibold">WOMEN</span>
      <IoArrowDownCircleOutline className="animate-bounce mt-1 text-xl md:text-2xl" />
    </div>
  </motion.div>

  {/* UNISEX */}
  <motion.div
    className="w-36 md:w-60 h-40 md:h-60 relative flex flex-col items-center justify-end p-2 rounded-2xl mt-22 md:mt-0 shadow-md/60"
    variants={card}
    initial="hiddenUp"
    whileInView="visible"
    transition={{ delay: 0.5, duration: 0.8 }}
  >
    <img src={unisex} alt="Unisex Perfume" className="absolute -top-14 md:-top-20 w-32 md:w-46 h-40 md:h-62" loading="lazy" />
    <div
      className={`bg-gradient-to-br from-[#e2e8f0] via-[#cd9d18] to-[#c2b68f] 
        p-1.5 md:p-3 flex flex-row items-center justify-center gap-2 md:gap-5 rounded-xl w-full cursor-pointer${baseStyle} ${getCategoryStyle("UNISEX")}`}
      onClick={() => setActiveCategory("UNISEX")}
    >
      <span className="text-lg md:text-2xl font-semibold">UNISEX</span>
      <IoArrowDownCircleOutline className="animate-bounce mt-1 text-xl md:text-2xl" />
    </div>
  </motion.div>

  {/* DIFFUSERS */}
  <motion.div
    className="w-36 md:w-60 h-40 md:h-60 relative flex flex-col items-center justify-end p-2 rounded-2xl mt-22 md:mt-0 shadow-md/60"
    variants={card}
    initial="hiddenDown"
    whileInView="visible"
    transition={{ delay: 0.5, duration: 0.8 }}
  >
    <img src={diffuser} alt="Unisex Perfume" className="absolute -top-25 md:-top-44 w-40 md:w-66" loading="lazy" />
    <div
      className={`bg-gradient-to-br from-[#e2e8f0] via-[#cd9d18] to-[#c2b68f] 
        p-1.5 md:p-3 flex flex-row items-center justify-center gap-2 md:gap-5 rounded-xl w-full cursor-pointer${baseStyle} ${getCategoryStyle("DIFFUSER")}`}
      onClick={() => setActiveCategory("DIFFUSER")}
    >
      <span className="text-md md:text-2xl font-semibold">DIFFUSERS</span>
      <IoArrowDownCircleOutline className="animate-bounce mt-1 text-xl md:text-2xl" />
    </div>
  </motion.div>

</div>

    {/* STORE SECTION */}
{activeCategory && (
  <div className="w-full mt-18">
    <h2 className="hidden md:flex text-2xl md:text-3xl font-bold mb-4 text-center tracking-wider font-playfair text-black">
      Now Viewing: {activeCategory}
    </h2>
    <Store category={activeCategory} searchItem={searchItem}/>
  </div>
)}

    </div>
  );
};

export default Categories;
