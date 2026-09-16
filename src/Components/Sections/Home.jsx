import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import img1 from "/public/img.jpeg";
import { ArrowDownToDot, ArrowRight, Sparkles } from "lucide-react";
import About from "./About";
import Projects from "./Project";
import Service from "./Service";
import Skills from "./Skills";
import Contact from "./Contact";

// ── Animation variants ──
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.15,
    },
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
  hidden: { opacity: 0, scale: 0.85, x: 40 },
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: { duration: 0.9, ease: "easeOut" },
  },
};

// ── Scroll-triggered section variants ──
const sectionUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const sectionLeft = {
  hidden: { opacity: 0, x: -80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const sectionRight = {
  hidden: { opacity: 0, x: 80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const sectionScale = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
  },
};

// ── Reusable animated section wrapper ──
const AnimatedSection = ({ children, variant = "up", className = "" }) => {
  const variantsMap = {
    up: sectionUp,
    left: sectionLeft,
    right: sectionRight,
    scale: sectionScale,
  };

  return (
    <motion.div
      variants={variantsMap[variant]}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// ── Data ──
const STATS = [
  { value: "2026", label: "BCA Graduate" },
  { value: "71%", label: "Graduation Score" },
  { value: "5+", label: "Core Skills" },
];

const TECH_BADGES = [
  {
    name: "HTML",
    icon: "🌐",
    category: "Markup",
    position: "top-4 -left-6 md:-left-7",
    floatDirection: -15,
  },
  {
    name: "CSS",
    icon: "🎨",
    category: "Styling",
    position: "bottom-1/3 -left-6 md:-left-16",
    floatDirection: 15,
  },
  {
    name: "JavaScript",
    icon: "⚡",
    category: "Language",
    position: "bottom-2/3 -right-6 md:-right-16",
    floatDirection: 15,
  },
  {
    name: "React.js",
    icon: "⚛️",
    category: "Library",
    position: "bottom-8 -right-6 md:-right-16",
    floatDirection: 10,
  },
  {
    name: "Tailwind CSS",
    icon: "🌊",
    category: "Framework",
    position: "-bottom-6 left-1/2 -translate-x-1/2",
    floatDirection: -10,
  },
];

const Home = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden">
      {/* ── Animated background blobs ── */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ x: [0, 100, 0], y: [0, -50, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -100, 0], y: [0, 80, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 -right-40 w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ x: [0, 60, 0], y: [0, -80, 0] }}
          transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-0 left-1/3 w-[400px] h-[400px] bg-cyan-600/10 rounded-full blur-3xl"
        />
      </div>

      {/* ── Hero Section ── */}
      <section className="relative z-10 px-6 md:px-15 pt-16 md:pt-24 pb-20 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-20 items-center pt-20 sm:pt-0">
          {/* Image / Visual */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            className="relative flex justify-center items-center order-1 md:order-2"
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border border-slate-800"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-6 rounded-full border border-slate-800"
              />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute inset-15 rounded-full border border-indigo-500/20"
              />

              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{ scale: [1, 1.15, 1] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="w-40 h-40 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 blur-3xl opacity-50"
                />
              </div>

              <div className="absolute inset-8 md:inset-10 flex items-center justify-center">
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="relative w-full h-full rounded-full overflow-hidden border-4 border-slate-800 bg-gradient-to-br from-slate-800 to-slate-900"
                >
                  <img
                    src={img1}
                    alt="Abu Bakar Ansari"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>

              {[0, 150, 240, 340, 560].map((angle, i) => (
                <motion.div
                  key={i}
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 18 + i * 5,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute inset-0"
                >
                  <div
                    className="absolute w-3 h-3 rounded-full bg-indigo-400 shadow-lg shadow-indigo-500/50"
                    style={{
                      top: "50%",
                      left: "50%",
                      transform: `rotate(${angle}deg) translateY(-50%) translateX(165px)`,
                    }}
                  />
                </motion.div>
              ))}

              {TECH_BADGES.map((badge, i) => (
                <motion.div
                  key={badge.name}
                  animate={{ y: [0, badge.floatDirection, 0] }}
                  transition={{
                    duration: 4 + i * 0.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className={`absolute ${badge.position} rounded-xl border border-slate-800 bg-slate-900/90 backdrop-blur px-3 py-1.5 md:px-4 md:py-2 shadow-lg z-10`}
                >
                  <div className="flex items-center gap-2">
                    <span className="text-base md:text-xl">{badge.icon}</span>
                    <div>
                      <p className="text-[10px] md:text-xs font-semibold whitespace-nowrap">
                        {badge.name}
                      </p>
                      <p className="text-[9px] md:text-[10px] text-slate-500">
                        {badge.category}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="order-2 md:order-1"
          >
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/50 backdrop-blur px-7 py-3 text-sm text-slate-300 mb-6"
            >
              <Sparkles
                size={20}
                className="text-blue-600 animate-pulse font-extrabold -ml-2"
              />
              <span className="text-blue-600 text-l font-semibold">
                Available for opportunities
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-2xl md:text-3xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-4"
            >
              Hii, I am
              <span className="bg-gradient-to-r ml-2.5 from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Abu Bakar Ansari
              </span>
            </motion.h1>

            <motion.h2
              variants={itemVariants}
              className="text-xl md:text-2xl font-semibold text-slate-300 mb-6"
            >
              I am a
              <span className="text-indigo-400"> Frontend Developer</span>
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-lg text-slate-400 max-w-xl mb-8 leading-relaxed"
            >
              Hi! I'm Abu Bakar Ansari, and i am a passionate front-end
              developer specializing in translating design concepts into
              seamless and interactive web experiences using HTML. CSS,
              JavaScript,React.Js and Tailwind Css. Crafting beautiful,
              responsive, and user-friendly web experiences with modern
              technologies. Passionate about turning ideas into reality through
              clean code and creative design.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-4 mb-10"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/projects"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 px-7 py-3.5 text-sm font-semibold shadow-lg shadow-indigo-500/25"
                >
                  View my work
                  <ArrowRight />
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-700 px-7 py-3.5 text-sm font-semibold hover:bg-slate-900 transition-colors"
                >
                  Get in touch
                </Link>
              </motion.div>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-6">
              {STATS.map((stat) => (
                <motion.div
                  key={stat.label}
                  whileHover={{ y: -4 }}
                  className="border-l-2 border-indigo-500/40 pl-4"
                >
                  <div className="text-2xl md:text-3xl font-bold bg-gradient-to-br from-white to-slate-400 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-xs text-slate-500 mt-1">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="hidden md:flex justify-center mt-20"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2 text-slate-500"
          >
            {/* <span className="text-xs tracking-widest uppercase">Scroll</span> */}
            <Link to="/about">
              <ArrowDownToDot />
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* ── Scroll-animated Sections with Top & Bottom Shadow ── */}
      <div className="relative">
        {/* Top shadow — fades from dark into the content */}
        <div className="pointer-events-none absolute top-0 left-0 right-0 h-24 md:h-32 bg-gradient-to-b from-slate-950 via-slate-950/70 to-transparent z-20" />

        <AnimatedSection variant="left">
          <About />
        </AnimatedSection>

        <AnimatedSection variant="up">
          <Projects />
        </AnimatedSection>

        <AnimatedSection variant="scale">
          <Service />
        </AnimatedSection>

        <AnimatedSection variant="right">
          <Skills />
        </AnimatedSection>

        <AnimatedSection variant="up">
          <Contact />
        </AnimatedSection>

        {/* Bottom shadow — fades from content into dark */}
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 md:h-32 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent z-20" />
      </div>
    </div>
  );
};

export default Home;