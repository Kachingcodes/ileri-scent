import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGift, FaStar } from "react-icons/fa";
import pack from "../../img/pack4.jpg"; 
import pack2 from "../../img/pack2.jpg"; 
import pack3 from "../../img/pack3.jpg"; 
import FragQuiz from "./FragQuiz";


const LuxuryExperience = () => {
  const [showQuiz, setShowQuiz] = useState(false);

  return (
    <section className="w-full bg-[#fdfdfc] dark:bg-[#0f0b0b] py-16 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left - Fragrance Quiz */}
        <motion.div 
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.0 }}
          className="bg-white shadow-lg rounded-2xl p-8 flex flex-col items-start">
          <h2 className="text-3xl font-serif text-gray-900 mb-4">
            Find Your Signature Scent
          </h2>
          <p className="text-gray-600 mb-6">
            Unsure which fragrance speaks to your soul? Take our personalized
            quiz and uncover the perfect scent that matches your style,
            personality, and mood.
          </p>
          <button 
            onClick={() => setShowQuiz(true)}
            className="bg-black dark:bg-[#d39c44] text-white dark:text-black px-6 py-3 rounded-full hover:bg-gray-800 hover:dark:bg-[#e8d6be] transition">
            Start the Quiz
          </button>
        </motion.div>

        {/* Quiz Modal */}
      <AnimatePresence>
        {showQuiz && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white dark:bg-[#1a1a1a] rounded-2xl shadow-lg max-w-2xl w-full p-8 relative"
            >

              {/* Quiz Content Placeholder */}
              <FragQuiz onClose={() => setShowQuiz(false)}/>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

        {/* Right - Gifting & Packaging */}
        <motion.div 
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.0 }}
          className="relative bg-gradient-to-r from-[#f8f6f2] to-[#f0edea] shadow-lg rounded-2xl p-8 flex flex-col items-center text-center">
          <FaGift className="w-10 h-10 text-gray-800 mb-4" />
          <h2 className="text-3xl font-serif text-gray-900 mb-4">
            Gifting & Packaging
          </h2>
          <p className="text-gray-600 mb-6">
            Transform every fragrance into a cherished keepsake with our luxurious custom bottles and packaging. A perfect choice for birthdays, weddings, anniversaries, or any special occasion.
            Personalize your perfume with bespoke packaging that reflects your unique style.
          </p>
          <div className="flex gap-4">
            <img
              src={pack}
              alt="Luxury Packaging"
              className="w-32 h-32 object-cover rounded-xl shadow shadow-[#0f0e0e]"
            />
            <img
              src={pack3}
              alt="Gift Box"
              className="w-32 h-32 object-cover rounded-xl shadow shadow-[#0f0e0e]"
            />
            <img
              src={pack2}
              alt="Gift Box"
              className="w-32 h-32 object-cover rounded-xl shadow shadow-[#0f0e0e]"
            />
          </div>
          <FaStar className="absolute top-6 right-6 text-yellow-500" />
        </motion.div>
      </div>
    </section>
  );
};

export default LuxuryExperience;
