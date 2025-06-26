import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { wantedData } from "../data/wantedData";
import left from "../img/icons/left2.png";
import right from "../img/icons/right2.png";
import { IoArrowBackCircleOutline } from "react-icons/io5";


const PerfumeCarousel = () => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState(1);

const handleLeftClick = () => {
  setSelected((prev) => (prev - 1 + wantedData.length) % wantedData.length);
};

const handleRightClick = () => {
  setSelected((prev) => (prev + 1) % wantedData.length);
};

const goToShop = () => {
  navigate("/shop");
};

return(

  <div className="flex flex-col w-full p-5 items-center justify-center gap-3">
        <div className="w-60 md:w-full overflow-x-auto">
          <div className="w-full flex items-center justify-between gap-2 md:gap-8 mt-10 md:mt-20 mb-8">
          
            {/* Previous Two Images */}
            <div className="relative opacity-40 bg-pink-100/6 border border-rose-300/30 
            h-56 w-60 md:w-48 rounded-xl pt-20 pb-6 px-4 flex flex-col items-center justify-center gap-2 transition duration-500 ease-in-out scale-90 shadow-md">
              <img   
                className="absolute -top-7 
                md:-top-7
                w-23
                drop-shadow-lg"
                src={wantedData[(selected - 2 + wantedData.length) % wantedData.length].image}
                alt="Perfume"
                loading="lazy"
              />
              <div className="text-center text-sm font-kanit mt-10">
                <span className="font-semibold text-white">
                  {wantedData[(selected - 2 + wantedData.length) % wantedData.length].name}
                </span>
                <p className="text-sm md:text-xs text-[#e0e0e0]">
                  {wantedData[(selected - 2 + wantedData.length) % wantedData.length].review}
                </p>
                <button 
                  onClick={() => navigate("/shop")}
                  className="mt-2 inline-flex gap-2 items-center bg-[#d4af37] text-[#0b0f1c] font-bold py-2 px-4 rounded-full hover:bg-[#a98dbb] hover:text-white transition">
                  ORDER <IoArrowBackCircleOutline className="animate-bounce mt-1" />
                </button>
              </div>
            </div>

            {/* Previous Image */}
            <div className="relative opacity-60 bg-pink-100/10 border border-rose-300/30 
            h-60 w-40
            md:h-62 md:w-48
            rounded-xl pt-20 pb-6 px-4 flex flex-col items-center justify-center gap-2 transition duration-500 ease-in-out scale-90 shadow-md">
              <img
                className="absolute -top-9 md:-top-8
                w-24 md:w-25 
                drop-shadow-lg"
                src={wantedData[(selected - 1 + wantedData.length) % wantedData.length].image}
                alt="Perfume"
                loading="lazy"
              />
              <div className="text-center text-sm font-kanit mt-10">
                <span className="font-semibold text-white">
                  {wantedData[(selected - 1 + wantedData.length) % wantedData.length].name}
                </span>
                <p className="text-sm md:text-xs text-[#e0e0e0]">
                  {wantedData[(selected - 1 + wantedData.length) % wantedData.length].review}
                </p>
                <button 
                  onClick={() => navigate("/shop")}
                  className="mt-2 inline-flex gap-2 items-center bg-[#d4af37] text-[#0b0f1c] font-bold py-2 px-4 rounded-full hover:bg-[#a98dbb] hover:text-white transition">
                  ORDER <IoArrowBackCircleOutline className="animate-bounce mt-1" />
                </button>
              </div>
            </div>

            {/* Current Image */}
            <div 
            className="bg-pink-100/10 border border-[#866f4a]
            h-66 w-60 
            md:h-72 md:w-60
            rounded-xl pt-20 pb-6 px-4 flex flex-col items-center justify-center transform scale-100 transition duration-500 ease-in-out shadow-xl relative">
              <img
                className="absolute -top-10 
                        md:-top-11
                        w-26 sm:w-28 md:w-32
                        drop-shadow-lg"
                src={wantedData[selected].image}
                alt="Perfume"
                loading="lazy"
              />

              <div className="text-center font-kanit flex flex-col items-center mt-14 md:mt-16">
                <span className="text:sm
                md:text-lg 
                font-bold text-white">{wantedData[selected].name}</span>
                <p className="text-sm text-[#f0f0f0]">{wantedData[selected].review}</p>
                <button 
                onClick={() => navigate("/shop")}
                className="mt-3 inline-flex gap-2 bg-[#d4af37] text-[#0b0f1c] font-semibold py-2 px-4 rounded-full hover:bg-[#3f74b1] hover:text-white transition">
                  ORDER <IoArrowBackCircleOutline className="animate-bounce mt-1" />
                </button>
              </div>
            </div>

            {/* Next Image */}
            <div className="relative opacity-60 
            h-60 w-40
            md:h-62 md:w-48 
            bg-pink-100/10 border border-rose-300/30 rounded-xl pt-20 pb-6 px-4 flex flex-col items-center justify-center gap-2 transition duration-500 ease-in-out scale-90 shadow-md">
              <img
                className="absolute -top-10 md:-top-9 
                w-24 md:w-25 
                drop-shadow-lg"
                src={wantedData[(selected + 1) % wantedData.length].image}
                alt="Perfume"
                loading="lazy"
              />
              <div className="text-center text-sm font-kanit mt-10">
                <span className="font-semibold text-white">
                  {wantedData[(selected + 1) % wantedData.length].name}
                </span>
                <p className="text-xs text-[#e0e0e0]">
                  {wantedData[(selected + 1) % wantedData.length].review}
                </p>
                <button 
                  onClick={() => navigate("/shop")}
                  className="mt-2 inline-flex gap-2 items-center bg-[#d4af37] text-[#0b0f1c] font-bold py-2 px-4 rounded-full hover:bg-[#a98dbb] hover:text-white transition">
                  ORDER <IoArrowBackCircleOutline className="animate-bounce mt-1" />
                </button>
              </div>
            </div>

            {/* Next Two Images */}
            <div className="relative opacity-40 bg-pink-100/6 border border-rose-300/30 h-56 w-48 rounded-xl pt-20 pb-6 px-4 flex flex-col items-center justify-center gap-2 transition duration-500 ease-in-out scale-90 shadow-md">
              <img
                className="absolute -top-7 w-23 drop-shadow-lg"
                src={wantedData[(selected + 2 + wantedData.length) % wantedData.length].image}
                alt="Perfume"
                loading="lazy"
              />
              <div className="text-center text-sm font-kanit mt-10">
                <span className="font-semibold text-white">
                  {wantedData[(selected + 2 + wantedData.length) % wantedData.length].name}
                </span>
                <p className="text-xs text-[#e0e0e0]">
                  {wantedData[(selected + 2 + wantedData.length) % wantedData.length].review}
                </p>
                <button 
                  onClick={() => navigate("/shop")}
                  className="mt-2 inline-flex gap-2 items-center bg-[#d4af37] text-[#0b0f1c] font-bold py-2 px-4 rounded-full hover:bg-[#a98dbb] hover:text-white transition">
                  ORDER <IoArrowBackCircleOutline className="animate-bounce mt-1" />
                </button>
              </div>
            </div>

          </div>
        </div>

        <div className="flex flex-row items-center gap-12 md:gap-20">
          <img
            src={left}
            alt="Left arrow"
            className="w-10 cursor-pointer hover:scale-110 transition"
            onClick={handleLeftClick}
            loading="lazy"
          />
          <img
            src={right}
            alt="Right arrow"
            className="w-10 cursor-pointer hover:scale-110 transition"
            onClick={handleRightClick}
            loading="lazy"
          />
        </div>
      </div>

);
};

export default PerfumeCarousel;