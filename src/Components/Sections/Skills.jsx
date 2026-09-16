import React from 'react';
import { motion } from 'framer-motion';
import { 
  SiHtml5, 
  SiJavascript, 
  SiReact, 
  SiTailwindcss, 
  SiBootstrap, 
  SiGithub, 
  SiFigma,
  SiNpm
} from 'react-icons/si';

// --- Custom CSS3 Icon (Official Shield Colors) ---
const Css3Icon = () => (
  <svg 
    viewBox="0 0 24 24" 
    className="w-6 h-6" 
    fill="currentColor"
  >
    <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"/>
  </svg>
);

// --- Data ---
const skills = [
  { name: "HTML5", level: 95, icon: <SiHtml5 />, color: "text-orange-500", bg: "bg-orange-500" },
  // Replaced SiCss3 with the custom Css3Icon
  { name: "CSS3", level: 90, icon: <Css3Icon />, color: "text-blue-500", bg: "bg-blue-500" },
  { name: "JavaScript", level: 85, icon: <SiJavascript />, color: "text-yellow-400", bg: "bg-yellow-400" },
  { name: "React.js", level: 88, icon: <SiReact />, color: "text-cyan-400", bg: "bg-cyan-400" },
  { name: "Tailwind CSS", level: 92, icon: <SiTailwindcss />, color: "text-teal-400", bg: "bg-teal-400" },
  { name: "Bootstrap", level: 80, icon: <SiBootstrap />, color: "text-purple-500", bg: "bg-purple-500" },
  { name: "Git & GitHub", level: 85, icon: <SiGithub />, color: "text-white", bg: "bg-white" },
  { name: "Figma", level: 75, icon: <SiFigma />, color: "text-pink-500", bg: "bg-pink-500" },
  { name: "NPM", level: 80, icon: <SiNpm />, color: "text-red-500", bg: "bg-red-500" },
];

// --- Animation Variants ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 100, damping: 15 },
  },
};

const barVariants = {
  hidden: { width: 0 },
  visible: (level) => ({
    width: `${level}%`,
    transition: { duration: 1.2, ease: "easeOut", delay: 0.2 },
  }),
};

const Skills = () => {
  return (
    <section className="py-24 px-4 bg-[#0B1120] min-h-screen relative overflow-hidden">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-purple-900/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={cardVariants}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">Skills</span>
          </motion.h2>
          <motion.p 
            variants={cardVariants}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            A comprehensive overview of the technologies and tools I use to bring ideas to life.
          </motion.p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              variants={cardVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="group relative p-6 rounded-2xl bg-[#111827] border border-gray-800 hover:border-gray-700 transition-all duration-300 shadow-lg hover:shadow-purple-500/10"
            >
              {/* Top Section: Icon & Name */}
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-12 h-12 rounded-xl bg-gray-800 flex items-center justify-center text-2xl ${skill.color} group-hover:scale-110 transition-transform duration-300`}>
                  {skill.icon}
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all duration-300">
                  {skill.name}
                </h3>
              </div>

              {/* Bottom Section: Progress Bar */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm font-medium text-gray-400">
                  <span>Proficiency</span>
                  <span className="text-white">{skill.level}%</span>
                </div>
                <div className="w-full h-2.5 bg-gray-800 rounded-full overflow-hidden">
                  <motion.div
                    custom={skill.level}
                    variants={barVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className={`h-full rounded-full ${skill.bg} shadow-[0_0_10px_rgba(255,255,255,0.2)]`}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Footer Note */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-gray-500 text-sm">
            Always learning and exploring new technologies.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;