import React from "react";
import { FaLeaf, FaAppleAlt } from "react-icons/fa";
import { GiRose } from "react-icons/gi";
import { motion } from "framer-motion";

const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const About = () => {
  return (
    <section className="bg-white dark:bg-[#1b1818] dark:text-white text-gray-800 py-8 md:py-20 px-4 md:px-6" id="about">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* About Section */}
        <div>
          <motion.h2
            className="text-3xl font-semibold mb-4 font-playfair tracking-wide dark:text-[#e8d6be]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            variants={textVariants}
          >
            About Us
          </motion.h2>

          <motion.p
            className="mb-4 text-md md:text-lg leading-relaxed dark:text-gray-200"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            variants={textVariants}
          >
            At <span className="font-semibold">Ileri Scent</span>,  we believe that 
            every fragrance tells a story. Our perfumes are crafted from the world’s 
            finest ingredients, blended with artistry and passion to create timeless scents.
          </motion.p>

          <motion.p
            className="mb-4 text-md md:text-lg leading-relaxed dark:text-gray-200"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            custom={2}
            variants={textVariants}
          >
            Featuring ingredients like sandalwood, vanilla, jasmine, and citrus, our perfumes 
            evoke romantic allure and timeless sophistication. From delicate florals to bold spices, 
            each bottle is an expression of luxury, elegance, and individuality. 
            Our mission is to help you discover a fragrance that resonates with your spirit and 
            leaves a lasting impression.
          </motion.p>

          <motion.p
            className="text-md md:text-lg leading-relaxed dark:text-gray-200"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            custom={3}
            variants={textVariants}
          >
            We bring you indulgence and elegance—at a more accessible price. More than a scent—it’s an experience. Welcome to the art of true perfumery.
          </motion.p>
        </div>

        {/* Fragrance Notes Explorer */}
        <motion.div 
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0 }}
          className="bg-[#f9f9f9] dark:bg-[#ffffff]/4 rounded-2xl shadow-lg p-5 md:p-6">
          <h3 className="text-2xl font-semibold mb-6 text-center font-playfair tracking-wide">
            Fragrance Notes Explorer
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-6 text-center">
            
            <div className="flex flex-col items-center">
              <FaAppleAlt className="text-4xl text-[#1C4672] mb-3" />
              <h4 className="font-semibold font-news text-lg">Top Notes</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Citrus, Bergamot, Green Apple
              </p>
            </div>
            
            <div className="flex flex-col items-center">
              <GiRose className="text-4xl text-pink-600 mb-3" />
              <h4 className="font-semibold font-news text-lg">Heart Notes</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Rose, Jasmine, Lavender
              </p>
            </div>
            
            <div className="flex flex-col items-center">
              <FaLeaf className="text-4xl text-green-600 mb-3" />
              <h4 className="font-semibold font-news text-lg">Base Notes</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Amber, Vanilla, Sandalwood
              </p>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
