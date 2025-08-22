import React, { useState } from "react";
import { FiInfo } from "react-icons/fi";

const ProductCard = ({ store, handleClick, addToCart }) => {
    const [showInfo, setShowInfo] = useState(false);

    // Toggle modal on mobile
    const toggleInfo = (e) => {
        e.stopPropagation(); // prevent triggering card click
        setShowInfo((prev) => !prev);
    };

    return (
        <div
            className="relative flex flex-col bg-white/70 w-full md:w-full rounded-xl p-2 items-center justify-evenly 
            shadow-lg"
            key={store.id}
            onClick={() => handleClick(store)}
        >
            {/* INFO ICON */}
            <div
                className="absolute top-2 right-2 bg-black/30 text-white p-1 rounded-full z-20
                           md:hover:bg-black/60 cursor-pointer"
                onClick={toggleInfo}
                onMouseEnter={() => window.innerWidth >= 768 && setShowInfo(true)}
                onMouseLeave={() => window.innerWidth >= 768 && setShowInfo(false)}
            >
                <FiInfo size={16} />
            </div>

            {/* INFO MODAL */}
            {showInfo && (
                <div
                    className="absolute top-0 right-0 z-10 bg-white text-black text-md 
                            p-3 rounded-lg shadow-lg w-full
                            max-h-60 md:max-h-full overflow-y-auto"
                >
                    <p className="p-2 md:p-3">{store.notes}</p>
                </div>
                )}
                
            <img
                className="w-20 md:w-26"
                src={store.image}
                alt={store.name}
                loading="lazy"
            />
            <h2 className="font-sura text-md mt-2 md:text-lg font-semibold text-center text-blue-950">
                {store.name}
            </h2>

            <div className="flex flex-col md:flex-row justify-evenly items-center p-1 py-1 md:gap-6 gap-1">
                <div className="flex flex-col gap-1">
                    <span className="text-sm text-black">{store.review}</span>
                    <span className="text-sm md:text-md font-news">#{store.price}</span>
                </div>

                <div className="mb-2">
                    <button
                    className="bg-gray-200 shadow-md/20 p-2.5 text-sm text-black rounded-full mt-2 hover:text-blue-900 transition-colors hover:shadow-md/80 duration-200 active:bg-yellow-500"
                    onClick={(e) => {
                        e.stopPropagation();
                        addToCart(store.id);
                    }}
                >
                      Add To Cart
                    </button>
                </div>

            </div>
        </div>
    );
};

export default ProductCard;

// bg-[black]/20