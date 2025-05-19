import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiCode, FiCpu, FiDatabase, FiBook, FiUsers } from "react-icons/fi";
import { TbBrandReact, TbTool } from "react-icons/tb";

const skillsData = [
  {
    title: "Languages",
    icon: <FiCode />,
    skills: "C++, C, Java, Python, JavaScript, PHP",
    level: 95,
    color: "#3b82f6",
  },
  {
    title: "Frameworks",
    icon: <TbBrandReact />,
    skills: "Node.js, Express.js, Tailwind CSS, React.js",
    level: 90,
    color: "#2563eb",
  },
  {
    title: "Tools/Platforms",
    icon: <TbTool />,
    skills: "MySQL, MongoDB, Git, GitHub",
    level: 85,
    color: "#7c3aed",
  },
  {
    title: "Coursework",
    icon: <FiBook />,
    skills: "DSA, OS, DBMS, Networking, Probability & Stats",
    level: 80,
    color: "#db2777",
  },
  {
    title: "Soft Skills",
    icon: <FiUsers />,
    skills: "Problem-Solving, Teamwork, Leadership, Adaptability",
    level: 75,
    color: "#059669",
  },
];

const SkillsSection = () => {
  const { scrollYProgress } = useScroll();
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 20]);

  return (
    <section className="relative py-24 bg-gradient-to-br from-white to-gray-50 overflow-hidden">
      {/* Animated Background Elements */}
      <motion.div
        className="absolute inset-0 opacity-10"
        style={{
          background: `radial-gradient(circle at 50% 50%, 
            rgba(59,130,246,0.15) 0%, 
            rgba(99,102,241,0.1) 30%, 
            transparent 70%)`,
          rotate,
        }}
      />

      {/* Floating Gradient Blobs */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-64 h-64 rounded-full blur-3xl opacity-20"
          style={{
            background: `linear-gradient(45deg, 
              rgba(59,130,246,0.3) 0%, 
              rgba(99,102,241,0.2) 100%)`,
          }}
          initial={{
            scale: 0,
            x: Math.random() * 200 - 100,
            y: Math.random() * 200 - 100,
          }}
          animate={{
            scale: [0, 1, 0],
            x: [
              Math.random() * 200 - 100,
              Math.random() * 400 - 200,
              Math.random() * 200 - 100,
            ],
            y: [
              Math.random() * 200 - 100,
              Math.random() * 400 - 200,
              Math.random() * 200 - 100,
            ],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Section Heading */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 mb-16">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Technical Expertise
          </motion.h2>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            Mastering the tools and technologies that power modern solutions
          </p>
        </motion.div>
      </div>

      {/* Skills Grid */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillsData.map((skill, index) => (
          <motion.div
            key={index}
            className="group relative bg-white backdrop-blur-sm rounded-2xl p-6 border border-gray-200 hover:border-blue-200 transition-all shadow-sm hover:shadow-lg overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            {/* Hover Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-cyan-50/30 opacity-0 group-hover:opacity-100 transition-opacity" />

            {/* Skill Content */}
            <div className="relative z-10">
              {/* Icon & Progress */}
              <div className="flex flex-col items-center mb-6">
                <motion.div
                  className="p-3 rounded-xl mb-4 bg-gradient-to-br from-white to-gray-50 shadow-inner border border-gray-100"
                  whileHover={{ rotate: 15, scale: 1.1 }}
                >
                  <div className="text-3xl" style={{ color: skill.color }}>
                    {skill.icon}
                  </div>
                </motion.div>

                {/* Animated Progress */}
                <div className="relative w-32 h-32">
                  <svg className="w-full h-full" viewBox="0 0 100 100">
                    <path
                      d="M 50,50 m 0,-45 a 45,45 0 1 1 0,90 a 45,45 0 1 1 0,-90"
                      strokeWidth="8"
                      stroke="#e5e7eb"
                      fill="none"
                    />
                    <motion.path
                      d="M 50,50 m 0,-45 a 45,45 0 1 1 0,90 a 45,45 0 1 1 0,-90"
                      strokeWidth="8"
                      strokeLinecap="round"
                      stroke={skill.color}
                      fill="none"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: skill.level / 100 }}
                      transition={{ duration: 1.5, ease: "easeInOut" }}
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span
                      className="text-2xl font-bold"
                      style={{ color: skill.color }}
                    >
                      {skill.level}%
                    </span>
                  </div>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-center mb-4 text-gray-800">
                {skill.title}
              </h3>

              {/* Skills Tags */}
              <div className="flex flex-wrap justify-center gap-2">
                {skill.skills.split(", ").map((item, idx) => (
                  <motion.div
                    key={idx}
                    className="px-3 py-1.5 rounded-full bg-gray-100 border border-gray-200 text-gray-700 hover:bg-blue-50 hover:border-blue-200 hover:text-blue-700 transition-colors text-sm"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    {item}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-100/20 to-cyan-100/20 opacity-0 group-hover:opacity-50 transition-opacity -z-10" />
          </motion.div>
        ))}
      </div>

      {/* Animated Connector Lines */}
      <svg className="absolute inset-0 pointer-events-none">
        <defs>
          <linearGradient
            id="connectorGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
          >
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#06b6d4" />
          </linearGradient>
        </defs>
      </svg>
    </section>
  );
};

export default SkillsSection;
