import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import ReviewHeader from "./ReviewHeader";
import Footer from './Footer';
import reviewData from '../data/reviewData';
import review_bg2 from '../img/review_bg2.png';
import { FiSun, FiMoon } from "react-icons/fi";

const Reviews = () => {

  return (
    <div
      className="relative w-full min-h-screen bg-contain bg-center bg-repeat transition-colors duration-500 bg-[#babbd6] dark:bg-[#05060b]"
      style={{ backgroundImage: `url(${review_bg2})` }}
    >
      
      <div className="">
        <ReviewHeader />
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