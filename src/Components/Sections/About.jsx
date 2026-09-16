import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import img from "/public/img2.png"
// ── Animation variants ──
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.85, x: -40 },
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: { duration: 0.9, ease: "easeOut" },
  },
};




const About = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden">
      {/* Background blobs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ x: [0, 80, 0], y: [0, -60, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-indigo-600/15 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -80, 0], y: [0, 60, 0] }}
          transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-0 -right-40 w-[600px] h-[600px] bg-purple-600/15 rounded-full blur-3xl"
        />
      </div>

      {/* ── Page Header ── */}
      <section className="relative z-10 px-6 md:px-12 pt-16 md:pt-24 pb-12 max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          <motion.p
            variants={itemVariants}
            className="text-sm text-indigo-400 font-medium mb-3 tracking-widest uppercase"
          >
            Get to know me
          </motion.p>
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-6"
          >
            About{" "}
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Me
            </span>
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-lg text-slate-400 leading-relaxed"
          >
            A dedicated BCA student specializing in Computer Applications,
            graduating in 2026 from MMH College, Noida. Motivated fresher
            eager to leverage foundational knowledge and a keen interest in
            Frontend Development to contribute to innovative projects.
          </motion.p>
        </motion.div>
      </section>

      {/* ── Bio + Photo Section ── */}
      <section className="relative z-10 px-6 md:px-12 py-16 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Photo / Visual */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="relative flex justify-center order-2 md:order-1"
          >
            <div className="relative w-72 h-72 md:w-80 md:h-80">
              {/* Rings */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border border-slate-800"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-4 rounded-full border border-slate-800"
              />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute inset-8 rounded-full border border-indigo-500/20"
              />

              {/* Glow */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{ scale: [1, 1.15, 1] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="w-32 h-32 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 blur-3xl opacity-50"
                />
              </div>

              {/* Profile image */}
              <div className="absolute inset-10 flex items-center justify-center">
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="relative w-full h-full rounded-full overflow-hidden border-4  border-slate-800 bg-gradient-to-br from-slate-800 to-slate-900"
                >
                  <img
                    src={img}
                    alt="Abu Bakar Ansari"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Bio Text */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="order-1 md:order-2"
          >
            <motion.h2
              variants={itemVariants}
              className="text-3xl md:text-4xl font-bold tracking-tight mb-6"
            >
              Hello, I'm{" "}
              <span className="text-indigo-400">Abu Bakar Ansari</span> 👋
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-slate-400 leading-relaxed mb-4"
            >
              I'm a passionate front-end developer currently completing my BCA
              from Chaudhary Charan Singh University. My journey into web
              development started with curiosity about how websites work — and
              turned into a deep love for building clean, interactive interfaces
              that people enjoy using.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-slate-400 leading-relaxed mb-8"
            >
              I specialize in React.js and modern CSS frameworks like Tailwind,
              and I'm always looking to grow — whether it's exploring motion
              design, learning new patterns, or solving real-world problems
              through code.
            </motion.p>

            {/* Quick facts */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 gap-4 mb-8"
            >
              {[
                { label: "Location", value: "Noida, India" },
                { label: "Degree", value: "BCA · 2026" },
                { label: "Focus", value: "Frontend Dev" },
                { label: "Status", value: "Open to work" },
              ].map((fact) => (
                <div
                  key={fact.label}
                  className="rounded-xl border border-slate-800 bg-slate-900/50 backdrop-blur p-4"
                >
                  <p className="text-xs text-slate-500 mb-1">{fact.label}</p>
                  <p className="text-sm font-medium">{fact.value}</p>
                </div>
              ))}
            </motion.div>

            <motion.div variants={itemVariants}>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 px-7 py-3.5 text-sm font-semibold shadow-lg shadow-indigo-500/25 transition-transform hover:scale-105"
              >
                Let's work together
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

    
   
    </div>
  );
};

export default About;