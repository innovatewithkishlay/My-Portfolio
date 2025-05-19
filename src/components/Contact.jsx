import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, X, Send } from "react-feather";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("https://formspree.io/f/meogdozn", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setTimeout(() => setStatus("idle"), 3000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 3000);
      }
    } catch (err) {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  const inputVariants = {
    focus: { scale: 1.02, borderColor: "#3b82f6" },
    hover: { scale: 1.02 },
  };

  const SuccessOverlay = () => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="absolute inset-0 bg-white/90 backdrop-blur-sm flex items-center justify-center rounded-2xl"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="text-center space-y-4"
      >
        <motion.div
          className="mx-auto bg-gradient-to-r from-blue-600 to-green-500 p-4 rounded-full text-white"
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        >
          <Check size={48} />
        </motion.div>
        <h3 className="text-2xl font-bold text-gray-800">Message Sent!</h3>
        <p className="text-gray-600">We'll get back to you soon</p>
      </motion.div>
    </motion.div>
  );

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          Let's{" "}
          <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
            Connect
          </span>
        </motion.h1>

        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Left Section */}
          <motion.div
            className="lg:w-1/2 relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="sticky top-24 pl-8 border-l-4 border-gradient-to-b from-blue-400 to-purple-400">
              <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-500 bg-clip-text text-transparent">
                Let's Build Something Amazing
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Whether you have a project in mind, need strategic guidance, or
                just want to explore possibilities – let's start a conversation
                that matters. Your vision deserves exceptional execution.
              </p>

              <motion.div
                className="absolute -left-1 top-0 h-full w-1 bg-gradient-to-b from-blue-400 to-purple-400"
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                transition={{ duration: 1, ease: "circOut" }}
              />
            </div>
          </motion.div>

          {/* Right Section */}
          <motion.div
            className="lg:w-1/2 w-full max-w-xl bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-2xl border border-white/20 relative"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6 relative">
              {status === "success" && <SuccessOverlay />}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <motion.div whileHover="hover" whileFocus="focus">
                  <input
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-gray-200/20 rounded-xl focus:ring-0 focus:border-blue-500 transition-all placeholder-gray-400"
                    placeholder="First Name"
                    required
                  />
                </motion.div>

                <motion.div whileHover="hover" whileFocus="focus">
                  <input
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-gray-200/20 rounded-xl focus:ring-0 focus:border-blue-500 transition-all placeholder-gray-400"
                    placeholder="Last Name"
                    required
                  />
                </motion.div>
              </div>

              <motion.div whileHover="hover" whileFocus="focus">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/5 border border-gray-200/20 rounded-xl focus:ring-0 focus:border-blue-500 transition-all placeholder-gray-400"
                  placeholder="Email Address"
                  required
                />
              </motion.div>

              <motion.div whileHover="hover" whileFocus="focus">
                <input
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/5 border border-gray-200/20 rounded-xl focus:ring-0 focus:border-blue-500 transition-all placeholder-gray-400"
                  placeholder="Subject"
                  required
                />
              </motion.div>

              <motion.div whileHover="hover" whileFocus="focus">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/5 border border-gray-200/20 rounded-xl focus:ring-0 focus:border-blue-500 transition-all placeholder-gray-400"
                  placeholder="Your Message"
                  rows="5"
                  required
                />
              </motion.div>

              <motion.button
                type="submit"
                disabled={status !== "idle"}
                className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all relative overflow-hidden"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="relative z-10 flex items-center justify-center gap-2">
                  {status === "sending" ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity }}
                        className="w-5 h-5 border-2 border-white/50 rounded-full border-t-transparent"
                      />
                      Sending...
                    </>
                  ) : status === "success" ? (
                    <>
                      <Check size={20} />
                      Message Sent
                    </>
                  ) : status === "error" ? (
                    <>
                      <X size={20} />
                      Try Again
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Send Message
                    </>
                  )}
                </div>
                <motion.div
                  className="absolute inset-0 bg-white/10 backdrop-blur-sm"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: status !== "idle" ? 1 : 0 }}
                />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {status === "error" && (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            className="fixed bottom-6 right-6 bg-red-50 p-4 rounded-xl border border-red-100 flex items-center gap-3 shadow-lg"
          >
            <div className="bg-red-100 p-2 rounded-lg">
              <X className="text-red-600" size={20} />
            </div>
            <div>
              <h4 className="font-semibold text-red-800">Error</h4>
              <p className="text-sm text-red-600">Failed to send message</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Contact;
