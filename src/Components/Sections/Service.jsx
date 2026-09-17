import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Layout,
  Code2,
  Globe,
  Palette,
  Smartphone,
  Zap,
  CheckCircle2,
  ArrowRight
} from "lucide-react";

// --- Data ---
const services = [
  {
    id: 1,
    title: "Responsive Websites",
    description: "Pixel-perfect websites that look amazing on all devices - from mobile to desktop.",
    icon: <Layout className="w-6 h-6 text-blue-400" />,
    features: ["Mobile First Design", "Cross-browser Compatible", "Fast Loading"],
  },
  {
    id: 2,
    title: "React Development",
    description: "Interactive single-page applications built with React and modern hooks.",
    icon: <Code2 className="w-6 h-6 text-blue-400" />,
    features: ["React Components", "State Management", "API Integration"],
  },
  {
    id: 3,
    title: "Landing Pages",
    description: "High-converting landing pages designed to capture leads and drive action.",
    icon: <Globe className="w-6 h-6 text-blue-400" />,
    features: ["SEO Optimized", "Fast Performance", "Call-to-Action Focused"],
  },
  {
    id: 4,
    title: "UI/UX Design",
    description: "Beautiful, user-friendly interfaces with attention to detail and user experience.",
    icon: <Palette className="w-6 h-6 text-blue-400" />,
    features: ["Figma Designs"],
  },
  {
    id: 5,
    title: "Responsive Redesign",
    description: "Transform your existing website into a modern, responsive experience.",
    icon: <Smartphone className="w-6 h-6 text-blue-400" />,
    features: ["Code Refactoring"],
  },
  {
    id: 6,
    title: "Performance Optimization",
    description: "Speed up your website with optimization techniques and best practices.",
    icon: <Zap className="w-6 h-6 text-blue-400" />,
    features: ["Lighthouse Score 90+"],
  },
];

// ── Zoom-out scroll animation variants (matching Contact / Skills / Projects) ──
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

// --- Stagger container for children ---
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

// Card variant — zooms out individually
const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.8 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 100, damping: 15 },
  },
};

const Services = () => {
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
      className="py-24 px-4 bg-[#0B1120] min-h-screen relative overflow-hidden scroll-mt-20 cursor-pointer"
    >

      {/* Background Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-blue-900/10 blur-[120px] rounded-full pointer-events-none" />

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
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">Services</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            Comprehensive web development services tailored to your needs. From design to deployment, I've got you covered.
          </motion.p>
        </motion.div>

        {/* Services Grid — zoom-out with stagger */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              whileHover={{ y: -5, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="group relative p-8 rounded-2xl bg-[#111827] border border-gray-800 hover:border-gray-700 transition-all duration-300 shadow-lg hover:shadow-blue-500/10"
            >
              {/* Icon Container */}
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-3">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Features List */}
              <ul className="space-y-3 mb-8">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3 text-sm text-gray-300">
                    <CheckCircle2 className="w-4 h-4 text-blue-500 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Know More Link — now using React Router Link */}
              <motion.div
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="inline-block"
              >
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 text-sm font-medium text-blue-500 hover:text-blue-400 transition-colors"
                >
                  Know More
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;