import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { IoArrowDownCircleOutline } from "react-icons/io5";
import men from "../../img/bottles/men.png";
import women from "../../img/bottles/women.png";
import diffuser from "../../img/bottles/diffuser2.png";
import Store from "./Store"; 

const Categories = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  const [searchItem, setSearchItem] = useState("");
  const [hasScrolled, setHasScrolled] = useState(false);


  const baseStyle =
    "p-1.5 md:p-3 flex flex-row items-center justify-center gap-2 md:gap-5 rounded-xl w-full cursor-pointer transition";

  const getCategoryStyle = (category) => {
    return activeCategory === category
      ? "text-white dark:text-black shadow-md scale-105"
      : "bg-gradient-to-br from-[#e2e8f0] via-[#cd9d18] to-[#c2b68f] hover:scale-105";
  };

  const scrollToStore = (hasScrolled, setHasScrolled) => {
  if (!hasScrolled) {
    const isMobile = window.innerWidth < 768;
    const scrollValue = isMobile ? 300 : 250;

    window.scrollBy({ top: scrollValue, behavior: "smooth" });
    setHasScrolled(true);
  }
};

useEffect(() => {
  setHasScrolled(false);    // when category changes, allow scroll again
}, [activeCategory]);

  
  const card = {
    hiddenUp: { opacity: 0, y: 100 },
    hiddenDown: { opacity: 0, y: -100 },
    visible: { opacity: 1, y: 0 },
  };


  return (
    <div className="bg-white dark:bg-black dark:text-white text-black w-full flex flex-col items-center justify-start p-0 md:p-10 min-h-screen">
      <h1 className="text-center text-3xl sm:text-3xl md:text-4xl mt-8 md:mt-0 font-semibold tracking-wide font-playfair">CATEGORIES</h1>
    
      {/* CATEGORY CARDS */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-12 mt-20 md:mt-38 place-items-center">

        {/* MEN */}
        <motion.div
          className="w-36 md:w-60 h-40 md:h-60 relative flex flex-col items-center justify-end p-2 rounded-2xl shadow-md/60 dark:shadow-md shadow-gray-300"
          initial="hiddenUp"
          whileInView="visible"
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <img src={men} alt="Men Perfume" className="absolute -top-13 md:-top-20 w-30 md:w-50 h-40 md:h-62" loading="lazy" />
        <div
          className={`bg-gradient-to-br from-[#e2e8f0] via-[#cd9d18] to-[#c2b68f] 
          p-1.5 md:p-3 flex flex-row items-center justify-center gap-2 md:gap-5 rounded-xl w-full cursor-pointer ${baseStyle} ${getCategoryStyle("MEN")}`}
          onClick={() => { setActiveCategory("MEN");  
            scrollToStore(hasScrolled, setHasScrolled);
          }}
        >
          <span className="text-lg md:text-2xl font-semibold">MEN</span>
          <IoArrowDownCircleOutline className="animate-bounce mt-1 text-xl md:text-2xl" />
        </div>
      </motion.div>

      {/* WOMEN */}
      <motion.div
        className="w-36 md:w-60 h-40 md:h-60 relative flex flex-col items-center justify-end p-2 rounded-2xl shadow-md/60 dark:shadow-md shadow-gray-300"
        variants={card}
        initial="hiddenDown"
        whileInView="visible"
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <img src={women} alt="Women Perfume" className="absolute -top-16 md:-top-22 w-22 md:w-35 h-44 md:h-62" loading="lazy" />
        <div
          className={`bg-gradient-to-br from-[#e2e8f0] via-[#cd9d18] to-[#c2b68f] 
            p-1.5 md:p-3 flex flex-row items-center justify-center gap-2 md:gap-5 rounded-xl w-full cursor-pointer${baseStyle} ${getCategoryStyle("WOMEN")}`}
          onClick={() => { setActiveCategory("WOMEN");
             scrollToStore(hasScrolled, setHasScrolled);
          }}
        >
          <span className="text-lg md:text-2xl font-semibold">WOMEN</span>
          <IoArrowDownCircleOutline className="animate-bounce mt-1 text-xl md:text-2xl" />
        </div>
      </motion.div>

      {/* DIFFUSERS */}
      <motion.div
        className="w-36 md:w-60 h-40 md:h-60 relative flex flex-col items-center justify-end p-2 rounded-2xl mt-22 md:mt-0 shadow-md/60 dark:shadow-md shadow-gray-300"
        variants={card}
        initial="hiddenUp"
        whileInView="visible"
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <img src={diffuser} alt="Unisex Perfume" className="absolute -top-25 md:-top-44 w-40 md:w-66" loading="lazy" />
        <div
          className={`bg-gradient-to-br from-[#e2e8f0] via-[#cd9d18] to-[#c2b68f] 
            p-1.5 md:p-3 flex flex-row items-center justify-center gap-2 md:gap-5 rounded-xl w-full cursor-pointer${baseStyle} ${getCategoryStyle("DIFFUSER")}`}
          onClick={() => { setActiveCategory("DIFFUSER")
             scrollToStore(hasScrolled, setHasScrolled);
          }}
        >
          <span className="text-md md:text-2xl font-semibold">DIFFUSERS</span>
          <IoArrowDownCircleOutline className="animate-bounce mt-1 text-xl md:text-2xl" />
        </div>
      </motion.div>

      </div>

        {/* STORE SECTION */}
      {activeCategory && (
        <div className="w-full mt-18">
          <h2 className="hidden md:flex text-2xl md:text-3xl font-bold mb-4 text-center tracking-wide font-playfair text-black dark:text-white">
            Now Viewing: {activeCategory}
          </h2>
          <Store category={activeCategory} searchItem={searchItem}/>
        </div>
      )}

    </div>
  );
};

export default Categories;
