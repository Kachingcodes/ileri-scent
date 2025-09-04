import React, { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { wantedData } from "../../data/wantedData";

const PerfumeCarousel = () => {
  const navigate = useNavigate();
  const scrollRef = useRef(null);

  // Duplicate data to create seamless loop
  const loopedData = [...wantedData, ...wantedData];

  // Reset scroll when reaching either end
  useEffect(() => {
    const container = scrollRef.current;

    const handleScroll = () => {
      const scrollWidth = container.scrollWidth / 2;
      if (container.scrollLeft >= scrollWidth) {
        container.scrollLeft = container.scrollLeft - scrollWidth;
      } else if (container.scrollLeft <= 0) {
        container.scrollLeft = container.scrollLeft + scrollWidth;
      }
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full overflow-x-auto scrollbar-hide" ref={scrollRef}>
      <div className="flex gap-8 px-4 py-18 md:py-22">
        {loopedData.map((item, index) => (
          <div
            key={index}
            className="relative flex-shrink-0 min-w-[160px] md:min-w-[220px] rounded-xl shadow-lg p-6 pt-16 bg-white/80 dark:bg-white/10"
          >
            <div className="absolute -top-14 left-1/2 -translate-x-1/2">
              <img
                src={item.image}
                alt={item.name}
                className="w-36 h-40 object-contain mx-auto drop-shadow-xl transition-transform duration-300 hover:scale-105"
                loading="lazy"
              />
            </div>

            <div className="text-center mt-10 md:mt-16">
              <h3 className="font-bold">{item.name}</h3>
              <p className="text-md">{item.notes}</p>
              <button
                onClick={() => navigate("/shop")}
                className="mt-2 inline-block bg-white dark:bg-[#d39c44] text-[#0b0f1c] font-semibold px-4 py-2 rounded-full shadow-md hover:bg-gray-100 hover:dark:bg-[#e8d6be] transition"
              >
                Order
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Hide scrollbar */}
      <style>
        {`
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
          .scrollbar-hide {
            -ms-overflow-style: none;  /* IE and Edge */
            scrollbar-width: none;  /* Firefox */
          }
        `}
      </style>
    </div>
  );
};

export default PerfumeCarousel;