import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FaGithub,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaCode,
} from 'react-icons/fa';
import { MdEmail, MdLocationOn, MdPhone, MdArrowUpward } from 'react-icons/md';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const location = useLocation();

  // Smooth scroll to top on route change
  const handleLinkClick = () => {
    setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, 50);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { name: 'GitHub', icon: <FaGithub />, url: 'https://github.com/DaudAnsari0786' },
    { name: 'LinkedIn', icon: <FaLinkedinIn />, url: 'https://linkedin.com' },
    { name: 'Twitter', icon: <FaTwitter />, url: 'https://twitter.com' },
    { name: 'Instagram', icon: <FaInstagram />, url: 'https://instagram.com' },
    { name: 'YouTube', icon: <FaYoutube />, url: 'https://youtube.com' },
  ];

  // Each service now points to a route (or /services)
  const services = [
    { label: 'Web Development', href: '/services' },
    { label: 'UI/UX Design', href: '/services' },
    { label: 'Mobile Apps', href: '/services' },
    { label: 'Branding', href: '/services' },
    { label: 'Consulting', href: '/services' },
  ];

  const quickLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Skills', href: '/skills' },
    { label: 'Projects', href: '/projects' },
    { label: 'Contact', href: '/contact' },
  ];

  const legalLinks = [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Sitemap', href: '/sitemap' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <footer className="relative bg-gray-950 text-gray-300">
      {/* Decorative top gradient line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto pt-16 pb-6 px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 lg:gap-12">
          {/* Brand Section */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link
              to="/"
              onClick={handleLinkClick}
              className="flex items-center gap-3 mb-4 group w-fit"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-500/20 rounded-xl flex items-center justify-center border border-purple-500/30 group-hover:scale-110 transition-transform duration-300">
                <FaCode className="text-xl sm:text-2xl text-purple-400" />
              </div>
              <h3 className="font-bold text-lg sm:text-xl md:text-2xl tracking-tight">
                <span className="text-purple-400">Abu</span>
                <span className="text-white"> Bakar </span>
                <span className="text-purple-400">Ansari</span>
              </h3>
            </Link>
            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed mb-5 max-w-xs">
              Hi, I'm a frontend developer who loves turning ideas into reality.
              I specialize in building beautiful, fast, and user-friendly web
              experiences that make a difference.
            </p>
            <div className="flex gap-2 sm:gap-3 flex-wrap">
              {socialLinks.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{
                    y: -4,
                    scale: 1.1,
                    transition: { duration: 0.3, ease: "easeIn" },
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-purple-400 hover:border-purple-400 hover:shadow-lg hover:shadow-purple-500/20 transition-[color,border-color,box-shadow] duration-500 ease-in bg-gray-800/50"
                  aria-label={item.name}
                >
                  <span className="text-xs sm:text-base">{item.icon}</span>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-xs sm:text-sm uppercase tracking-wider mb-5 relative inline-block">
              Quick Links
              <span className="absolute -bottom-1 left-0 w-8 h-0.5 bg-purple-500 rounded-full" />
            </h4>
            <ul className="space-y-2 sm:space-y-2.5">
              {quickLinks.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    to={href}
                    onClick={handleLinkClick}
                    className={`transition-colors duration-300 inline-flex items-center gap-2 group text-xs sm:text-sm ${
                      isActive(href)
                        ? 'text-purple-400 font-medium'
                        : 'text-gray-400 hover:text-purple-400'
                    }`}
                  >
                    <span className="w-1.5 h-1.5 bg-purple-500 rounded-full opacity-60 group-hover:opacity-100 group-hover:scale-125 transition-all" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services — now clickable Links */}
          <div>
            <h4 className="text-white font-semibold text-xs sm:text-sm uppercase tracking-wider mb-5 relative inline-block">
              Services
              <span className="absolute -bottom-1 left-0 w-8 h-0.5 bg-purple-500 rounded-full" />
            </h4>
            <ul className="space-y-2 sm:space-y-2.5">
              {services.map((service) => (
                <li key={service.label}>
                  <Link
                    to={service.href}
                    onClick={handleLinkClick}
                    className="text-gray-400 hover:text-purple-400 transition-colors duration-300 inline-flex items-center gap-2 group text-xs sm:text-sm"
                  >
                    <span className="w-1.5 h-1.5 bg-purple-500 rounded-full opacity-60 group-hover:opacity-100 group-hover:scale-125 transition-all" />
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold text-xs sm:text-sm uppercase tracking-wider mb-5 relative inline-block">
              Get in Touch
              <span className="absolute -bottom-1 left-0 w-8 h-0.5 bg-purple-500 rounded-full" />
            </h4>
            <ul className="space-y-3 sm:space-y-3.5 text-xs sm:text-sm">
              <li className="flex items-center gap-2 sm:gap-3 group">
                <MdEmail className="text-purple-400 text-base sm:text-lg group-hover:scale-110 transition-transform flex-shrink-0" />
                <a
                  href="mailto:daudansari6472@gmail.com"
                  className="text-gray-400 hover:text-white transition-colors break-all"
                >
                  daudansari6472@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2 sm:gap-3 group">
                <MdPhone className="text-purple-400 text-base sm:text-lg group-hover:scale-110 transition-transform flex-shrink-0" />
                <a
                  href="tel:+919026350956"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  +91 (902) 635-0956
                </a>
              </li>
              <li className="flex items-start gap-2 sm:gap-3 group">
                <MdLocationOn className="text-purple-400 text-base sm:text-lg mt-0.5 group-hover:scale-110 transition-transform flex-shrink-0" />
                <span className="text-gray-400 leading-relaxed">
                  Vill. Rukmalpur Post Meerpur
                  <br />
                  Atrauliya Azamgarh 223223 (U.P.)
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider + Bottom Bar */}
        <div className="mt-10 sm:mt-12 pt-6 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p className="text-center sm:text-left text-[10px] sm:text-xs">
            © {currentYear} Abu Bakar Ansari. Crafted with{' '}
            <span className="text-purple-400 animate-pulse inline-block">❤️</span>{' '}
            using React & Tailwind CSS.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            {legalLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                onClick={handleLinkClick}
                className={`transition-colors text-[10px] sm:text-xs ${
                  isActive(link.href)
                    ? 'text-purple-400 font-medium'
                    : 'hover:text-purple-400'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <motion.button
        onClick={scrollToTop}
        whileHover={{
          scale: 1.15,
          y: -4,
          transition: { duration: 0.3, ease: "easeIn" },
        }}
        whileTap={{ scale: 0.9 }}
        className="fixed cursor-pointer bottom-6 sm:bottom-8 right-6 sm:right-8 z-50 w-10 h-10 sm:w-12 sm:h-12 bg-purple-500 text-white rounded-full shadow-lg shadow-purple-500/30 flex items-center justify-center transition-[background-color,box-shadow] duration-500 ease-in hover:shadow-purple-500/50 hover:bg-purple-400 group"
        aria-label="Back to top"
      >
        <MdArrowUpward className="text-xl sm:text-2xl group-hover:-translate-y-0.5 transition-transform duration-300" />
      </motion.button>
    </footer>
  );
};

export default Footer;