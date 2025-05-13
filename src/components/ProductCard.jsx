import React from "react";

const ProductCard = ({ store, handleClick, addToCart }) => {
    return (
        <div className="flex flex-col w-full md:w-full rounded-2xl p-4 items-center justify-evenly 
        shadow-lg bg-[#b8b1b1a4]" key={store.id} onClick={() => handleClick(store)}>
            <img className="w-20 md:w-26" src={store.image} alt={store.name} loading="lazy"/>
            
            <div className="flex flex-col justify-evenly items-center p-1 py-1">
                <h2 className="font-sura text-sm md:text-md font-semibold text-center text-blue-950">{store.name}</h2>
                <span className="text-sm text-black">{store.review}</span>
                <span className="text-sm md:text-md font-news">#{store.price}</span>
                <button className="bg-[black]/20 p-3 text-sm text-blue-900 rounded-full mt-2 hover:bg-amber-400 hover:text-black transition-colors hover:shadow-md/100 shadow-gray-600 duration-200 active:bg-yellow-500" onClick={(e) => {
                    e.stopPropagation();
                    addToCart(store.id);
                }}>
                    Add To Cart
                </button>
            </div> 
        </div>
    );
};

export default ProductCard;
