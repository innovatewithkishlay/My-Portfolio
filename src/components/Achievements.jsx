import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaCrown,
  FaMedal,
  FaLaptopCode,
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa";

const Achievements = () => {
  const achievements = [
    {
      title: "Hack-A-Throne 2024 by AIESEC",
      description:
        "Reached the final round of Hack-A-Throne 2024, organized by AIESEC.",
      tags: ["Hackathon", "AIESEC", "Finalist"],
      link: "#",
      icon: <FaCrown className="text-4xl" />,
      color: "from-yellow-400/20 to-yellow-600/10",
      button: "bg-yellow-500 hover:bg-yellow-600",
    },
    {
      title: "ABHIBYAKTI 2K20 – Essay Competition",
      description:
        "Runner-up (2nd Position) in an essay writing competition at IIMT Group of Colleges.",
      tags: ["Essay Writing", "Creativity", "Competition"],
      link: "#",
      icon: <FaMedal className="text-4xl" />,
      color: "from-red-400/20 to-red-600/10",
      button: "bg-red-500 hover:bg-red-600",
    },
    {
      title: "Code-A-Haunt Hackathon – LPU",
      description:
        "Secured 5th rank in the Code-A-Haunt Hackathon held at Lovely Professional University.",
      tags: ["Hackathon", "Coding", "Problem Solving"],
      link: "#",
      icon: <FaLaptopCode className="text-4xl" />,
      color: "from-blue-400/20 to-blue-600/10",
      button: "bg-blue-500 hover:bg-blue-600",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState("right");

  const handleNext = () => {
    setDirection("right");
    setCurrentIndex((prev) =>
      prev < achievements.length - 1 ? prev + 1 : prev
    );
  };

  const handlePrev = () => {
    setDirection("left");
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const cardVariants = {
    enter: (direction) => ({
      x: direction === "right" ? "100%" : "-100%",
      opacity: 0,
      scale: 0.8,
    }),
    center: {
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

  const getTagColor = (tag) => {
    switch (tag) {
      case "Hackathon":
        return "bg-yellow-100 text-yellow-800";
      case "Essay Writing":
        return "bg-red-100 text-red-800";
      case "Coding":
        return "bg-blue-100 text-blue-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <section
      id="achievements"
      className="py-20 bg-gradient-to-br from-gray-50 to-blue-50"
    >
      {/* Title Section (keep your existing title code) */}
      <div className="relative z-10 container mx-auto px-6 mb-16">
        <div className="max-w-4xl ml-auto">
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-right mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ margin: "0px 0px -25% 0px" }}
          >
            My{" "}
            <span className="bg-gradient-to-r from-yellow-500 via-red-500 to-blue-500 bg-clip-text text-transparent">
              Achievements
            </span>
          </motion.h1>

          <motion.div
            className="h-1 bg-gradient-to-l from-yellow-500 to-transparent ml-auto max-w-xs"
            variants={{ hidden: { width: 0 }, visible: { width: "100%" } }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1.5, ease: "easeInOut" }}
            viewport={{ margin: "0px 0px -25% 0px" }}
          />
        </div>
      </div>

      <div className="container mx-auto px-6 relative">
        <div className="relative overflow-hidden min-h-[500px]">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 absolute w-full"
              custom={direction}
              variants={cardVariants}
              initial="enter"
              animate="center"
              exit="exit"
            >
              {achievements
                .slice(currentIndex, currentIndex + 3)
                .map((achievement, index) => (
                  <motion.div
                    key={achievement.title}
                    className={`bg-gradient-to-br ${achievement.color} rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 group relative overflow-hidden`}
                  >
                    <div className="mb-6 flex justify-center">
                      <div className="p-4 bg-white/90 rounded-full shadow-lg">
                        <motion.div
                          className={achievement.button
                            .replace("bg", "text")
                            .replace(" hover:bg", "")}
                          whileHover={{ scale: 1.1 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          {achievement.icon}
                        </motion.div>
                      </div>
                    </div>

                    <h2 className="text-xl font-bold text-gray-800 mb-4">
                      {achievement.title}
                    </h2>

                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {achievement.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {achievement.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className={`px-3 py-1 rounded-full text-sm font-medium ${getTagColor(
                            tag
                          )}`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <motion.a
                      href={achievement.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center justify-center w-full py-3 font-medium text-white ${achievement.button} rounded-lg transition-all`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      View Details
                    </motion.a>
                  </motion.div>
                ))}
            </motion.div>
          </AnimatePresence>
        </div>

        <button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-4 rounded-full shadow-lg hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
        >
          <FaArrowLeft className="text-2xl text-gray-700" />
        </button>
        <button
          onClick={handleNext}
          disabled={currentIndex >= achievements.length - 3}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-4 rounded-full shadow-lg hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
        >
          <FaArrowRight className="text-2xl text-gray-700" />
        </button>
      </div>
    </section>
  );
};

export default Achievements;
