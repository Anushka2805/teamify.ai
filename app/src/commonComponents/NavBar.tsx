"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { TiThMenu } from "react-icons/ti";
import { scroller } from "react-scroll";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const handleNavClick = (target: string) => {
    scroller.scrollTo(target, {
      smooth: true,
      duration: 500,
      offset: -80,
    });
    setActiveSection(target);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      const sections = ["home", "features"];
      let current = "home";
      for (let section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            current = section;
          }
        }
      }
      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", target: "home" },
    { label: "Features", target: "features" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-black/50 backdrop-blur-md shadow-md"
          : "bg-black/30 backdrop-blur-md"
      }`}
    >
      <div className="w-full px-5 md:px-10 py-4 flex items-center justify-between">
        {/* Left Side: Logo/Name */}
        <div
          onClick={() => handleNavClick("home")}
          className="text-2xl md:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 cursor-pointer"
        >
          TEAMIFY.AI
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map(({ label, target }) => (
            <button
              key={label}
              onClick={() => handleNavClick(target)}
              className={`font-semibold transition-all transform hover:scale-105 ${
                activeSection === target
                  ? "text-purple-400 underline underline-offset-4"
                  : "text-white hover:text-purple-400 hover:underline hover:underline-offset-4"
              }`}
            >
              {label}
            </button>
          ))}

          {/* Auth Buttons */}
          <div className="flex items-center space-x-4">
            <button className="px-5 py-2 rounded-md text-white font-semibold hover:bg-purple-700 transition-all duration-300">
              Sign In
            </button>
            <button className="px-5 py-2 rounded-md bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold hover:scale-105 transition-all duration-300">
              Sign Up
            </button>
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center">
          <button
            className="p-2 text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={24} /> : <TiThMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 pt-2 space-y-3 bg-black/40 backdrop-blur-md rounded-b-xl transition-all duration-300">
          {navLinks.map(({ label, target }) => (
            <button
              key={label}
              onClick={() => {
                handleNavClick(target);
                setMenuOpen(false);
              }}
              className={`block w-full text-left px-4 py-2 rounded-md font-semibold transition-all ${
                activeSection === target
                  ? "text-purple-400 bg-black/30"
                  : "text-white hover:bg-purple-800 hover:text-purple-300"
              }`}
            >
              {label}
            </button>
          ))}

          <div className="flex flex-col gap-2 mt-2">
            <button className="w-full py-2 rounded-md text-white font-semibold hover:bg-purple-700 transition-all duration-300">
              Sign In
            </button>
            <button className="w-full py-2 rounded-md bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold hover:scale-[1.02] transition-all duration-300">
              Sign Up
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
