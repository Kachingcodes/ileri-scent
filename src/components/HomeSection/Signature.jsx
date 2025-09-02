import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { signatureData } from "../../data/signatureData";

const Signature = () => {
    const navigate = useNavigate();

    const goToShop = () => {
  navigate("/shop");
};


  return (
    <section className="bg-[#e8d6be] dark:bg-[#060606] py-16 px-6 text-gray-900 dark:text-white">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-playfair tracking-wide">Signature Collections</h2>
        <p className="text-gray-800 dark:text-gray-300 mt-4">
          Discover scents crafted for every occasion, mood, and personality.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {signatureData.map((item, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-2xl shadow-lg"
          >
          
            <img
              src={item.image}
              alt={item.title}
              className="object-contain w-full h-[300px] transition-transform duration-500 group-hover:scale-110"
            />

            {/* Description section shifted lower */}
            <div className="absolute inset-0 bg-[white]/2 dark:bg-[white]/8 flex flex-col justify-end p-2 text-left">
              <h3 className="text-xl font-semibold font-news">{item.title}</h3>
              <button 
                onClick={() => navigate("/shop")}
                className="mt-4 mb-1 inline-block px-4 py-2 bg-white dark:bg-[#d39c44] text-black text-sm rounded-full shadow hover:bg-gray-100 hover:dark:bg-[#e8d6be] transition">
                Explore
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Signature;