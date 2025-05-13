import React from "react";

const PerfumeModal = ({ selectedScent, setIsPerfumeModalOpen, addToCart }) => {
    return (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
            <div className="bg-white dark:bg-blue-950 text-blue-900 dark:text-white rounded-2xl shadow-xl w-[90%] max-w-md p-6 relative">
                
                <button 
                    className="absolute top-3 right-3 text-2xl text-yellow-500 hover:text-yellow-600 transition"
                    onClick={() => setIsPerfumeModalOpen(false)}
                >
                    ×
                </button>

                <h2 className="text-xl font-semibold mb-2">{selectedScent.name}</h2>
                <p className="text-sm text-yellow-700 mb-4">{selectedScent.review}</p>

                <button 
                    className="w-full bg-blue-900 text-white py-2 rounded-full hover:bg-yellow-500 hover:text-blue-900 transition-colors"
                    onClick={() => addToCart(selectedScent.id)}
                >
                    Add To Cart
                </button>
            </div>
        </div>
    );
};

export default PerfumeModal;
