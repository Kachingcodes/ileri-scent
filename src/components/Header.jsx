import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../img/logo.png";
import logo_black from '../img/logo_black.png';
import { GiShoppingCart } from "react-icons/gi";
import { FiMenu, FiX } from "react-icons/fi";
import { FaHome, FaPhoneAlt } from "react-icons/fa";
import { MdOutlineReviews } from "react-icons/md";

const Header = () => {
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const mobileMenuRef = useRef(null);
  const contactDropdownRef = useRef(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setIsDropdownOpen(false); // close dropdown when menu toggles
  };

  const toggleContactDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleClickOutside = (event) => {
    if (
      mobileMenuRef.current &&
      !mobileMenuRef.current.contains(event.target) &&
      contactDropdownRef.current &&
      !contactDropdownRef.current.contains(event.target)
    ) {
      setIsDropdownOpen(false);
      setIsMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);


  const goToReviews = () => {
    navigate("/reviews");
  };

  const goToShop = () => {
    navigate("/shop");
  };


  return (
    <header className="w-full p-4 text-white relative z-50">
      <div className="flex justify-between items-center">
        
        <div className="flex items-center gap-2">
          <img src= {logo} alt="Logo" className="w-8 h-13 block" />
          <h5 className="mt-5 text-xl font-great text-white">Ileri Scent</h5>
        </div>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex gap-8 bg-amber-500 dark:bg-blue-300 p-4 rounded-full items-center">
          <h5
            className="text-base font-semibold hover:text-black cursor-pointer"
            onClick={() => navigate("/")}
          >
            Home
          </h5>

          <div className="relative" ref={contactDropdownRef}>
            <h5
              className="text-base p-2 font-semibold hover:text-black cursor-pointer"
              onClick={toggleContactDropdown}
            >
              Contacts
            </h5>
            {isDropdownOpen && (
              <div className="flex items-center justify-center gap-3 w-42 absolute md:mt-4 bg-white dark:bg-black text-black rounded p-2 shadow dark:text-white">
                <FaPhoneAlt/>
                <p className="text-sm">+234 816 825 0885</p>
              </div>
            )}
          </div>

          <h5
            className="text-base font-semibold hover:text-black cursor-pointer"
            onClick={() => navigate("/reviews")}
          >
            Reviews
          </h5>
        </div>

        {/* SHOP BTN */}
        <div className="btn hidden md:flex bg-amber-500 dark:bg-blue-300 p-2 rounded-full">
          <button className="flex items-center text-base"
          onClick={() => navigate("/shop")}>

            <div className="relative flex items-center justify-center">
              <div className="flex justify-center items-center p-3 bg-[#fff0f5] rounded-full hover:animate-spin transition duration-500">
                <GiShoppingCart className="text-black" />
              </div>
            </div>
            <span className="ml-2">SHOP</span>
          </button>
        </div>

        {/* MOBILE MENU ICON */}
        <div className="md:hidden z-50" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? (
            <FiX size={28} className="text-white cursor-pointer"/>
          ) : (
            <FiMenu size={28} className="text-white cursor-pointer"/>
          )}
        </div>
      </div>

      {/* MOBILE DROPDOWN NAV */}
      {isMobileMenuOpen && (
        <div
          ref={mobileMenuRef}
          className="flex flex-col absolute z-40 top-12 right-0 bg-black dark:bg-white text-white dark:text-black 
          rounded-lg mt-4 space-y-1 w-32 items-center justify-end md:hidden"
        >
          <h5
            className="flex z-40 gap-2 text-base border-b border-gray-500 pb-1 mb-0 w-full p-3 hover:text-black cursor-pointer"
            onClick={() => {
              navigate("/");
              setIsMobileMenuOpen(false);
            }}
          >
            <FaHome className="mt-1" /> Home
          </h5>

          <div className="relative w-full" ref={contactDropdownRef}>
            <h5
              className="flex gap-2 text-base border-b border-gray-500 pb-1 w-full p-3 hover:text-black cursor-pointer"
              onClick={toggleContactDropdown}
            >
              <FaPhoneAlt className="mt-1" /> Contact
            </h5>
            {isDropdownOpen && (
              <div className="w-36 absolute top-1 right-33 bg-gray-400 dark:bg-black text-white rounded p-2 shadow z-50">
                <p className="text-sm">+234 816 825 0885</p>
              </div>
            )}
          </div>

          <h5
            className="flex z-40 gap-2 text-base border-b border-gray-500 pb-1 w-full p-3 hover:text-black cursor-pointer"
            onClick={() => {
              goToReviews();
              setIsMobileMenuOpen(false);
            }}
          >
            <MdOutlineReviews className="mt-1" /> Reviews
          </h5>

          <h5
            className="flex gap-2 w-full p-2 ml-1 text-base hover:text-black cursor-pointer"
            onClick={() => {
              goToShop();
              setIsMobileMenuOpen(false);
            }}

          >
            <GiShoppingCart className="mt-1" /> Shop
          </h5>
        </div>
      )}
    </header>
  );
};

export default Header;