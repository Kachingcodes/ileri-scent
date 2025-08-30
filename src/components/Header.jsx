import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../img/logo.png";
import { GiShoppingCart } from "react-icons/gi";
import { FiMenu, FiX } from "react-icons/fi";
import { FaHome, FaPhoneAlt, FaMoon, FaSun } from "react-icons/fa";
import { MdOutlineReviews } from "react-icons/md";

const Header = () => {
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  const mobileMenuRef = useRef(null);
  const contactDropdownRef = useRef(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setIsDropdownOpen(false); 
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

  const goToReviews = () => navigate("/reviews");
  const goToShop = () => navigate("/shop");

  // helper for smooth scroll
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
<header className="w-full p-4 text-black dark:text-white z-50 fixed left-0 top-0 bg-white dark:bg-black font-news text-xl">
  <div className="flex items-center justify-between">
    {/* LEFT: Logo */}
    <div className="flex items-center gap-2">
      <img src={logo} alt="Logo" className="w-8 h-13 block" />
      <h5 className="mt-5 text-xl font-great text-white">Ileri Scent</h5>
    </div>

    {/* CENTER: Nav */}
    <div className="hidden md:flex gap-8 items-center absolute left-1/2 transform -translate-x-1/2">
      <h5
        className="text-base font-semibold hover:text-amber-500 cursor-pointer"
        onClick={() => navigate("/")}
      >
        Home
      </h5>
      <h5
        className="text-base font-semibold hover:text-amber-500 cursor-pointer"
        onClick={() => scrollToSection("popular")}
      >
        Popular
      </h5>
      <h5
        className="text-base font-semibold hover:text-amber-500 cursor-pointer"
        onClick={() => scrollToSection("works")}
      >
        Works
      </h5>
      <h5
        className="text-base font-semibold hover:text-amber-500 cursor-pointer"
        onClick={() => scrollToSection("about")}
      >
        About Us
      </h5>
      <h5
        className="text-base font-semibold hover:text-amber-500 cursor-pointer"
        onClick={() => scrollToSection("contact")}
      >
        Contact Us
      </h5>

      <h5
        className="text-base font-semibold hover:text-amber-500 cursor-pointer"
        onClick={goToReviews}
      >
        Reviews
      </h5>
    </div>

    {/* RIGHT: Shop + Dark Toggle + Mobile Menu */}
    <div className="flex items-center gap-4">
      {/* SHOP BTN */}
      <div className="btn hidden md:flex  dark:bg-blue-300 p-2 rounded-full">
        <button className="flex items-center text-base" onClick={goToShop}>
          <div className="relative flex items-center justify-center">
            <div className="flex justify-center items-center p-2 bg-gray-200 rounded-full hover:animate-spin transition duration-500">
              <GiShoppingCart size={19} className="text-black" />
            </div>
          </div>
          <span className="ml-2">SHOP</span>
        </button>
      </div>

      {/* DARK MODE TOGGLE */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="hidden md:flex ml-2 p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-black dark:text-yellow-300"
      >
        {darkMode ? <FaSun /> : <FaMoon />}
      </button>

      {/* MOBILE MENU ICON */}
      <div className="md:hidden z-50" onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? (
          <FiX size={28} className="text-white cursor-pointer" />
        ) : (
          <FiMenu size={28} className="text-white cursor-pointer" />
        )}
      </div>
    </div>
  </div>
</header>

  );
};

export default Header;
