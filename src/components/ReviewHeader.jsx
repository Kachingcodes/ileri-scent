import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../img/logo.png";
import logo_black from "../img/logo_black.png";
import { FiMenu, FiX } from "react-icons/fi";
import { FaMoon, FaSun, FaHome } from "react-icons/fa";
import { GiShoppingCart } from "react-icons/gi";

const ReviewHeader = () => {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  const mobileMenuRef = useRef(null);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  // close when clicking outside
  const handleClickOutside = (event) => {
    if (
      mobileMenuRef.current &&
      !mobileMenuRef.current.contains(event.target)
    ) {
      setIsMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Dark mode effect
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const goToShop = () => navigate("/shop");
  const goToHome = () => navigate("/");


  return (
    <section id="nav">
      <header className="w-full p-4 text-black dark:text-white z-50 fixed left-0 top-0 bg-white dark:bg-black font-news text-lg shadow-md">
        <div className="flex items-center justify-between">
          {/* LEFT: Logo */}
          <div className="flex items-center gap-2 ml-0 md:ml-2">
            {/* Light mode logo */}
            <img 
              src={logo_black} 
              alt="Logo" 
              className="w-8 h-13 block dark:hidden"
            />

            {/* Dark mode logo */}
            <img 
              src={logo} 
              alt="Logo" 
              className="w-8 h-13 hidden dark:block"
            />
            <h5 className="mt-5 text-xl font-great dark:text-white text-black">Ileri Scent</h5>
          </div>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex gap-8 items-center absolute left-1/2 transform -translate-x-1/2 cursor-pointer">
            <h2 className="font-semibold text-3xl md:text-4xl tracking-wide font-playfair">REVIEWS</h2>
          </div>
        
          {/* RIGHT: Home + Shop + Dark Toggle + Mobile Icon */}
          <div className="flex items-center gap-2">
            {/* HOME BTN (Desktop) */}
            <div className="btn hidden md:flex p-2 rounded-full">
              <button className="flex items-center text-base" onClick={() => navigate("/")}>
                <div className="relative flex items-center justify-center">
                  <div className="flex justify-center items-center p-2 bg-gray-200 dark:bg-gray-700 rounded-full hover:bg-amber-500 transition duration-500">
                    <FaHome size={19} className="dark:text-white text-black" />
                  </div>
                </div>
                <span className="ml-2 hover:text-amber-500">HOME</span>
              </button>
            </div>

             <div className="btn hidden md:flex p-2 rounded-full">
              <button className="flex items-center text-base" onClick={goToShop}>
                <div className="relative flex items-center justify-center">
                  <div className="flex justify-center items-center p-2 bg-gray-200 dark:bg-gray-700 rounded-full hover:bg-amber-500 transition duration-500">
                    <GiShoppingCart  size={19} className="dark:text-white text-black" />
                  </div>
                </div>
                <span className="ml-2 hover:text-amber-500">SHOP</span>
              </button>
            </div>

            {/* DARK MODE (Desktop) */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="hidden md:flex ml-2 p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-black dark:text-yellow-300"
            >
              {darkMode ? <FaSun /> : <FaMoon />}
            </button>

            {/* MOBILE MENU ICON */}
            <div className="md:hidden z-50" onClick={toggleMobileMenu}>
              {isMobileMenuOpen ? (
                <FiX size={28} className="cursor-pointer"/>
              ) : (
                <FiMenu size={28} className="cursor-pointer"/>
              )}
            </div>
          </div>
        </div>

        {/* MOBILE MENU SLIDE-IN */}
        {isMobileMenuOpen && (
          <div
            ref={mobileMenuRef}
            className="md:hidden fixed top-0 left-0 w-3/4 h-screen bg-white dark:bg-black shadow-lg flex flex-col gap-6 p-6 pt-20 z-40 transition-transform duration-300"
          >
            {/* MOBILE HOME BUTTON */}
            <button
              className="flex items-center gap-2 mt-4 p-3 rounded-lg bg-gray-200 dark:bg-gray-700"
              onClick={goToHome}
            >
              <FaHome size={20} /> Home
            </button>

            <button
              className="flex items-center gap-2 mt-4 p-3 rounded-lg bg-gray-200 dark:bg-gray-700"
              onClick={goToShop}
            >
              <GiShoppingCart size={20} /> Shop
            </button>

            {/* DARK MODE (Mobile) */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="mt-4 p-3 rounded-lg bg-gray-200 dark:bg-gray-700 flex items-center justify-center"
            >
              {darkMode ? <FaSun /> : <FaMoon />}
            </button>
          </div>
        )}
      </header>
    </section>
  );
};

export default ReviewHeader;
