import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import oud_wood2 from "../../img/bottles/oud_wood2.png";
import sensual_sweetness2 from "../../img/bottles/sensual_sweetness2.png";

const Popular = () => {

  const [selectedGender, setSelectedGender] = useState("MALE");

  const genderImages = {
    MALE: oud_wood2,
    FEMALE: sensual_sweetness2,
  };

  return (

    <div className="w-full bg-[#e6e1de] dark:bg-[#151515] flex flex-col items-center justify-evenly p-8 gap-4 md:gap-10 text-black dark:text-white">
      
      <div>
        <h1 className="text-2xl sm:text-2xl md:text-4xl tracking-wider text-center font-bold font-playfair mt-2">
          MOST POPULAR SCENTS
        </h1>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-evenly p-4 gap-4 md:gap-8 rounded-xl shadow-md/90">
      {/* Gender Toggle */}
        <div className="flex flex-col items-center text-lg md:text-xl gap-5 p-3 font-kanit tracking-wide">

          {["MALE", "FEMALE"].map((gender) => {
            const isActive = selectedGender === gender;
            const activeColor = gender === "MALE" ? "text-amber-600" : "";
            const hoverColor = gender === "MALE" ? "hover:text-amber-600" : "hover:text-[#e4c14a]";
            
            return (
              <h2
                key={gender}
                onClick={() => setSelectedGender(gender)}
                className={`cursor-pointer relative transition duration-500 ease-in-out 
                  ${isActive ? activeColor + " scale-105" : " " + hoverColor}`}
              >
                {gender} SCENT
                {isActive && (
                  <motion.div
                    layoutId="underline"
                    className={`absolute -bottom-1 left-0 right-0 h-1 rounded-full 
                      ${gender === "MALE" ? "bg-amber-600" : "bg-[#d4af37]"}`}
                  />
                )}
              </h2>
            );
          })}
        </div>

        {/* Bottle Image */}
        <div className="relative w-60 h-60 rounded-3xl shadow-lg transition duration-500 hover:shadow-[#2c2a24] dark:shadow-[#a48426]">
          <AnimatePresence mode="wait">
            <motion.img
              key={selectedGender}
              src={genderImages[selectedGender]}
              alt={`${selectedGender} scent`}
              className="absolute w-full h-full object-contain p-5"
              initial={{ opacity: 0, scale: 0.9, x: selectedGender === "MALE" ? -300 : 300 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.95, x: selectedGender === "MALE" ? 300 : -300 }}
              transition={{ duration: 1 }}
              loading="lazy"
            />
          </AnimatePresence>
        </div>

        </div>
    </div>

);
};

export default Popular;