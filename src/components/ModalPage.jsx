import React, { useState } from "react";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import ConfirmationModal from "./ConfirmationModal";
import { TbLetterX } from "react-icons/tb";

const ModalPage = ({ selectedCategory, onClose }) => {
  const [step, setStep] = useState(1);
  const [scent, setScent] = useState("");
  const [volume, setVolume] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const handleNext = () => {
    if (step === 1 && scent) {
      setStep(2);
    } else if (step === 2 && volume) {
      setStep(3);
    }
  };

  const handleBack = () => {
    if (step === 2) setStep(1);
    if (step === 3) setStep(2);
  };

  const handleConfirm = () => {
    const message = `Hello! I want to order NAME: ${scent} VOLUME: ${volume}.`;
    const url = `https://wa.me/2348133076040?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50 px-4">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-black"
        >
          <TbLetterX className="h-5 w-5" />
        </button>

        {step === 1 && (
          <StepOne
            scent={scent}
            setScent={setScent}
            selectedCategory={selectedCategory}
            onNext={handleNext}
            searchQuery={searchQuery} 
            setSearchQuery={setSearchQuery} 
          />
        )}

        {step === 2 && (
          <StepTwo
            volume={volume}
            setVolume={setVolume}
            onNext={handleNext}
            onBack={handleBack}
          />
        )}

        {step === 3 && (
          <ConfirmationModal
            scent={scent}
            volume={volume}
            selectedCategory={selectedCategory}
            onConfirm={handleConfirm}
            onBack={handleBack}
          />
        )}
      </div>
    </div>
  );
};

export default ModalPage;