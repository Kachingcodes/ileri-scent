import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { MdAddShoppingCart, MdOutlineReviews } from "react-icons/md";
import { IoSearchSharp } from "react-icons/io5";

const FixedTop = ({ openModal, setSearchItem, cartCount }) => {
  const navigate = useNavigate();
  const [input, setInput] = useState("");
  const [isCartOpen, setIsCartOpen] = useState(false);
  
  const handleSearch = (e) => {
    setInput(e.target.value);
    setSearchItem(e.target.value.toLowerCase());
  };

  const goToHome = () => {
    navigate("/");
  };

  const goToReviews = () => {
    navigate("/reviews");
  };

  return (
    <div className="w-full bg-black dark:bg-white p-4 md:p-6 flex flex-col items-center gap-4">
      <div className="flex flex-col md:flex-col items-center justify-between gap-3 w-full">

        <div className="flex flex-col gap-2 text-center md:text-left">
          
          <p className="text-xs text-amber-400 dark:text-black">
            (Disclaimer: Bottles may be different from the images on the site but the product remains the same)
          </p>
        </div>

        <div className="flex flex-col items-center md:items-start gap-3 w-full">
          {/* Search Input */}
          <div className="flex w-full  h-8 items-center gap-2 border border-[#f9c87f] dark:border-[#d39c44] rounded-full px-4 py-2 bg-white/8 shadow-sm focus-within:ring-1 focus-within:ring-yellow-200 transition-all">
            <IoSearchSharp className="text-gray-300 text-xl dark:text-black" />
            <input
              type="text"
              placeholder="Search by name, volume, or price"
              value={input}
              onChange={handleSearch}
              className="w-full outline-none bg-transparent text-sm text-white placeholder-gray-400 dark:placeholder-gray-600"
            />
          </div>

          {/* Icons */}
          <div className="flex flex-row gap-6 md:gap-8 relative mt-2 text-white dark:text-black">
            <FaHome className="text-xl md:text-2xl cursor-pointer" onClick={goToHome} />
            <div className="relative cursor-pointer" onClick={openModal}>
              <MdAddShoppingCart className="text-xl md:text-2xl" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </div>
            <MdOutlineReviews className="text-xl md:text-2xl cursor-pointer" onClick={goToReviews} />
          </div>
        </div>

      </div>
    </div>
  );
};

export default FixedTop;
