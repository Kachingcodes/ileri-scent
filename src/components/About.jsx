import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import red1 from "../img/bottles/red1.png"; // Your bottle image

const About = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const aboutRef = useRef(null);
  const rotatingCircleRef = useRef(null);

  const fullText = `Each scent is expertly crafted with premium oils, blending musky, woody, fresh, and fruity notes. Featuring ingredients like sandalwood, vanilla, jasmine, and citrus, our perfumes evoke romantic allure and timeless sophistication. Inspired by the iconic creations of Tom Ford, Chanel, and more, we bring you indulgence and elegance—at a more accessible price. Whether bold, or subtly floral, our fragrances make every moment feel luxurious.`;
  const words = fullText.split(" "); 

  const textVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        staggerChildren: 0.1,
        duration: 0.9,
      },
    },
  };

  const singleTextVariants = {
    hidden: { opacity: 0, x: 0, y: 0 },
    visible: ({ angle }) => ({
      opacity: 1,
      x: 150 * Math.cos(angle) - 35,
      y: 140 * Math.sin(angle) - 8,
      transition: { duration: 3.9 },
    }),
  };

  useEffect(() => {
    const rotationTimeline = gsap.timeline({ repeat: -1, yoyo: false });
    rotationTimeline.to(rotatingCircleRef.current, {
      rotation: 360,
      duration: 10,
      ease: "linear"
    });

    return () => rotationTimeline.kill();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(false);
          setTimeout(() => setIsVisible(true), 0);
        }
      },
      { threshold: 0.1 }
    );

    if (aboutRef.current) observer.observe(aboutRef.current);
    return () => aboutRef.current && observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible && currentIndex < words.length) {
      const timer = setTimeout(() => {
        setDisplayText((prevText) =>
          prevText ? `${prevText} ${words[currentIndex]}` : words[currentIndex]
        );
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, 200);
      return () => clearTimeout(timer);
    } else if (!isVisible) {
      setCurrentIndex(0);
      setDisplayText("");
    }
  }, [isVisible, currentIndex, words]);

  return (
    <div className="w-full flex flex-col-reverse md:flex-row text-white p-6 sm:p-10 md:p-22 gap-10 h-[860px] md:h-[500px]" ref={aboutRef}>
      
      {/* Left Side - Animation */}
      <div className="flex flex-1 mt-16 mb-20 md:mb-0 justify-center items-center relative ">
        <div
          ref={rotatingCircleRef}
          className="absolute rounded-full  border-2 border-[#d4af37] w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px] animate-spin-slow bg-gradient-to-br from-[#0057b7] via-[#91a1cb] to-[#2f20d7]"
        ></div>

        <div className="absolute rounded-full border-2 border-[#d4af37] w-[100px] h-[100px] sm:w-[100px] sm:h-[100px] md:w-[140px] md:h-[140px]"></div>

        <div className="relative z-10">
          <img src={red1} alt="Bottle" className="w-13 h-18 sm:w-13 sm:h-20 md:w-20 md:h-28" loading="lazy" />
        </div>

        {/* Circular Text Animation */}
        <motion.div
          className="absolute z-20 font-news ml-7 md:ml-1 text-xs md:text-sm text-[#f7f8f5]"
          variants={textVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
        >
          {["Elegant", "Woody", "Irresistible", "Musky", "Sensual", "Timeless", "Enchanting", "Romantic"].map((text, index) => (
            <motion.div
              key={index}
              custom={{ angle: (index * (2 * Math.PI)) / 8 }}
              className="circle-text-item absolute"
              variants={singleTextVariants}
            >
              {text}
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Right Side - Text */}
      <div className="mt-10 md:mt-28 flex-1 px-4 sm:px-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold font-playfair lg:text-right sm:text-center
        text-white">
          ABOUT US
        </h1>
        <p className="bg-[#1a1a1a] mt-10 hover:shadow-[0_0_20px_#d4af37]/80 p-4 sm:p-6 rounded-2xl font-suras text-sm sm:text-base md:text-lg leading-relaxed text-white/80 shadow-md border border-[#d4af37]/20">
          {displayText}
        </p>
      </div>
    </div>
  );
};

export default About;