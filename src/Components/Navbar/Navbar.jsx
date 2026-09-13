import React, { useState, useRef, useEffect } from "react";

const Navbar = () => {
  const [featuresOpen, setFeaturesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileAccordionOpen, setMobileAccordionOpen] = useState(false);
  const dropdownRef = useRef(null);

  const features = [
    { title: "Dashboard", description: "Overview of your activity", href: "#" },
    { title: "Analytics", description: "Track your performance", href: "#" },
    { title: "Settings", description: "Configure your preferences", href: "#" },
    { title: "Integrations", description: "Connect with other tools", href: "#" },
    { title: "Storage", description: "Manage your files", href: "#" },
    { title: "Support", description: "Get help when needed", href: "#" },
  ];

  const navLinks = [
    { label: "Products", href: "#" },
    { label: "Resources", href: "#" },
    { label: "Contact", href: "#" },
  ];

  // Close features dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setFeaturesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <section className="py-4">
      <div className="container mx-auto px-4 md:px-6">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <a href="https://www.shadcnblocks.com" className="flex items-center gap-2">
            <img
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/shadcnblockscom-icon.svg"
              className="max-h-8"
              alt="Shadcn UI Navbar"
            />
            <span className="text-lg font-semibold tracking-tighter">
              Shadcnblocks.com
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center">
            <ul className="flex items-center space-x-1 list-none">
              {/* Features Dropdown */}
              <li className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setFeaturesOpen((v) => !v)}
                  onMouseEnter={() => setFeaturesOpen(true)}
                  className="group inline-flex h-10 items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-slate-100 focus:bg-slate-100 focus:outline-none"
                >
                  Features
                  <svg
                    className={`ml-1 h-3 w-3 transition-transform duration-200 ${
                      featuresOpen ? "rotate-180" : ""
                    }`}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>

                {featuresOpen && (
                  <div
                    onMouseLeave={() => setFeaturesOpen(false)}
                    className="absolute left-0 top-full z-50 mt-1 w-[600px] rounded-md border border-slate-200 bg-white p-3 shadow-lg"
                  >
                    <div className="grid grid-cols-2 gap-1">
                      {features.map((feature, index) => (
                        <a
                          key={index}
                          href={feature.href}
                          className="rounded-md p-3 transition-colors hover:bg-slate-100"
                        >
                          <p className="mb-1 font-semibold text-slate-900">
                            {feature.title}
                          </p>
                          <p className="text-sm text-slate-500">
                            {feature.description}
                          </p>
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </li>

              {/* Other nav links */}
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="inline-flex h-10 items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-slate-100 focus:bg-slate-100 focus:outline-none"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <button className="inline-flex h-10 items-center justify-center rounded-md border border-slate-200 bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-slate-100">
              Sign in
            </button>
            <button className="inline-flex h-10 items-center justify-center rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-slate-800">
              Start for free
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileOpen(true)}
            className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-slate-200 bg-white transition-colors hover:bg-slate-100"
            aria-label="Open menu"
          >
            <svg
              className="h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/40"
            onClick={() => setMobileOpen(false)}
          />

          {/* Drawer (top sheet) */}
          <div className="fixed top-0 left-0 right-0 max-h-screen overflow-auto bg-white p-6 shadow-lg">
            <div className="flex justify-end">
              <button
                onClick={() => setMobileOpen(false)}
                className="rounded-md p-2 text-slate-500 transition-colors hover:bg-slate-100"
                aria-label="Close menu"
              >
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            {/* Mobile Logo */}
            <div className="mb-4">
              <a
                href="https://www.shadcnblocks.com"
                className="flex items-center gap-2"
              >
                <img
                  src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/shadcnblockscom-icon.svg"
                  className="max-h-8"
                  alt="Shadcn UI Navbar"
                />
                <span className="text-lg font-semibold tracking-tighter">
                  Shadcnblocks.com
                </span>
              </a>
            </div>

            {/* Mobile Content */}
            <div className="flex flex-col p-4">
              {/* Features Accordion */}
              <div className="mt-4 mb-2">
                <button
                  onClick={() => setMobileAccordionOpen((v) => !v)}
                  className="flex w-full items-center justify-between py-2 text-base font-medium transition-colors hover:underline"
                >
                  Features
                  <svg
                    className={`h-4 w-4 transition-transform duration-200 ${
                      mobileAccordionOpen ? "rotate-180" : ""
                    }`}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>

                {mobileAccordionOpen && (
                  <div className="mt-2 grid gap-1 md:grid-cols-2">
                    {features.map((feature, index) => (
                      <a
                        key={index}
                        href={feature.href}
                        className="rounded-md p-3 transition-colors hover:bg-slate-100"
                      >
                        <p className="mb-1 font-semibold text-slate-900">
                          {feature.title}
                        </p>
                        <p className="text-sm text-slate-500">
                          {feature.description}
                        </p>
                      </a>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile Nav Links */}
              <div className="flex flex-col gap-6">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="font-medium"
                  >
                    {link.label}
                  </a>
                ))}
              </div>

              {/* Mobile CTA Buttons */}
              <div className="mt-6 flex flex-col gap-4">
                <button className="inline-flex h-10 items-center justify-center rounded-md border border-slate-200 bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-slate-100">
                  Sign in
                </button>
                <button className="inline-flex h-10 items-center justify-center rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-slate-800">
                  Start for free
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Navbar;