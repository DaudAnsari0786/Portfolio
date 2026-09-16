import React from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Sections/Home';
import Footer from './Components/Sections/Footer';
import About from './Components/Sections/About';
import Contact from './Components/Sections/Contact';
import Project from './Components/Sections/Project';
import Skills from './Components/Sections/Skills';
import Services from './Components/Sections/Service';

// Page transition variants
const pageVariants = {
  initial: {
    opacity: 0,
    y: 40,
    scale: 0.98,
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
  exit: {
    opacity: 0,
    y: -30,
    scale: 0.98,
    transition: {
      duration: 0.3,
      ease: 'easeInOut',
    },
  },
};

// Wrapper component for animated routes
const AnimatedPage = ({ children }) => (
  <motion.div
    variants={pageVariants}
    initial="initial"
    animate="animate"
    exit="exit"
    className="w-full"
  >
    {children}
  </motion.div>
);

// AnimatedRoutes needs to be a child of BrowserRouter to use useLocation
const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<AnimatedPage><Home /></AnimatedPage>} />
        <Route path="/about" element={<AnimatedPage><About /></AnimatedPage>} />
        <Route path="/contact" element={<AnimatedPage><Contact /></AnimatedPage>} />
        <Route path="/projects" element={<AnimatedPage><Project /></AnimatedPage>} />
        <Route path="/skills" element={<AnimatedPage><Skills /></AnimatedPage>} />
        <Route path="/services" element={<AnimatedPage><Services /></AnimatedPage>} />
        
      </Routes>
    </AnimatePresence>
  );
};

const App = () => {
  return (
    
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className=""
      >
        <Navbar />
        <AnimatedRoutes />
        <Footer />
      </motion.div>
  );
};

export default App;