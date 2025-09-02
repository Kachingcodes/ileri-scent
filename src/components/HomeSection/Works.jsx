import React from "react";
import { motion } from "framer-motion";
import enchanting from "../../img/bottles/enchanting.png"; 


const Works = () => {

  const stepVariants = {
    hiddenLeft: { opacity: 0, x: -100 },
    hiddenRight: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
  };

  const botVariants = {
    hiddenRight: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="works">
      <div className="bg-white dark:bg-[#1b1818] w-full text-[#2E2E2E] dark:text-white py-8 md:py-16 px-8 relative overflow-hidden">

        <motion.img 
          className="hidden md:block md:absolute w-70 top-[40%] left-[10%]
                    md:top-[38%] md:left-[42%] md:opacity-100"
          loading="lazy"
          src={enchanting} 
          variants={botVariants}
          initial={{ opacity: 0, y: 100 }}
          whileInView="visible"
          transition={{ delay: 0.5, duration: 0.9 }}
        />
      
        <div className="text-center mb-10 md:mb-20 z-10 relative px-4">
          <h1 className="text-3xl sm:text-3xl md:text-4xl tracking-wide mb-2 font-playfair font-semibold">
            TO GET A BOTTLE
          </h1>
          <p className="text-gray-800 dark:text-gray-300 mt-4 text-sm md:text-md max-w-xl mx-auto">
            Just four quick steps to receive your custom perfume.
          </p>
        </div>

        {/* Steps */}
        <div className="flex flex-col md:flex-row justify-between w-full px-0 md:px-12 lg:px-20 z-10 relative gap-8 md:gap-12">

          {/* Left Steps (1 & 2)  */}
          <div className="flex flex-col gap-8 md:gap-12 w-full md:w-1/2 items-start">
            <motion.div
              className="bg-[rgba(167, 15, 15, 0.9)] dark:bg-black/40 backdrop-blur-md p-4 md:p-6 rounded-2xl shadow-lg max-w-sm w-full hover:shadow-[0_0_20px_#d4af37]/80"
              variants={stepVariants}
              initial="hiddenLeft"
              whileInView="visible"
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <h1 className="text-lg md:text-2xl font-playfair font-semibold p-2 md:p-3">1. SCENT</h1>
              <p className="text-sm sm:text-base font-news bg-[#e8d6be] dark:bg-[#d39c44] p-3 rounded-xl">Pick your favorite scent from our luxurious selection.</p>
            </motion.div>

            <motion.div
              className="bg-opacity-90 mt-0 md:mt-5 bg-[rgba(167, 15, 15, 0.9)] dark:bg-black/40 backdrop-blur-md p-4 md:p-6 rounded-2xl shadow-lg max-w-sm w-full hover:shadow-[0_0_20px_#d4af37]/80"
              variants={stepVariants}
              initial="hiddenLeft"
              whileInView="visible"
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              <h1 className="text-xl sm:text-2xl font-playfair font-semibold p-2 md:p-3">2. VOLUME</h1>
              <p className="text-sm sm:text-base font-news bg-[#e8d6be] dark:bg-[#d39c44] p-3 rounded-xl">Select your preferred volume.</p>
            </motion.div>
          </div>

          {/* Right Steps (3 & 4) */}
          <div className="flex flex-col gap-8 md:gap-12 w-full md:w-1/2 items-end text-right">
            <motion.div
              className="bg-[rgba(167, 15, 15, 0.2)] dark:bg-black/40 backdrop-blur-md p-4 md:p-6 rounded-2xl shadow-lg max-w-sm w-full hover:shadow-[0_0_20px_#d4af37]/80"
              variants={stepVariants}
              initial="hiddenRight"
              whileInView="visible"
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <h1 className="text-xl sm:text-2xl font-playfair font-semibold p-2 md:p-3">3. PAYMENT</h1>
              <p className="text-sm sm:text-base font-news bg-[#e8d6be] dark:bg-[#d39c44] p-3 rounded-xl">You’ll be redirected to our WhatsApp shop to make payment.</p>
            </motion.div>

            <motion.div
              className="bg-[rgba(167, 15, 15, 0.2)] dark:bg-black/40 backdrop-blur-md p-4 md:p-6 rounded-2xl shadow-lg max-w-sm w-full hover:shadow-[0_0_20px_#d4af37]/80"
              variants={stepVariants}
              initial="hiddenRight"
              whileInView="visible"
              transition={{ delay: 1.5, duration: 0.8 }}
            >
              <h1 className="text-xl sm:text-2xl font-playfair font-semibold p-2 md:p-3">4. DELIVERY</h1>
              <p className="text-sm sm:text-base font-news bg-[#e8d6be] dark:bg-[#d39c44] p-3 rounded-xl">Your perfume will arrive within 5 business days.</p>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Works;