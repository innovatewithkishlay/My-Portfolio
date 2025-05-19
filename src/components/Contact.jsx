import React, { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [status, setStatus] = useState("idle"); // idle | success | error

  const handleSubmit = async (e) => {
    e.preventDefault(); // prevent default form submission

    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/meogdozn", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setStatus("error");
    }
  };

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
          >
            <div className="relative max-w-2xl border-l-4 border-blue-200 pl-6">
              <p className="text-2xl md:text-3xl font-medium text-gray-800 leading-snug mb-6">
                Don't be shy! Feel free to get in touch with me. I'm always open
                to discussing new projects, creative ideas, or opportunities to
                be part of your vision.
              </p>
            </div>
          </motion.div>

          {/* Right Side - Form Section */}
          <motion.div
            className="lg:w-1/2 w-full max-w-xl bg-white p-8 rounded-2xl shadow-xl"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {status === "success" ? (
              <div className="text-green-600 font-medium text-lg text-center">
                ✅ Your message has been sent. We’ll contact you soon!
              </div>
            ) : status === "error" ? (
              <div className="text-red-600 font-medium text-lg text-center">
                ❌ Something went wrong. Please try again later.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="First Name"
                    placeholder="First Name"
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg"
                  />
                  <input
                    type="text"
                    name="Last Name"
                    placeholder="Last Name"
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg"
                  />
                </div>
                <input
                  type="email"
                  name="Email"
                  placeholder="Your Email"
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg"
                />
                <input
                  type="text"
                  name="Subject"
                  placeholder="Subject"
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg"
                />
                <textarea
                  name="Message"
                  placeholder="Your Message"
                  rows="4"
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg"
                />
                <motion.button
                  type="submit"
                  className="w-full py-3.5 bg-blue-600 text-white font-semibold rounded-lg"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Send Message
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
