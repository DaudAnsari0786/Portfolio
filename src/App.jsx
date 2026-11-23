import React, { Suspense, lazy, memo, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Lenis from "lenis";

import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Sections/Footer";

// Lazy-load route components (Fast Performance)
const Home = lazy(() => import("./Components/Sections/Home"));
const About = lazy(() => import("./Components/Sections/About"));
const Contact = lazy(() => import("./Components/Sections/Contact"));
const Project = lazy(() => import("./Components/Sections/Project"));
const Skills = lazy(() => import("./Components/Sections/Skills"));
const Services = lazy(() => import("./Components/Sections/Service"));

// Zoom Page transitions (No scale, pure GPU blur/opacity)
const pageVariants = {
  initial: {
    opacity: 0,
    filter: "blur(12px)", // Zoom-in effect using blur
    y: 15,
  },
  animate: {
    opacity: 1,
    filter: "blur(0px)",
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    opacity: 0,
    filter: "blur(12px)", // Zoom-out effect
    y: -15,
    transition: { duration: 0.3, ease: "easeInOut" },
  },
};

const PageFallback = () => (
  <div className="w-full h-screen flex items-center justify-center">
    Loading…
  </div>
);

const AnimatedPage = memo(({ children }) => (
  <motion.div
    variants={pageVariants}
    initial="initial"
    animate="animate"
    exit="exit"
    className="w-full"
  >
    <Suspense fallback={<PageFallback />}>{children}</Suspense>
  </motion.div>
));
AnimatedPage.displayName = "AnimatedPage";

// Lenis Smooth Scroll setup
let lenisInstance = null;

const SmoothScroll = () => {
  useEffect(() => {
    lenisInstance = new Lenis({
      lerp: 0.1,
      autoRaf: false,
      smoothWheel: true,
      syncTouch: true,
    });

    const update = (time) => {
      lenisInstance.raf(time);
      requestAnimationFrame(update);
    };

    const rafId = requestAnimationFrame(update);

    return () => {
      cancelAnimationFrame(rafId);
      lenisInstance.destroy();
      lenisInstance = null;
    };
  }, []);

  return null;
};

// SEO Data Mapping (SEO Optimized)
const seoData = {
  "/": {
    title: "Abu Bakar Ansari | Web Developer",
    desc: "Welcome to my portfolio. I build fast, responsive, and user-friendly web applications.",
  },
  "/about": {
    title: "About Me | Abu Bakar Ansari",
    desc: "Learn more about my background, experience, and passion for web development.",
  },
  "/projects": {
    title: "My Projects | Abu Bakar Ansari",
    desc: "Explore a showcase of my recent web development and design projects.",
  },
  "/skills": {
    title: "My Skills | Abu Bakar Ansari",
    desc: "Discover the technologies and tools I use to build modern web applications.",
  },
  "/services": {
    title: "Services | Abu Bakar Ansari",
    desc: "See how I can help you build your next big digital product.",
  },
  "/contact": {
    title: "Contact Me | Abu Bakar Ansari",
    desc: "Get in touch with me for freelance work, collaborations, or full-time roles.",
  },
};

const AnimatedRoutes = () => {
  const location = useLocation();

  // 1. SEO Optimization
  useEffect(() => {
    const currentSeo = seoData[location.pathname] || {
      title: "Abu Bakar Ansari | Web Developer",
      desc: "Explore my portfolio.",
    };

    document.title = currentSeo.title;

    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", currentSeo.desc);
    } else {
      metaDesc = document.createElement("meta");
      metaDesc.name = "description";
      metaDesc.content = currentSeo.desc;
      document.head.appendChild(metaDesc);
    }
  }, [location.pathname]);

  // 2. Performance: Instant scroll reset on route change
  useEffect(() => {
    if (lenisInstance) {
      lenisInstance.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.pathname]);

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.key}>
        <Route
          path="/"
          element={
            <AnimatedPage>
              <Home />
            </AnimatedPage>
          }
        />
        <Route
          path="/about"
          element={
            <AnimatedPage>
              <About />
            </AnimatedPage>
          }
        />
        <Route
          path="/contact"
          element={
            <AnimatedPage>
              <Contact />
            </AnimatedPage>
          }
        />
        <Route
          path="/projects"
          element={
            <AnimatedPage>
              <Project />
            </AnimatedPage>
          }
        />
        <Route
          path="/skills"
          element={
            <AnimatedPage>
              <Skills />
            </AnimatedPage>
          }
        />
        <Route
          path="/services"
          element={
            <AnimatedPage>
              <Services />
            </AnimatedPage>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => {
  return (
    // Semantic HTML for SEO & Accessibility
    <div className="flex flex-col min-h-screen bg-[#0B1120] text-white">
      <SmoothScroll />

      <header>
        <Navbar />
      </header>

      {/* Main Content Area */}
      <main className="flex-grow">
        <AnimatedRoutes />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default App;
