import React, { useState } from "react";
import { FiInfo } from "react-icons/fi";

const ProductCard = ({ store, handleClick, openPurchasePanel }) => {
    const [showInfo, setShowInfo] = useState(false);

    const toggleInfo = (e) => {
        e.stopPropagation();
        setShowInfo((prev) => !prev);
    };

    return (
        <div
            className="relative flex flex-col bg-white/70 dark:bg-black w-full rounded-xl p-4 items-center justify-evenly shadow-lg dark:shadow-md dark:shadow-white/6"
            key={store.id}
            onClick={() => handleClick(store)}
        >
            {/* INFO ICON */}
            <div
                className="absolute top-2 right-2 bg-black/30 dark:bg-white/30 text-white p-1 rounded-full z-20 
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
                    className="absolute top-0 right-0 z-10 bg-white dark:bg-black text-black dark:text-white text-md 
                            p-3 rounded-lg shadow-lg w-full
                            max-h-50 md:max-h-full overflow-y-auto"
                >
                    <p className="p-2 md:p-3 text-sm md:text-md">{store.notes}</p>
                </div>
            )}

            {/* IMAGE */}
            <img
                className="w-20 md:w-50 rounded-xl shadow-black shadow-xs"
                src={store.image}
                alt={store.name}
                loading="lazy"
            />

            {/* NAME */}
            <h2 className="font-sura text-md mt-2 md:text-lg font-semibold text-center text-blue-950 dark:text-white">
                {store.name}
            </h2>

            {/* PURCHASE BUTTON */}
            <button
                className="text-black dark:text-white px-4 py-1 rounded-md shadow-md/20 mt-3 hover:bg-[#d39c44] hover:dark:bg-[#d39c44] dark:bg-[#d39c44]/84 transition-all"
                onClick={(e) => {
                    e.stopPropagation();
                    openPurchasePanel(store);
                }}
            >
                Purchase
            </button>
        </div>
    );
};

export default ProductCard;
