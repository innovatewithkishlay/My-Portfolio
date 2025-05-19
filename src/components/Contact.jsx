import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  // Typing animation variants
  const typingVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.4,
        staggerChildren: 0.03,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 200 },
    },
  };

  const introText =
    "Don't be shy! Feel free to get in touch with me. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.";

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-gray-50 to-gray-100"
    >
      <div className="container mx-auto px-6 lg:px-8">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
          viewport={{ margin: "0px 0px -25% 0px" }}
        >
          Get In <span className="text-blue-600">Touch</span>
        </motion.h1>

        <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start">
          {/* Left Side - Text Section */}
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ margin: "0px 0px -25% 0px" }}
          >
            <div className="relative max-w-2xl border-l-4 border-blue-200 pl-6">
              <motion.div
                className="text-2xl md:text-3xl font-medium text-gray-800 leading-snug mb-6"
                variants={typingVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ margin: "0px 0px -25% 0px" }}
              >
                {introText.split(" ").map((word, wordIndex) => (
                  <span
                    key={wordIndex}
                    className="inline-block whitespace-nowrap mr-2"
                  >
                    {word.split("").map((char, charIndex) => (
                      <motion.span
                        key={charIndex}
                        className="inline-block"
                        variants={letterVariants}
                      >
                        {char}
                      </motion.span>
                    ))}
                    {/* Add non-breaking space after each word */}
                    {wordIndex !== introText.split(" ").length - 1 && "\u00A0"}
                  </span>
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side - Form Section */}
          <motion.div
            className="lg:w-1/2 w-full max-w-xl bg-white p-8 rounded-2xl shadow-xl"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ margin: "0px 0px -25% 0px" }}
          >
            <form
              action="https://formspree.io/f/meogdozn"
              method="POST"
              className="space-y-6"
              acceptCharset="UTF-8"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <input
                    type="text"
                    name="First Name"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="First Name"
                    required
                  />
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <input
                    type="text"
                    name="Last Name"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Last Name"
                    required
                  />
                </motion.div>
              </div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <input
                  type="email"
                  name="Email"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="Your Email"
                  required
                />
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <input
                  type="text"
                  name="Subject"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="Subject"
                  required
                />
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <textarea
                  name="Message"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="Your Message"
                  rows="4"
                  required
                />
              </motion.div>

              <motion.button
                type="submit"
                className="w-full py-3.5 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
