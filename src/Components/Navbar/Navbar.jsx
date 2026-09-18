import React, { useState, useRef, useEffect } from "react";
import {
  Home,
  User,
  Briefcase,
  Code,
  Mail,
  Menu,
  X,
  ServerIcon,
  ChevronDown,
  UtensilsCrossed,
  ShoppingCart,
  Plane,
  Code2,
  Download,
  Send,
  ArrowRight,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
const CV = "/AbuBakar.pdf";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);
  const [isMobileProjectsOpen, setIsMobileProjectsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsProjectsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close dropdowns and mobile menu on route change
  useEffect(() => {
    setIsProjectsOpen(false);
    setIsMobileProjectsOpen(false);
    setIsOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Close on Escape
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        setIsProjectsOpen(false);
        setIsOpen(false);
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  // Add subtle shadow/background when scrolled
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ── Smooth scroll to top when a nav link is clicked ──
  const scrollToTop = () => {
    // Cancel any current scroll momentum first
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });

    // Fallback for browsers that ignore smooth with certain states
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      window.scrollTo(0, 0);
      return;
    }

    // Re-run on the next frame to override any anchor jumps
    requestAnimationFrame(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    });
  };

  const handleNavClick = () => {
    // Close menus first so the scroll isn't interrupted
    setIsOpen(false);
    setIsProjectsOpen(false);
    setIsMobileProjectsOpen(false);

    // Give React a tick to update layout, then scroll
    requestAnimationFrame(() => {
      scrollToTop();
    });
  };

  // Use for elements that navigate to the *current* route
  // (clicking these wouldn't trigger a route change, so we scroll manually)
  const handleSamePageClick = (e, path) => {
    if (location.pathname === path) {
      e.preventDefault();
      scrollToTop();
    }
    handleNavClick();
  };

  const navItems = [
    { name: "Home", path: "/", icon: Home },
    { name: "About", path: "/about", icon: User },
    { name: "Services", path: "/services", icon: ServerIcon },
    { name: "Skills", path: "/skills", icon: Code },
    { name: "Contact", path: "/contact", icon: Mail },
  ];

  const projects = [
    {
      name: "Restaurant",
      path: "https://restorent-website-mnkz665hs-daudansari6472-8938s-projects.vercel.app/",
      icon: UtensilsCrossed,
      description: "Food ordering website",
      color: "from-orange-500 to-red-500",
      external: true,
    },
    {
      name: "E-Commerce",
      path: "https://your-ecommerce-site.vercel.app/",
      icon: ShoppingCart,
      description: "Online shopping store",
      color: "from-emerald-500 to-teal-500",
      external: true,
    },
    {
      name: "Travels",
      path: "https://your-travels-site.vercel.app/",
      icon: Plane,
      description: "Travel booking platform",
      color: "from-sky-500 to-blue-500",
      external: true,
    },
    {
      name: "All Project",
      path: "/projects",
      icon: Code2,
      description: "View all my work",
      color: "from-indigo-500 to-purple-500",
      external: false,
    },
  ];

  const socialLinks = [
    {
      icon: <FaGithub />,
      href: "https://github.com/",
      label: "GitHub",
      hoverColor: "hover:text-gray-900 dark:hover:text-white",
    },
    {
      icon: <FaLinkedin />,
      href: "https://linkedin.com/",
      label: "LinkedIn",
      hoverColor: "hover:text-blue-600",
    },
    {
      icon: <FaTwitter />,
      href: "https://twitter.com/",
      label: "Twitter",
      hoverColor: "hover:text-sky-500",
    },
  ];

  const isActive = (path) => location.pathname === path;
  const isProjectActive = () =>
    location.pathname === "/projects" ||
    location.pathname.startsWith("/projects/");

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 transition-shadow duration-300 ${
        scrolled ? "shadow-md" : ""
      }`}
    >
      {/* Scrim behind Projects dropdown */}
      {isProjectsOpen && (
        <div
          className="fixed inset-0 top-16 bg-black/20 dark:bg-black/40 backdrop-blur-[2px] hidden md:block z-0"
          aria-hidden="true"
          onClick={() => setIsProjectsOpen(false)}
        />
      )}

      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 relative z-10">
        <div className="flex items-center justify-between h-16">
          {/* ── Logo ── */}
          <Link
            to="/"
            onClick={(e) => handleSamePageClick(e, "/")}
            className="flex items-center gap-2 group shrink-0"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg blur opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative w-9 h-9 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Code2 className="w-5 h-5 text-white" />
              </div>
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-base font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 bg-clip-text text-transparent">
                Abu Bakar
              </span>
              <span className="text-[10px] tracking-widest uppercase text-indigo-500 dark:text-indigo-400 font-semibold">
                Ansari
              </span>
            </div>
          </Link>

          {/* ── Desktop Navigation ── */}
          <div className="hidden lg:flex items-center gap-1 bg-gray-100/70 dark:bg-gray-800/70 rounded-full p-1 border border-gray-200 dark:border-gray-700">
            {navItems.slice(0, 2).map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={(e) => handleSamePageClick(e, item.path)}
                className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  isActive(item.path)
                    ? "bg-white dark:bg-gray-700 text-indigo-600 dark:text-indigo-400 shadow-sm"
                    : "text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
                }`}
              >
                {item.name}
              </Link>
            ))}

            {/* Projects Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsProjectsOpen(!isProjectsOpen)}
                aria-expanded={isProjectsOpen}
                aria-haspopup="true"
                className={`flex items-center gap-1 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  isProjectActive() || isProjectsOpen
                    ? "bg-white dark:bg-gray-700 text-indigo-600 dark:text-indigo-400 shadow-sm"
                    : "text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
                }`}
              >
                Projects
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-300 ${
                    isProjectsOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                role="menu"
                aria-label="Projects"
                className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 w-80 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl ring-1 ring-black/5 dark:ring-white/10 border border-gray-200 dark:border-gray-700 overflow-hidden transition-all duration-300 origin-top z-20 ${
                  isProjectsOpen
                    ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
                    : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
                }`}
              >
                <div className="h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" />
                <div className="p-2">
                  {projects.map((project) => {
                    const linkProps = project.external
                      ? {
                          href: project.path,
                          target: "_blank",
                          rel: "noopener noreferrer",
                        }
                      : { to: project.path };

                    const Tag = project.external ? "a" : Link;

                    return (
                      <Tag
                        key={project.name}
                        {...linkProps}
                        onClick={
                          project.external
                            ? handleNavClick
                            : (e) => handleSamePageClick(e, project.path)
                        }
                        role="menuitem"
                        className={`group flex items-center gap-4 px-3 py-3 rounded-xl transition-all duration-200 ${
                          !project.external && isActive(project.path)
                            ? "bg-indigo-50 dark:bg-gray-700"
                            : "hover:bg-indigo-50 dark:hover:bg-gray-700"
                        }`}
                      >
                        <div
                          className={`w-11 h-11 bg-gradient-to-br ${project.color} rounded-xl flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}
                        >
                          <project.icon className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-sm font-semibold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                            {project.name}
                          </div>
                          <div className="text-xs text-gray-500 dark:text-gray-400 truncate">
                            {project.description}
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-gray-400 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                      </Tag>
                    );
                  })}
                </div>
              </div>
            </div>

            {navItems.slice(2).map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={(e) => handleSamePageClick(e, item.path)}
                className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  isActive(item.path)
                    ? "bg-white dark:bg-gray-700 text-indigo-600 dark:text-indigo-400 shadow-sm"
                    : "text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* ── Right Side: Socials + CTAs ── */}
          <div className="hidden lg:flex items-center gap-2">
            <div className="flex items-center gap-1 pr-2 border-r border-gray-200 dark:border-gray-700">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className={`p-2 text-xl rounded-full border border-transparent text-gray-500 dark:text-gray-400 transition-all duration-200 hover:scale-110 hover:bg-gray-100 dark:hover:bg-gray-800 ${social.hoverColor}`}
                >
                  {social.icon}
                </a>
              ))}
            </div>

            <Link
              to="/contact"
              onClick={(e) => handleSamePageClick(e, "/contact")}
              className="group relative inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold text-white overflow-hidden shadow-lg shadow-indigo-500/25 transition-all duration-300 hover:scale-105 hover:shadow-indigo-500/40"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600" />
              <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <Send className="relative w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              <span className="relative">Hire Me</span>
            </Link>

            <a
              href={CV}
              download
              onClick={handleNavClick}
              className="group inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold border-2 border-gray-800 dark:border-gray-600 text-gray-800 dark:text-white transition-all duration-300 hover:bg-gray-800 dark:hover:bg-gray-700 hover:text-white hover:scale-105"
            >
              <Download className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-0.5" />
              <span>Resume</span>
            </a>
          </div>

          {/* ── Mobile Menu Button ── */}
          <div className="lg:hidden flex items-center gap-1 sm:gap-2">
            <a
              href={CV}
              download
              aria-label="Download Resume"
              className="p-2 text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 rounded-lg transition-all duration-200"
            >
              <Download className="w-5 h-5" />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              aria-expanded={isOpen}
              className="relative p-2 text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 rounded-lg transition-all duration-200"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* ── Mobile Navigation ── */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out relative z-10 ${
          isOpen ? "max-h-[calc(100vh-4rem)] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-3 pt-3 pb-6 space-y-1 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 max-h-[calc(100vh-4rem)] overflow-y-auto">
          {navItems.slice(0, 2).map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={(e) => handleSamePageClick(e, item.path)}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                isActive(item.path)
                  ? "text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-gray-800"
                  : "text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-gray-800 hover:translate-x-1"
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span className="text-base font-medium">{item.name}</span>
            </Link>
          ))}

          {/* Mobile Projects Accordion */}
          <div>
            <button
              onClick={() => setIsMobileProjectsOpen(!isMobileProjectsOpen)}
              aria-expanded={isMobileProjectsOpen}
              className={`w-full flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-200 ${
                isProjectActive()
                  ? "text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-gray-800"
                  : "text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-gray-800"
              }`}
            >
              <div className="flex items-center gap-3">
                <Briefcase className="w-5 h-5" />
                <span className="text-base font-medium">Projects</span>
              </div>
              <ChevronDown
                className={`w-5 h-5 transition-transform duration-300 ${
                  isMobileProjectsOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                isMobileProjectsOpen
                  ? "max-h-96 opacity-100 mt-1"
                  : "max-h-0 opacity-0"
              }`}
            >
              <div className="ml-4 space-y-1 border-l-2 border-indigo-300 dark:border-indigo-700 pl-3">
                {projects.map((project) => {
                  const linkProps = project.external
                    ? {
                        href: project.path,
                        target: "_blank",
                        rel: "noopener noreferrer",
                      }
                    : { to: project.path };

                  const Tag = project.external ? "a" : Link;

                  return (
                    <Tag
                      key={project.name}
                      {...linkProps}
                      onClick={
                        project.external
                          ? handleNavClick
                          : (e) => handleSamePageClick(e, project.path)
                      }
                      className="group flex items-center gap-3 px-3 py-3 rounded-xl text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-gray-800 transition-all duration-200 hover:translate-x-1"
                    >
                      <div
                        className={`w-9 h-9 bg-gradient-to-br ${project.color} rounded-lg flex items-center justify-center flex-shrink-0 shadow-md`}
                      >
                        <project.icon className="w-4 h-4 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-medium">
                          {project.name}
                        </div>
                        <div className="text-xs text-gray-500 dark:text-gray-400 truncate">
                          {project.description}
                        </div>
                      </div>
                    </Tag>
                  );
                })}
              </div>
            </div>
          </div>

          {navItems.slice(2).map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={(e) => handleSamePageClick(e, item.path)}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                isActive(item.path)
                  ? "text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-gray-800"
                  : "text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-gray-800 hover:translate-x-1"
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span className="text-base font-medium">{item.name}</span>
            </Link>
          ))}

          <div className="h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent my-3" />

          <div className="flex items-center justify-center gap-3 px-4 py-2">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className={`p-3 rounded-full border border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-400 transition-all duration-200 hover:scale-110 hover:bg-gray-100 dark:hover:bg-gray-800 ${social.hoverColor}`}
              >
                {social.icon}
              </a>
            ))}
          </div>

          <div className="px-4 pt-2 space-y-2">
            <Link
              to="/contact"
              onClick={(e) => handleSamePageClick(e, "/contact")}
              className="group relative flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl text-white font-semibold overflow-hidden shadow-lg shadow-indigo-500/25 transition-all duration-200 hover:scale-[1.02]"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600" />
              <Send className="relative w-4 h-4" />
              <span className="relative">Hire Me</span>
            </Link>
            <a
              href={CV}
              download
              onClick={handleNavClick}
              className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl border-2 border-gray-800 dark:border-gray-600 text-gray-800 dark:text-white font-semibold transition-all duration-200 hover:bg-gray-800 dark:hover:bg-gray-700 hover:text-white hover:scale-[1.02]"
            >
              <Download className="w-4 h-4" />
              <span>Download Resume</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;