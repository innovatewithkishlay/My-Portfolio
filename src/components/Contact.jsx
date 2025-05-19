import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, X, Send, RefreshCw } from "react-feather";

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
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  };

  const SuccessMessage = () => (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      className="w-full h-full flex flex-col items-center justify-center text-center p-8"
    >
      <motion.div
        initial={{ rotate: 0, scale: 0 }}
        animate={{ rotate: 360, scale: 1 }}
        transition={{ type: "spring", stiffness: 200 }}
        className="bg-gradient-to-r from-blue-600 to-green-500 p-6 rounded-full mb-8"
      >
        <Check size={48} className="text-white" />
      </motion.div>
      <h3 className="text-3xl font-bold text-gray-800 mb-4">
        Message Delivered!
      </h3>
      <p className="text-gray-600 mb-8 max-w-md mx-auto">
        Thank you for reaching out! I'll respond to your message within 24
        hours.
      </p>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center gap-2 px-6 py-3 bg-gray-100 rounded-lg text-gray-600 hover:bg-gray-200 transition-colors"
        onClick={() => setStatus("idle")}
      >
        <RefreshCw size={20} />
        Send Another Message
      </motion.button>
    </motion.div>
  );

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Let's{" "}
          <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
            Connect
          </span>
        </h1>

        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Left Section */}
          <div className="lg:w-1/2 relative pl-8 border-l-4 border-gradient-to-b from-blue-400 to-purple-400">
            <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-500 bg-clip-text text-transparent">
              Let's Create Something Remarkable
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Your ideas deserve exceptional execution. Whether you have a
              project in mind or need strategic guidance, let's start a
              conversation that moves the needle.
            </p>
          </div>

          {/* Right Section */}
          <div className="lg:w-1/2 w-full max-w-xl bg-white rounded-2xl shadow-2xl border border-gray-100 min-h-[560px]">
            {status === "success" ? (
              <SuccessMessage />
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="p-8"
              >
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <motion.div whileHover={{ scale: 1.02 }}>
                      <input
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder-gray-400"
                        placeholder="First Name"
                        required
                      />
                    </motion.div>

                    <motion.div whileHover={{ scale: 1.02 }}>
                      <input
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder-gray-400"
                        placeholder="Last Name"
                        required
                      />
                    </motion.div>
                  </div>

                  <motion.div whileHover={{ scale: 1.02 }}>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder-gray-400"
                      placeholder="Email Address"
                      required
                    />
                  </motion.div>

                  <motion.div whileHover={{ scale: 1.02 }}>
                    <input
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder-gray-400"
                      placeholder="Subject"
                      required
                    />
                  </motion.div>

                  <motion.div whileHover={{ scale: 1.02 }}>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder-gray-400"
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
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity }}
                          className="w-5 h-5 border-2 border-white/50 rounded-full border-t-transparent"
                        />
                      ) : status === "error" ? (
                        <X size={20} />
                      ) : (
                        <Send size={20} />
                      )}
                      {status === "sending"
                        ? "Sending..."
                        : status === "error"
                        ? "Try Again"
                        : "Send Message"}
                    </div>
                  </motion.button>
                </form>

                <AnimatePresence>
                  {status === "error" && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="mt-4 p-4 bg-red-50 rounded-xl border border-red-100 flex items-center gap-3"
                    >
                      <div className="bg-red-100 p-2 rounded-lg">
                        <X className="text-red-600" size={20} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-red-800">Error</h4>
                        <p className="text-sm text-red-600">
                          Failed to send message. Please try again.
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
