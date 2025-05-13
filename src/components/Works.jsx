import React from "react";
import { motion } from "framer-motion";
import enchanting from "../img/bottles/enchanting.png"; 



const Works = () => {

  const stepVariants = {
    hiddenLeft: { opacity: 0, x: -100 },
    hiddenRight: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
  };

  const botVariants = {
    hiddenLeft: { opacity: 0, y: -100 },
    hiddenRight: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="w-full text-white py-20 relative overflow-hidden">

      <motion.img className="absolute w-70 top-[40%] left-[10%]
      md:top-[44%] md:left-[42%] opacity-10 md:opacity-80" 
        loading="lazy"
        src={enchanting} 
        variants={botVariants}
        initial={{ opacity: 0, y: 100 }}
        whileInView="visible"
        transition={{ delay: 0.5, duration: 0.9 }}
        />         

      <div className="text-center mb-20 z-10 relative px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 font-playfair">
          TO GET A BOTTLE
        </h1>
        <p className="text-base sm:text-lg md:text-xl  text-[#d4af37] max-w-xl mx-auto font-suras">
          Just four quick steps to receive your custom perfume.
        </p>
      </div>

      {/* Steps */}
      <div className="flex flex-col md:flex-row justify-between w-full px-4 md:px-12 lg:px-20 z-10 relative gap-12">

        {/* Left Steps (1 & 2) */}
        <div className="flex flex-col gap-12 w-full md:w-1/2 items-start">
          <motion.div
            className="bg-[rgba(167, 15, 15, 0.9)] backdrop-blur-md p-6 rounded-2xl shadow-lg max-w-sm w-full hover:shadow-[0_0_20px_#d4af37]/80"
            variants={stepVariants}
            initial="hiddenLeft"
            whileInView="visible"
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <h1 className="text-2xl sm:text-3xl text-white font-suras">1</h1>
            <h3 className="text-lg sm:text-xl font-semibold mt-2 mb-1 font-sura text-[#d4af37]">SCENT</h3>
            <p className="text-sm sm:text-base font-suras bg-[#438199] p-3 rounded-xl">Pick your favorite scent from our luxurious selection.</p>
          </motion.div>

          <motion.div
            className="bg-opacity-80 bg-[rgba(167, 15, 15, 0.9)] backdrop-blur-md p-6 rounded-2xl shadow-lg max-w-sm w-full hover:shadow-[0_0_20px_#d4af37]/80"
            variants={stepVariants}
            initial="hiddenLeft"
            whileInView="visible"
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <h1 className="text-2xl sm:text-3xl text-white font-suras">2</h1>
            <h3 className="text-lg sm:text-xl font-semibold mt-2 mb-1 font-sura text-[#d4af37]">VOLUME</h3>
            <p className="text-sm sm:text-base font-suras bg-[#438199] p-3 rounded-xl">Select your preferred volume and bottle style.</p>
          </motion.div>
        </div>

        {/* Right Steps (3 & 4) */}
        <div className="flex flex-col gap-12 w-full md:w-1/2 items-end text-right">
          <motion.div
            className="bg-[rgba(167, 15, 15, 0.2)] backdrop-blur-md p-6 rounded-2xl shadow-lg max-w-sm w-full hover:shadow-[0_0_20px_#d4af37]/80"
            variants={stepVariants}
            initial="hiddenRight"
            whileInView="visible"
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <h1 className="text-2xl sm:text-3xl text-white font-suras">3</h1>
            <h3 className="text-lg sm:text-xl font-semibold mt-2 mb-1 font-sura text-[#d4af37]">PAYMENT</h3>
            <p className="text-sm sm:text-base font-suras bg-[#438199] p-3 rounded-xl">You’ll be redirected to our WhatsApp shop to make payment.</p>
          </motion.div>

          <motion.div
            className="bg-[rgba(167, 15, 15, 0.2)] backdrop-blur-md p-6 rounded-2xl shadow-lg max-w-sm w-full hover:shadow-[0_0_20px_#d4af37]/80"
            variants={stepVariants}
            initial="hiddenRight"
            whileInView="visible"
            transition={{ delay: 1.5, duration: 0.8 }}
          >
            <h1 className="text-2xl sm:text-3xl text-white font-suras">4</h1>
            <h3 className="text-lg sm:text-xl font-semibold mt-2 mb-1 font-sura text-[#d4af37]">DELIVERY</h3>
            <p className="text-sm sm:text-base font-suras bg-[#438199] p-3 rounded-xl">Your perfume will arrive within 5 business days.</p>
          </motion.div>
        </div>

      </div>
    </div>
  );
};

export default Works;