"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "./Navbar.css";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Programs", href: "#programs" },
  { label: "Membership", href: "#membership" },
  { label: "Trainers", href: "#trainers" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <header className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
        <div className="navbar-container">

          {/* Logo */}
          <a
            href="#home"
            className="navbar-logo"
            onClick={closeMenu}
            aria-label="FitLytics Home"
          >
            <span className="logo-fit">FIT</span>
            <span className="logo-lytics">LYTICS</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="navbar-links" aria-label="Main navigation">
            {navLinks.map((link, index) => (
              <a
                key={link.label}
                href={link.href}
                className="navbar-link"
              >
                <span className="nav-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span>{link.label}</span>
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <a href="#contact" className="navbar-cta">
            <span>JOIN NOW</span>
            <span className="navbar-cta-arrow">↗</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className={`menu-toggle ${menuOpen ? "active" : ""}`}
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <motion.div
              className="mobile-menu-inner"
              initial={{ y: 30 }}
              animate={{ y: 0 }}
              exit={{ y: 20 }}
              transition={{
                duration: 0.4,
                ease: [0.22, 1, 0.36, 1],
              }}
            >

              <div className="mobile-menu-top">
                <span>FITLYTICS</span>
                <span>MENU</span>
              </div>

              <nav className="mobile-nav">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    onClick={closeMenu}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: index * 0.05,
                      duration: 0.3,
                    }}
                  >
                    <span>
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <strong>{link.label}</strong>

                    <b>↗</b>
                  </motion.a>
                ))}
              </nav>

              <div className="mobile-menu-bottom">
                <a
                  href="#contact"
                  className="mobile-join"
                  onClick={closeMenu}
                >
                  JOIN FITLYTICS
                  <span>↗</span>
                </a>

                <div className="mobile-socials">
                  <a href="#">Instagram</a>
                  <a href="#">Facebook</a>
                  <a href="#">TikTok</a>
                </div>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}