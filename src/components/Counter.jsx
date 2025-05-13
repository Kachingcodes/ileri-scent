import React, { useRef } from "react";
import CountUp from "react-countup";


const Counter = () => {

  return (
    <div className="flex flex-col text-white w-full items-center">
        
        {/* COUNTUP SECTION */}
            <div className="flex justify-evenly text-sm md:text-lg text-center py-6 md:py-10 space-x-4 md:space-x-8 w-[90%] md:w-3/4 lg:w-1/2">
              <div className="flex flex-col items-center">
                <span className="text-center text-xl md:text-2xl hover:border hover:border-blue-300 p-2 rounded-lg">
                  <CountUp start={0} end={50} duration={4} delay={0} />+
                </span>
                <span className="font-sura mt-2 text-xs md:text-sm">FRAGRANCES AVAILABLE</span>
              </div>
  
              <div className="flex flex-col">
                <span className="text-center text-xl md:text-2xl hover:border hover:border-[#e88dae] p-2 rounded-lg">
                  <CountUp start={0} end={100} duration={6} delay={0} />+
                </span>
                <span className="font-sura mt-2 text-xs md:text-sm">CUSTOMERS NATIONWIDE</span>
              </div>
  
              <div className="flex flex-col">
                <span className="text-center text-xl md:text-2xl hover:border hover:border-orange-400  p-2 rounded-lg">
                  <CountUp start={0} end={200} duration={8} delay={0} />+
                </span>
                <span className="font-sura mt-2 text-xs md:text-sm">ORDERS GLOBALLY</span>
              </div>
            </div>

    </div>
  );
};

export default Counter;


