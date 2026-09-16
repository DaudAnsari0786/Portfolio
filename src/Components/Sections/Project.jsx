import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaExternalLinkAlt, FaArrowRight } from 'react-icons/fa';
import { motion } from "framer-motion";

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
    sourceCode: "https://github.com/yourusername/restaurant-website",
    projectLink: "/projects/restaurant-website",
    color: "from-blue-600 to-cyan-500",
    shadow: "shadow-blue-500/20",
    glow: "group-hover:shadow-blue-500/40",
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
    glow: "group-hover:shadow-purple-500/40",
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
    glow: "group-hover:shadow-green-500/40",
  },
];

// --- Animation Variants ---
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

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 40 },
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
      whileHover={{ y: -10, scale: 1.02 }}
      className={`group relative bg-[#1F2937] rounded-2xl overflow-hidden border border-gray-800 hover:border-gray-600 transition-all duration-500 ease-out flex flex-col shadow-lg ${project.shadow} hover:${project.glow}`}
    >
      {/* Image Container */}
      <div className="relative h-56 overflow-hidden">
        <div className="absolute top-3 right-3 z-20">
            <span className="px-3 py-1 text-xs font-semibold text-white bg-black/50 backdrop-blur-md rounded-full border border-white/10">
                {project.subtitle}
            </span>
        </div>
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1F2937] via-transparent to-transparent opacity-90" />
      </div>

      {/* Content Body */}
      <div className="p-6 flex flex-col flex-1 relative z-20">
        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:to-purple-400 transition-all duration-300">
          {project.title}
        </h3>
        
        <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-1">
          {project.description}
        </p>

        <div className="w-full h-px bg-gray-700/50 mb-6 group-hover:bg-gray-600 transition-colors" />

        {/* Action Buttons */}
        <div className="flex gap-3">
          <motion.a
            href={project.liveDemo}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`flex-1 px-4 py-3 text-sm font-semibold rounded-lg flex items-center justify-center gap-2 text-white shadow-lg bg-gradient-to-r ${project.color} hover:brightness-110 transition-all`}
          >
            <FaExternalLinkAlt className="text-xs" />
            Live Demo
          </motion.a>

          <motion.a
            href={project.sourceCode}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
            whileTap={{ scale: 0.95 }}
            className="flex-1 px-4 py-3 text-sm font-semibold rounded-lg flex items-center justify-center gap-2 bg-transparent border border-gray-600 text-gray-300 hover:text-white hover:border-gray-500 transition-all"
          >
            <FaGithub className="text-base" />
            Code
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

// --- Main Component ---
const Projects = () => {
  return (
    <section className="py-24 px-4 bg-slate-950 min-h-screen overflow-hidden relative">
      
      {/* ── Animated Background Blobs ── */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
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
        
        {/* Header - Animates on Load */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="text-center mb-16"
        >
            <motion.h2 
                variants={itemVariants}
                className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4"
            >
                My Latest <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Projects</span>
            </motion.h2>
            <motion.p 
                variants={itemVariants}
                className="text-lg text-slate-400 max-w-2xl mx-auto"
            >
                Showcasing my best work in web development, focusing on performance, accessibility, and modern design.
            </motion.p>
        </motion.div>

        {/* Project Grid - Animates on Load */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>

        {/* View All Projects Button - Animates on Load */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6, ease: "easeOut" }}
          className="text-center mt-20"
        >
          <motion.a
            href="https://vercel.com/daudansari6472-8938s-projects"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-8 py-4 bg-white font-bold rounded-lg shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-all duration-300 inline-flex items-center gap-3 overflow-hidden"
          >
            <span className="relative z-10 text-black">View All Projects</span>
            <FaArrowRight color="black" className="relative z-10 text-sm transition-transform duration-300 group-hover:translate-x-1" />
            
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;