import React from "react";
import { motion } from "framer-motion";
import { FaCertificate } from "react-icons/fa";

const Certificates = () => {
  const certificates = [
    {
      title: "NPTEL: Introduction to Internet of Things",
      description:
        "Successfully completed the NPTEL course on IoT, covering IoT architecture, protocols, applications, and hands-on projects.",
      tags: ["NPTEL", "Completion", "IoT"],
      link: "https://drive.google.com/file/d/1rnXc6F6eRMci-RmdO632mVtKRLFsRHRz/view?usp=sharing",
      iconColor: "text-cyan-500",
      buttonColor: "bg-cyan-600 hover:bg-cyan-700",
    },
    {
      title: "Approximation Algorithms and Linear Programming",
      description:
        "Successfully completed this course, gaining knowledge of algorithm optimization techniques and linear programming fundamentals.",
      tags: ["Completion", "Course", "Achievement"],
      link: "https://drive.google.com/file/d/1zuilmW466uumvlN-vT1jElBmF1lJRac-/view?usp=drivesdk",
      iconColor: "text-emerald-500",
      buttonColor: "bg-emerald-600 hover:bg-emerald-700",
    },
    {
      title: "Generative AI with Large Language Models",
      description:
        "Completed an advanced AI course, covering LLM architectures, prompt engineering, and practical implementation scenarios.",
      tags: ["Achievement", "Excellence", "Recognition"],
      link: "https://drive.google.com/file/d/1zx36opz-EaGAIopejuuWR7Mxt86F_IpL/view?usp=drivesdk",
      iconColor: "text-fuchsia-500",
      buttonColor: "bg-fuchsia-600 hover:bg-fuchsia-700",
    },
    {
      title: "The World of Computer Networking",
      description:
        "Completed an in-depth course on networking concepts including protocols, OSI layers, and real-world applications.",
      tags: ["Udemy", "Online Learning", "Skill Development"],
      link: "https://drive.google.com/file/d/1MpXLSjROLmMNxphvjKGf1mVtX6RmDzVW/view?usp=drivesdk",
      iconColor: "text-indigo-500",
      buttonColor: "bg-indigo-600 hover:bg-indigo-700",
    },
  ];

  const getTagStyle = (tag) => {
    switch (tag) {
      case "Completion":
        return "bg-green-100 text-green-800 border border-green-200";
      case "Course":
        return "bg-blue-100 text-blue-800 border border-blue-200";
      case "Achievement":
        return "bg-purple-100 text-purple-800 border border-purple-200";
      default:
        return "bg-gray-100 text-gray-800 border border-gray-200";
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="certificates"
      className="py-20 bg-gradient-to-br from-gray-50 to-blue-50"
    >
      {/* Title with Left-Aligned Text and Animated Line */}
      <div className="relative z-10 container mx-auto px-6 mb-16">
        <div className="max-w-4xl">
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-left mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ margin: "0px 0px -25% 0px" }}
          >
            My{" "}
            <span className="bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
              Certificates
            </span>
          </motion.h1>

          <motion.div
            className="h-1 bg-gradient-to-r from-green-600 to-transparent max-w-xs"
            variants={{
              hidden: { width: 0 },
              visible: { width: "100%" },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1.5, ease: "easeInOut" }}
            viewport={{ margin: "0px 0px -25% 0px" }}
          />
        </div>
      </div>

      {/* Certificates Grid */}
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {certificates.map((cert, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 group relative overflow-hidden"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ margin: "0px 0px -25% 0px" }}
          >
            <motion.div
              className="mb-6 flex justify-center"
              variants={itemVariants}
            >
              <div className="p-4 bg-opacity-10 rounded-2xl shadow-inner">
                <FaCertificate
                  className={`text-5xl ${cert.iconColor}`}
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
              </div>
            </motion.div>

            <motion.h2
              className="text-xl font-bold text-gray-800 mb-4"
              variants={itemVariants}
            >
              {cert.title}
            </motion.h2>

            <motion.p
              className="text-gray-600 mb-6 leading-relaxed"
              variants={itemVariants}
            >
              {cert.description}
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-2 mb-6"
              variants={itemVariants}
            >
              {cert.tags.map((tag, idx) => (
                <motion.span
                  key={idx}
                  className={`px-3 py-1 rounded-full text-sm font-medium ${getTagStyle(
                    tag
                  )}`}
                  variants={itemVariants}
                >
                  {tag}
                </motion.span>
              ))}
            </motion.div>

            <motion.a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center justify-center w-full py-3 font-medium text-white ${cert.buttonColor} rounded-lg transition-all`}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Certificate
            </motion.a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Certificates;
