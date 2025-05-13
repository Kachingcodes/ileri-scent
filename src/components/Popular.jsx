import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import oud_wood2 from "../img/bottles/oud_wood2.png";
import sensual_sweetness2 from "../img/bottles/sensual_sweetness2.png";

const Popular = () => {

  const [selectedGender, setSelectedGender] = useState("MALE");

  const genderImages = {
    MALE: oud_wood2,
    FEMALE: sensual_sweetness2,
  };

  return (

    <div className="w-full flex flex-col md:flex-row items-center justify-evenly p-10 gap-18 md:gap-40 rounded-xl shadow-md/90">
            
      {/* Gender Toggle */}
      <div className="flex flex-col items-center text-2xl md:text-3xl gap-5 p-3 font-kanit tracking-wide">

        {["MALE", "FEMALE"].map((gender) => {
          const isActive = selectedGender === gender;
          const activeColor = gender === "MALE" ? "text-amber-600" : "text-[#d4af37]";
          const hoverColor = gender === "MALE" ? "hover:text-amber-600" : "hover:text-[#e4c14a]";
          
          return (
            <h2
              key={gender}
              onClick={() => setSelectedGender(gender)}
              className={`cursor-pointer relative transition duration-500 ease-in-out 
                ${isActive ? activeColor + " scale-105" : "text-white/50 " + hoverColor}`}
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
      <div className="relative w-60 h-60 border-2 border-[#d4af37]/20 rounded-3xl shadow-lg transition duration-500 hover:shadow-[0_0_20px_#d4af37]/30">
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

);
};

export default Popular;