import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaExternalLinkAlt, FaArrowRight } from 'react-icons/fa';
import { motion } from "framer-motion";
import { img } from "framer-motion/client";

// --- Data ---
const projects = [
  {
    id: 1,
    title: "Restaurant Booking Website",
    subtitle: "Fine Dining Experience",
    description:
      "A full-featured restaurant booking platform with real-time table availability, menu selection, and secure payment integration. Built with modern technologies for a seamless dining experience.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop",
    liveDemo: "https://restorent-website-git-main-daudansari6472-8938s-projects.vercel.app/",
    sourceCode: "https://github.com/DaudAnsari0786/Restorent-Website",
    projectLink: "https://github.com/DaudAnsari0786/Restorent-Website",
    color: "from-blue-600 to-cyan-500",
    shadow: "shadow-blue-500/20",
    glow: "hover:shadow-blue-500/40",
  },
  {
    id: 2,
    title: "E-Commerce Platform",
    subtitle: "Comprehensive e-commerce solution",
    description:
      "A comprehensive e-commerce solution with product catalog, shopping cart, wishlist, and admin dashboard. Optimized for performance and conversion.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    liveDemo: "https://ecommerce-demo.com",
    sourceCode: "https://github.com/yourusername/ecommerce-platform",
    projectLink: "/projects/ecommerce-platform",
    color: "from-purple-600 to-pink-500",
    shadow: "shadow-purple-500/20",
    glow: "hover:shadow-purple-500/40",
  },
  {
    id: 3,
    title: "GreenCart - Eco Store",
    subtitle: "Eco-friendly marketplace",
    description:
      "An eco-friendly marketplace connecting sustainable product sellers with environmentally conscious consumers. Features carbon footprint tracking for each product.",
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=600&h=400&fit=crop",
    liveDemo: "https://restorent-website-mnkz665hs-daudansari6472-8938s-projects.vercel.app/",
    sourceCode: "https://github.com/yourusername/greencart-eco-store",
    projectLink: "/projects/greencart-eco-store",
    color: "from-green-600 to-emerald-500",
    shadow: "shadow-green-500/20",
    glow: "hover:shadow-green-500/40",
  },
];

// ── Reusable hover preset (used everywhere) ──
const HOVER_SCALE = {
  scale: 1.05,
  transition: { duration: 0.3, ease: "easeIn" },
};

const TAP_SCALE = { scale: 0.95 };

// --- Zoom-out scroll animation variants ---
const zoomOut = {
  hidden: { opacity: 0, scale: 0.75 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.9,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

const zoomOutSoft = {
  hidden: { opacity: 0, scale: 0.88 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

// --- Stagger container for children ---
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
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// Card variant — zooms out on SCROLL only (entrance)
const cardVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 30 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 15 },
  },
};

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      variants={cardVariants}
      /* Card hover — same scale effect as buttons */
      whileHover={HOVER_SCALE}
      whileTap={TAP_SCALE}
      className={`group relative bg-[#1F2937] rounded-2xl overflow-hidden border border-gray-800 hover:border-gray-500 flex flex-col shadow-lg transition-[border-color,box-shadow] duration-500 ease-in ${project.shadow} ${project.glow}`}
    >
      {/* Image Container */}
      <div className="relative h-56 overflow-hidden">
        <div className="absolute top-3 right-3 z-20">
          {/* Subtitle badge — same hover effect */}
          <motion.span
            whileHover={HOVER_SCALE}
            className="inline-block px-3 py-1 text-xs font-semibold text-white bg-black/50 backdrop-blur-md rounded-full border border-white/10"
          >
            {project.subtitle}
          </motion.span>
        </div>
      <img
  src={project.image}
  alt={project.title}
  /* Image zooms slowly on card hover */
  className="w-full h-full object-cover transition-transform duration-1000 ease-in group-hover:scale-105"
/>
        <div className="absolute inset-0 bg-gradient-to-t from-[#1F2937] via-transparent to-transparent opacity-90" />
      </div>

      {/* Content Body */}
      <div className="p-6 flex flex-col flex-1 relative z-20">
        <motion.h3
          whileHover={HOVER_SCALE}
          className="text-2xl font-bold text-white mb-3 transition-all duration-500 ease-in group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:to-purple-400 cursor-pointer inline-block"
        >
          {project.title}
        </motion.h3>

        <motion.p
          whileHover={HOVER_SCALE}
          className="text-gray-400 text-sm leading-relaxed mb-6 flex-1 transition-colors duration-500 ease-in group-hover:text-gray-300 cursor-pointer"
        >
          {project.description}
        </motion.p>

        <div className="w-full h-px bg-gray-700/50 mb-6 transition-colors duration-500 ease-in group-hover:bg-gray-600" />

        {/* Action Buttons — same hover effect */}
        <div className="flex gap-3">
          <motion.a
            href={project.liveDemo}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={HOVER_SCALE}
            whileTap={TAP_SCALE}
            className={`flex-1 px-4 py-3 text-sm font-semibold rounded-lg flex items-center justify-center gap-2 text-white shadow-lg bg-gradient-to-r ${project.color} transition-[filter,box-shadow] duration-500 ease-in hover:brightness-110 hover:shadow-xl`}
          >
            <FaExternalLinkAlt className="text-xs" />
            Live Demo
          </motion.a>

          <motion.a
            href={project.sourceCode}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{
              scale: 1.05,
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              transition: { duration: 0.3, ease: "easeIn" },
            }}
            whileTap={TAP_SCALE}
            className="flex-1 px-4 py-3 text-sm font-semibold rounded-lg flex items-center justify-center gap-2 bg-transparent border border-gray-600 text-gray-300 transition-[color,border-color,background-color] duration-500 ease-in hover:text-white hover:border-gray-400"
          >
            <FaGithub className="text-base" />
            Source Code
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

// --- Main Component ---
const Projects = () => {
  const sectionRef = useRef(null);

  // Smooth scroll to top of section when clicked
  const handleSectionClick = (e) => {
    const tag = e.target.tagName.toLowerCase();
    if (
      tag === 'input' ||
      tag === 'textarea' ||
      tag === 'button' ||
      tag === 'a' ||
      e.target.closest('button') ||
      e.target.closest('a') ||
      e.target.closest('input') ||
      e.target.closest('textarea')
    ) {
      return;
    }

    sectionRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <section
      ref={sectionRef}
      onClick={handleSectionClick}
      className="py-24 px-4 bg-slate-950 min-h-screen overflow-hidden relative scroll-mt-20 cursor-pointer"
    >

      {/* ── Animated Background Blobs ── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ x: [0, 100, 0], y: [0, -50, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -100, 0], y: [0, 80, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 -right-40 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ x: [0, 60, 0], y: [0, -80, 0] }}
          transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-0 left-1/3 w-[400px] h-[400px] bg-cyan-600/10 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header — zooms out on scroll */}
        <motion.div
          variants={zoomOut}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={HOVER_SCALE}
            className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4 cursor-pointer inline-block"
          >
            My Latest <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Projects</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={HOVER_SCALE}
            className="text-lg text-slate-400 max-w-2xl mx-auto cursor-pointer"
          >
            Showcasing my best work in web development, focusing on performance, accessibility, and modern design.
          </motion.p>
        </motion.div>

        {/* Project Grid — zoom-out with stagger */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>

        {/* View All Projects Button — same hover effect */}
        <motion.div
          variants={zoomOutSoft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="text-center mt-20"
        >
          <motion.a
            href="https://vercel.com/daudansari6472-8938s-projects"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={HOVER_SCALE}
            whileTap={TAP_SCALE}
            className="group relative px-8 py-4 bg-white font-bold rounded-lg shadow-lg shadow-indigo-500/25 inline-flex items-center gap-3 overflow-hidden transition-[box-shadow] duration-500 ease-in hover:shadow-indigo-500/50"
          >
            <span className="relative z-10 text-black">View All Projects</span>
            <FaArrowRight
              color="black"
              className="relative z-10 text-sm transition-transform duration-500 ease-in group-hover:translate-x-1.5"
            />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;