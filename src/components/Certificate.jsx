import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCertificate, FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Certificates = () => {
  const certificates = [];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(null);

  const handleNext = () => {
    setDirection("right");
    setCurrentIndex((prev) =>
      prev < certificates.length - 3 ? prev + 1 : prev
    );
  };

  const handlePrev = () => {
    setDirection("left");
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const cardVariants = {
    hidden: (direction) => ({
      x: direction === "right" ? "100%" : "-100%",
      opacity: 0,
      scale: 0.8,
    }),
    visible: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4 },
    },
    exit: (direction) => ({
      x: direction === "right" ? "-100%" : "100%",
      opacity: 0,
      scale: 0.8,
      transition: { duration: 0.4 },
    }),
  };

  return (
    <section
      id="certificates"
      className="py-20 bg-gradient-to-br from-gray-50 to-blue-50"
    >
      {/* Title Section (same as before) */}

      <div className="container mx-auto px-6 relative">
        <div className="relative overflow-hidden">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              className="grid grid-cols-3 gap-8"
              custom={direction}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {certificates
                .slice(currentIndex, currentIndex + 3)
                .map((cert, index) => (
                  <motion.div
                    key={cert.title}
                    className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 relative"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -50 }}
                  >
                    {/* Certificate Card Content (same as before) */}
                  </motion.div>
                ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-4 rounded-full shadow-lg hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
        >
          <FaArrowLeft className="text-2xl text-gray-700" />
        </button>
        <button
          onClick={handleNext}
          disabled={currentIndex >= certificates.length - 3}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-4 rounded-full shadow-lg hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
        >
          <FaArrowRight className="text-2xl text-gray-700" />
        </button>
      </div>
    </section>
  );
};

export default Certificates;
