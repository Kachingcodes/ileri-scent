import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import men from "../img/bottles/men.png";
import women from "../img/bottles/women.png";
import unisex from "../img/bottles/unisex.png";
import ModalPage from "./ModalPage";
import ConfirmationModal from "./ConfirmationModal";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import { IoArrowBackCircleOutline } from "react-icons/io5";

const Categories = () => {
  const card = {
    hiddenLeft: { opacity: 0, x: -100 },
    hiddenRight: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
  };

  const cardUp = {
    hiddenUp: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [scent, setScent] = useState("");
  const [volume, setVolume] = useState("");
  const [step, setStep] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");

  const handlePlaceOrder = (category) => {
    setSelectedCategory(category);
    setStep(1);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleNextStep = () => {
    if (step < 2) setStep(step + 1);
  };

  const handlePreviousStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmitOrder = () => {
    if (volume) {
      setIsModalOpen(false);
      setIsConfirmationModalOpen(true);
    } else {
      alert("Please complete your order");
    }
  };

  const handleConfirmOrder = () => {
    const phoneNum = "2348168250885";
    const message = `Hello, I would like to place an order: \n- Scent: ${scent}\n- Volume: ${volume}`;
    const encodedMessage = encodeURIComponent(message);
    const url = `https://wa.me/${phoneNum}?text=${encodedMessage}`;
    window.location.href = url;
  };

  const handleEditOrder = () => {
    setIsConfirmationModalOpen(false);
    setIsModalOpen(true);
    setStep(1);
  };

  useEffect(() => {
    document.body.style.overflow = isModalOpen || isConfirmationModalOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isModalOpen, isConfirmationModalOpen]);

  return (
    <div className="w-full flex flex-col relative z-200 p-4 md:p-16 bg-gray-200 h-[1250px] md:h-[700px]">

      <div className="flex flex-col gap-2 items-center justify-center p-6">
        <h1 className="text-3xl md:text-4xl font-extrabold font-playfair tracking-wider">OUR CATEGORIES</h1>
        <span className="text-sm md:text-md font-sura">For Something More Tailored</span>
      </div>  

      <div className="flex flex-col md:flex-row items-center justify-evenly p-8 mt-18 md:mt-16 gap-30">
        <motion.div className="border-1 border-amber-200
         shadow-md/60 rounded-2xl 
        p-2 w-60 h-60 relative flex items-center justify-center" 
        variants={card} 
        initial="hiddenLeft" 
        whileInView="visible" 
        transition={{ delay: 0.5, duration: 0.8 }}>
          <img src={men} alt="Men Perfume" className="absolute -top-20 w-50 h-62" 
          loading="lazy"/>
          <div className="bg-gradient-to-br from-[#a3b8f8] via-[#3232a1] to-[#d4af37] 
          p-3 flex flex-row items-center justify-center gap-2 md:gap-5 mt-47 md:mt-46 rounded-xl w-full cursor-pointer"
          onClick={() => handlePlaceOrder("MEN")}>
            <span className="text-md md:text-2xl font-semibold font-news">MEN</span>
            <IoArrowBackCircleOutline className="animate-bounce mt-1 text-2xl"/>
          </div>
        </motion.div>

        <motion.div className="border-1 border-amber-200
         shadow-md/60 rounded-2xl 
        p-2 w-60 h-60 relative flex items-center justify-center" 
        variants={cardUp} 
        initial="hiddenUp" 
        whileInView="visible" 
        transition={{ delay: 0.5, duration: 0.8 }}>
          <img src={women} alt="Women Perfume" className="absolute -top-22 w-35 h-68" 
          loading="lazy"/>
          <div className="bg-gradient-to-br from-[#e0bbf3] via-[#9f3384] to-[#d4af37] 
          p-3 flex flex-row items-center justify-center gap-2 md:gap-5 mt-47 md:mt-46 rounded-xl w-full cursor-pointer"
          onClick={() => handlePlaceOrder("WOMEN")}>
            <span className="text-md md:text-2xl font-semibold font-news">WOMEN</span>
            <IoArrowBackCircleOutline className="animate-bounce mt-1 text-2xl"/>
          </div>
        </motion.div>

        <motion.div className="border-1 border-amber-200
         shadow-md/60 rounded-2xl  
        p-2 w-60 h-60 relative flex items-center justify-center" 
        variants={card} 
        initial="hiddenRight" 
        whileInView="visible" 
        transition={{ delay: 0.5, duration: 0.8 }}>
          <img src={unisex} alt="Unisex Perfume" className="absolute -top-20 w-46" 
          loading="lazy"/>
          <div className="bg-gradient-to-br from-[#e2e8f0] via-[#cd9d18] to-[#c2b68f] 
          p-3 flex flex-row items-center justify-center gap-2 md:gap-5 mt-47 md:mt-46 rounded-xl w-full cursor-pointer"
          onClick={() => handlePlaceOrder("UNISEX")}>
            <span className="text-md md:text-2xl font-semibold font-news">UNISEX</span>
            <IoArrowBackCircleOutline className="animate-bounce mt-1 text-2xl"/>
          </div>
        </motion.div>
      </div>

      {isModalOpen && (
        <ModalPage
          step={step}
          scent={scent}
          setScent={setScent}
          volume={volume}
          setVolume={setVolume}
          handleNextStep={handleNextStep}
          handlePreviousStep={handlePreviousStep}
          handleSubmitOrder={handleSubmitOrder}
          selectedCategory={selectedCategory}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          onClose={closeModal}
        />
      )}

      {isConfirmationModalOpen && (
        <ConfirmationModal
          scent={scent}
          volume={volume}
          handleEditOrder={handleEditOrder}
          handleConfirmOrder={handleConfirmOrder}
        />
      )}
    </div>
  );
};

export default Categories;