import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes } from "react-icons/fa";

const quizQuestions = [
  {
    id: 1,
    question: "Which vibe suits your personality best?",
    options: ["Romantic & Soft", "Bold & Confident", "Fresh & Energetic", "Mysterious & Exotic"],
  },
  {
    id: 2,
    question: "Pick your ideal setting:",
    options: ["Spring Garden", "Luxury Lounge", "Beach Getaway", "Arabian Night"],
  },
  {
    id: 3,
    question: "Which note attracts you most?",
    options: ["Rose/Jasmine", "Sandalwood/Cedar", "Lemon/Bergamot", "Oud/Amber/Vanilla"],
  },
  {
    id: 4,
    question: "Your go-to fashion style?",
    options: ["Elegant & Feminine", "Classic & Refined", "Casual & Sporty", "Chic & Glamorous"],
  },
  {
    id: 5,
    question: "Pick a color you vibe with:",
    options: ["Pink/Red", "Brown/Gold", "Blue/White", "Black/Purple"],
  },
  {
    id: 6,
    question: "What mood do you want your fragrance to express?",
    options: ["Playful & Romantic", "Powerful & Strong", "Clean & Refreshing", "Seductive & Intense"],
  },
  {
    id: 7,
    question: "Your perfect evening?",
    options: ["Dinner Date", "Whiskey & Jazz", "Sunset Walk", "Midnight Adventure"],
  },
  {
    id: 8,
    question: "Pick your signature accessory:",
    options: ["Pearl Earrings", "Leather Watch", "Sunglasses", "Gold Jewelry"],
  },
];

const resultsMapping = {
  Floral: {
    perfumes: ["Fruity Cherry", "Tommy Signature", "Citrus blossom"],
    pairsWellWith: [
      "Citrus Veil ",
      "Golden Flair",
      "Ileri Intense",
      "Isyrah",
    ],
  },
  Woody: {
    perfumes: ["Scented Oud", "Smokey Intensive", "Shay Bloom"],
    pairsWellWith: [
      "Ileri Bleu",
      "Leather Man",
      "Oud Cares",
      "Velour Oud",
    ],
  },
  Citrus: {
    perfumes: ["Coded Boss", "Essential d’ileri", "Magnetic rush"],
    pairsWellWith: [
      "Clean Sport",
      "Golden Intense",
      "Ocean Horizon",
      "Weekend Petals",
    ],
  },
  Oriental: {
    perfumes: [
      "Fruity Cherry",
      "Silken Code",
    ],
    pairsWellWith: [
      "Darkly Wanted",
      "Silk Secret",
      "Orchid Smoke",
      "Velour Oud",
    ],
  },
};

const FragQuiz = ({ onClose }) => {
  const navigate = useNavigate();
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [finalResult, setFinalResult] = useState(null);

  const handleAnswer = (questionIndex, option) => {
  const newAnswers = [...answers];
  newAnswers[questionIndex] = option;
  setAnswers(newAnswers);
};

  const handleNext = () => {
    if (currentQ + 2 < quizQuestions.length) {
      setCurrentQ(currentQ + 2);
    } else {
      calculateResult();
    }
  };

  const calculateResult = () => {
    let floral = 0,
      woody = 0,
      citrus = 0,
      oriental = 0;

    answers.forEach((ans) => {
      if (
        ["Romantic & Soft", "Spring Garden", "Rose/Jasmine", "Elegant & Feminine", "Pink/Red", "Playful & Romantic", "Dinner Date", "Pearl Earrings"].includes(ans)
      ) {
        floral++;
      } else if (
        ["Bold & Confident", "Luxury Lounge", "Sandalwood/Cedar", "Classic & Refined", "Brown/Gold", "Powerful & Strong", "Whiskey & Jazz", "Leather Watch"].includes(ans)
      ) {
        woody++;
      } else if (
        ["Fresh & Energetic", "Beach Getaway", "Lemon/Bergamot", "Casual & Sporty", "Blue/White", "Clean & Refreshing", "Sunset Walk", "Sunglasses"].includes(ans)
      ) {
        citrus++;
      } else {
        oriental++;
      }
    });

    const max = Math.max(floral, woody, citrus, oriental);
    let category = "Oriental";
    if (max === floral) category = "Floral";
    if (max === woody) category = "Woody";
    if (max === citrus) category = "Citrus";

    const perfumes = resultsMapping[category].perfumes;
    const pairs = resultsMapping[category].pairsWellWith;

    setFinalResult({ category, perfumes, pairs });
    setShowResult(true);
  };

   const q1Answered = answers[currentQ];
  const q2Answered = answers[currentQ + 1] || currentQ + 1 >= quizQuestions.length;
  const canProceed = q1Answered && q2Answered;



    const goToShop = () => {
  navigate("/shop");
};


  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50"
      >
        <motion.div
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          exit={{ y: 50 }}
          className="bg-[#e0cbbf] dark:bg-[#1a1a1a] rounded-2xl shadow-lg w-full max-w-2xl p-6 relative "
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-2 md:top-4 right-2 md:right-4 text-gray-900 dark:text-gray-300 hover:text-red-500"
          >
            <FaTimes size={20} />
          </button>

          {!showResult ? (
            <>
              {[quizQuestions[currentQ], quizQuestions[currentQ + 1]].map(
                (q, idx) =>
                  q && (
                    <div key={q.id} className="mb-6">
                      <h2 className="text-xl font-serif text-gray-900 dark:text-white mb-4">
                        {q.question}
                      </h2>
                      <div className="space-x-4 grid grid-cols-2 gap-5">
                        {q.options.map((opt, optIdx) => (
                          <button
                            key={optIdx}
                            onClick={() => handleAnswer(currentQ + idx, opt)}
                            className={`w-full text-left px-3 md:px-4 py-2 rounded-lg border ${
                              answers[currentQ + idx] === opt
                                ? "bg-black text-white dark:bg-[#d39c44] dark:text-black"
                                : "bg-white dark:bg-[#2a2a2a] text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-[#3a3a3a]"
                            } transition`}
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                    </div>
                  )
              )}

              <div className="mt-6 flex justify-end">
                <button
                  onClick={handleNext}
                  disabled={!canProceed}
                  className="px-6 py-2 bg-black dark:bg-[#d39c44] text-white rounded-full disabled:opacity-50"
                >
                  {currentQ + 2 >= quizQuestions.length
                    ? "Finish"
                    : "Next"}
                </button>
              </div>
            </>
          ) : (
            <div className="text-center text-black dark:text-white">
              <h2 className="text-2xl font-bold mb-2">
                Your Signature Category: {finalResult.category}
              </h2>
              <p className="mb-4 text-gray-600 dark:text-gray-400 text-sm md:text-md">
                We recommend exploring these iconic perfumes:
              </p>

              <div className="grid grid-cols-2 gap-4 mb-6">
                {finalResult.perfumes.map((p, idx) => (
                  <div
                    key={idx}
                    className="p-3 bg-gray-100 dark:bg-[white]/20 rounded-lg"
                  >
                    {p}
                  </div>
                ))}
              </div>

              <h3 className="text-xl font-semibold mb-2">Pairs Well With</h3>
              <div className="grid grid-cols-2 gap-4 mb-6">
                {finalResult.pairs.map((p, idx) => (
                  <div
                    key={idx}
                    className="p-3 bg-gray-100 dark:bg-[white]/10 rounded-lg"
                  >
                    {p}
                  </div>
                ))}
              </div>

              <button 
                onClick={() => navigate("/shop")}
                className="px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 dark:hover:bg-[#d39c44]">
                Discover Your Signature Scent
              </button>
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default FragQuiz;
