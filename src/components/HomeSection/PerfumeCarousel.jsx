import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { wantedData } from "../../data/wantedData";

const PerfumeCarousel = () => {
    const navigate = useNavigate();

    const goToShop = () => {
  navigate("/shop");
};


  return (
    <div className="w-full overflow-hidden py-20">
      <div className="carousel-track flex animate-scroll gap-8">
        {/* Duplicate the items twice so it loops seamlessly */}
        {[...wantedData, ...wantedData].map((item, index) => (
          <div
            key={index}
            className="relative min-w-[200px] md:min-w-[250px] flex-shrink-0 rounded-xl shadow-lg p-6 pt-16 bg-white/2 dark:bg-white/8"
          >
            {/* Floating image */}
            <div className="absolute -top-10 left-1/2 -translate-x-1/2">
              <img
                src={item.image}
                alt={item.name}
                className="w-36 h-40 object-contain mx-auto drop-shadow-xl transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
            </div>

            {/* Text content */}
            <div className="text-center mt-16">
              <h3 className="font-bold">{item.name}</h3>
              <button 
                onClick={() => navigate("/shop")}
                className="mt-2 inline-block bg-white dark:bg-[#d39c44] text-[#0b0f1c] font-semibold px-4 py-2 rounded-full hover:dark: hover:bg-gray-100 hover:dark:bg-[#e8d6be] transition">
                Order
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Tailwind keyframes for infinite scroll */}
      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-scroll {
            animation: scroll 25s linear infinite;
            width: max-content;
          }
          /* Pause on hover or touch */
          .carousel-track:hover,
          .carousel-track:active {
            animation-play-state: paused;
          }
        `}
      </style>
    </div>
  );
};

export default PerfumeCarousel;