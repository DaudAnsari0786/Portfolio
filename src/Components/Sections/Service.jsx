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
  ArrowRight,
} from "lucide-react";

// --- Data ---
const services = [
  {
    id: 1,
    title: "Responsive Websites",
    description:
      "Pixel-perfect websites that look amazing on all devices - from mobile to desktop.",
    icon: <Layout className="w-6 h-6 text-blue-400" />,
    features: [
      "Mobile First Design",
      "Cross-browser Compatible",
      "Fast Loading",
    ],
  },
  {
    id: 2,
    title: "React Development",
    description:
      "Interactive single-page applications built with React and modern hooks.",
    icon: <Code2 className="w-6 h-6 text-blue-400" />,
    features: ["React Components", "State Management", "API Integration"],
  },
  {
    id: 3,
    title: "Landing Pages",
    description:
      "High-converting landing pages designed to capture leads and drive action.",
    icon: <Globe className="w-6 h-6 text-blue-400" />,
    features: ["SEO Optimized", "Fast Performance", "Call-to-Action Focused"],
  },
  {
    id: 4,
    title: "UI/UX Design",
    description:
      "Beautiful, user-friendly interfaces with attention to detail and user experience.",
    icon: <Palette className="w-6 h-6 text-blue-400" />,
    features: ["Figma Designs", "Wireframing & Prototyping", "Design Systems"],
  },
  {
    id: 5,
    title: "Responsive Redesign",
    description:
      "Transform your existing website into a modern, responsive experience.",
    icon: <Smartphone className="w-6 h-6 text-blue-400" />,
    features: ["Code Refactoring", "Modern Layouts", "Improved Accessibility"],
  },
  {
    id: 6,
    title: "Performance Optimization",
    description:
      "Speed up your website with optimization techniques and best practices.",
    icon: <Zap className="w-6 h-6 text-blue-400" />,
    features: ["Lighthouse Score 90+", "Core Web Vitals", "Asset Compression"],
  },
];

// ── Zoom-out scroll animation variants ──
const zoomOut = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1], // Smoother easing curve
    },
  },
};

// --- Stagger container for children ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08, // Slightly faster stagger for snappier feel
      delayChildren: 0.1,
    },
  },
};

// Card variant — optimized for GPU performance
const cardVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 120, // Increased stiffness = faster animation
      damping: 20, // Increased damping = less bounce, smoother stop
      mass: 0.8, // Lower mass = snappier response
    },
  },
};

const Services = () => {
  const sectionRef = useRef(null);

  const handleSectionClick = (e) => {
    const tag = e.target.tagName.toLowerCase();
    if (
      tag === "input" ||
      tag === "textarea" ||
      tag === "button" ||
      tag === "a" ||
      e.target.closest("button") ||
      e.target.closest("a") ||
      e.target.closest("input") ||
      e.target.closest("textarea")
    ) {
      return;
    }

    sectionRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const handleKnowMoreClick = () => {
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    }, 50);
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
            variants={zoomOut}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="section-title"
          >
            My <span className="section-gradient-text">Services</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            Comprehensive web development services tailored to your needs. From
            design to deployment, I've got you covered.
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
              whileHover={{ y: -8, transition: { duration: 0.2 } }} // Much smoother hover effect
              className="group relative p-8 rounded-2xl bg-[#111827] border border-gray-800 hover:border-blue-500/30 transition-colors duration-300 shadow-lg hover:shadow-blue-500/10"
            >
              {/* Icon Container */}
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-blue-500/20 transition-all duration-300">
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
                  <li
                    key={index}
                    className="flex items-center gap-3 text-sm text-gray-300"
                  >
                    <CheckCircle2 className="w-4 h-4 text-blue-500 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Know More Link — Removed motion.div wrapper for better performance */}
              <Link
                to="/contact"
                onClick={handleKnowMoreClick}
                className="inline-flex items-center gap-2 text-sm font-medium text-blue-500 hover:text-blue-400 transition-colors group/link"
              >
                Know More
                {/* Arrow moves smoothly using CSS GPU transform */}
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1" />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
