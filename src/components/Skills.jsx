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
    color: "#60a5fa",
  },
  {
    title: "Frameworks",
    icon: <TbBrandReact />,
    skills: "Node.js, Express.js, Tailwind CSS, React.js",
    level: 90,
    color: "#38bdf8",
  },
  {
    title: "Tools/Platforms",
    icon: <TbTool />,
    skills: "MySQL, MongoDB, Git, GitHub",
    level: 85,
    color: "#818cf8",
  },
  {
    title: "Coursework",
    icon: <FiBook />,
    skills: "DSA, OS, DBMS, Networking, Probability & Stats",
    level: 80,
    color: "#f472b6",
  },
  {
    title: "Soft Skills",
    icon: <FiUsers />,
    skills: "Problem-Solving, Teamwork, Leadership, Adaptability",
    level: 75,
    color: "#34d399",
  },
];

const SkillsSection = () => {
  const { scrollYProgress } = useScroll();
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  return (
    <section className="relative min-h-screen py-24 bg-gradient-to-br from-slate-900 to-slate-800 overflow-hidden">
      {/* Dynamic Gradient Background */}
      <motion.div
        className="absolute inset-0 opacity-20"
        style={{
          background: `radial-gradient(circle at 50% 50%, 
            rgba(96,165,250,0.3) 0%, 
            rgba(56,189,248,0.2) 30%, 
            rgba(129,140,248,0.1) 60%, 
            transparent 100%)`,
          rotate,
        }}
      />

      {/* Floating Particles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-blue-400/20 rounded-full"
          initial={{
            scale: 0,
            x: Math.random() * 100 - 50,
            y: Math.random() * 100 - 50,
          }}
          animate={{
            scale: [0, 1, 0],
            x: [
              Math.random() * 100 - 50,
              Math.random() * 200 - 100,
              Math.random() * 100 - 50,
            ],
            y: [
              Math.random() * 100 - 50,
              Math.random() * 200 - 100,
              Math.random() * 100 - 50,
            ],
          }}
          transition={{
            duration: Math.random() * 4 + 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Section Heading */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 mb-20">
        <motion.div
          className="max-w-2xl mx-auto text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "0px 0px -25% 0px" }}
        >
          <motion.span
            className="text-sm font-semibold tracking-widest text-blue-400 uppercase"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Technical Expertise
          </motion.span>
          <motion.h2
            className="text-5xl md:text-6xl font-bold mt-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Code & Craft
          </motion.h2>
        </motion.div>
      </div>

      {/* Skills Grid */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillsData.map((skill, index) => (
          <motion.div
            key={index}
            className="group relative bg-slate-800/50 backdrop-blur-xl rounded-3xl p-8 border border-slate-700/50 hover:border-slate-600 transition-all shadow-2xl hover:shadow-3xl overflow-hidden"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true, margin: "0px 0px -25% 0px" }}
          >
            {/* Hover Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 to-cyan-400/10 opacity-0 group-hover:opacity-100 transition-opacity" />

            {/* Skill Content */}
            <div className="relative z-10">
              {/* Icon & Progress */}
              <div className="flex flex-col items-center mb-8">
                <motion.div
                  className="p-4 rounded-2xl mb-4"
                  style={{ background: `${skill.color}20` }}
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
                      stroke={skill.color + "20"}
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
              <h3 className="text-xl font-bold text-center mb-6 text-slate-100">
                {skill.title}
              </h3>

              {/* Skills Tags */}
              <div className="flex flex-wrap justify-center gap-3">
                {skill.skills.split(", ").map((item, idx) => (
                  <motion.div
                    key={idx}
                    className="px-4 py-2 rounded-full bg-slate-700/50 border border-slate-600 backdrop-blur-sm text-slate-300 hover:bg-slate-600/50 transition-all cursor-default text-sm font-medium"
                    whileHover={{
                      scale: 1.05,
                      background: `${skill.color}20`,
                      borderColor: skill.color,
                      color: skill.color,
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    {item}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-400/10 rounded-full blur-xl" />
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-cyan-400/10 rounded-full blur-xl" />
          </motion.div>
        ))}
      </div>

      {/* Animated Connector Lines */}
      <svg className="absolute inset-0 pointer-events-none">
        {skillsData.map((_, i) => (
          <motion.path
            key={i}
            stroke="url(#gradient)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 1.5, delay: i * 0.2 }}
          />
        ))}
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#60a5fa" />
            <stop offset="100%" stopColor="#38bdf8" />
          </linearGradient>
        </defs>
      </svg>
    </section>
  );
};

export default SkillsSection;
