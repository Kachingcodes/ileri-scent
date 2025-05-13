import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import Header from "./Header";
import Footer from './Footer';
import reviewData from '../data/reviewData';
import review_bg2 from '../img/review_bg2.png';
import { FiSun, FiMoon } from "react-icons/fi";

const Reviews = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Toggle dark class on body
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  return (
    <div
      className="relative w-full min-h-screen bg-contain bg-center bg-repeat transition-colors duration-500 bg-[#babbd6] dark:bg-[#05060b]"
      style={{ backgroundImage: `url(${review_bg2})` }}
    >
      
      <div className="absolute top-0 w-full z-50 bg-[#9395a9eb] dark:bg-[#8d8fa1eb] h-[80px] md:h-[120px]">
        <Header />
      </div>

      {/* Theme Toggle Button */}
      <div className="absolute z-50 b-2 top-6 right-14
        md:top-13 md:right-38 ">
        <button
          onClick={toggleDarkMode}
          className="bg-amber-500 dark:bg-blue-300 text-black dark:text-white p-2 rounded-full shadow-md transition duration-300 hover:scale-110"
          aria-label="Toggle Theme"
        >
          {darkMode ?  <FiMoon size={22} /> : <FiSun size={22} /> }
        </button>
      </div>

        <div className="pt-40 px-6">
            <div className="gap-3 md:gap-6 p-1 md:p-4 grid grid-cols-2 
                            sm:grid-cols-2 
                            md:grid-cols-3 
                            lg:grid-cols-4">
                {reviewData.map((review, index) => (
                    <div
                        key={index}
                        className="bg-[#f1f2fd] dark:bg-[#393a43] text-black dark:text-white p-3 md:p-4 rounded-lg shadow-md shadow-black 
                                    h-full w-full flex flex-col justify-between overflow-hidden"
                        >
                        <div className="flex flex-col justify-between p-1 gap-3">
                            <h3 className="font-semibold text-sm md:text-md truncate">{review.name}</h3>
                            <p className="text-sm overflow-hidden text-ellipsis">
                                {review.review}
                            </p>                           
                            <div className="text-yellow-500 dark:text-yellow-300 text-2xl md:text-4xl flex justify-end">
                            {"★".repeat(review.stars)}
                            {"☆".repeat(5 - review.stars)}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </div>


    </div>
  );
};

export default Reviews;