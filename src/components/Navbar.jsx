import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <header className="fixed w-full bg-gradient-to-r from-indigo-900 to-gray-800 dark:from-indigo-700 dark:to-gray-900 backdrop-blur-md shadow-md z-50">
      <nav className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo Section */}
        <div className="flex items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="text-2xl font-bold text-gray-300 dark:text-gray-100"
          >
            🌟
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut", delay: 0.2 }}
            className="ml-2 text-xl font-semibold text-gray-300 dark:text-gray-100"
          >
            My Portfolio
          </motion.h1>
        </div>

        {/* Links */}
        <div className="hidden md:flex space-x-6">
          {["Home", "About", "Projects", "Experience"].map((link, index) => (
            <motion.a
              key={index}
              href={`#${link.toLowerCase()}`}
              className="text-gray-300 dark:text-gray-100 hover:text-teal-400 text-lg"
              initial={{ opacity: 0, x: 50, y: -20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.2, // Adds a staggered delay for each item
                ease: "easeInOut",
              }}
              whileHover={{
                scale: 1.1,
                rotate: [0, 5, -5, 0], // Optional dancing effect
                transition: { duration: 0.4 },
              }}
            >
              {link}
            </motion.a>
          ))}
        </div>

        {/* Dark Mode Toggle */}
        <button
          onClick={toggleDarkMode}
          className="hidden md:block text-gray-300 dark:text-gray-100 focus:outline-none hover:text-teal-400"
        >
          {darkMode ? (
            <span role="img" aria-label="Light Mode">
              ☀️
            </span>
          ) : (
            <span role="img" aria-label="Dark Mode">
              🌙
            </span>
          )}
        </button>

        {/* Hamburger Menu */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="focus:outline-none text-gray-300 dark:text-gray-100 hover:text-teal-400"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-16 left-0 w-full bg-gradient-to-r from-indigo-900 to-gray-800 dark:from-indigo-700 dark:to-gray-900 bg-opacity-70 backdrop-blur-md shadow-md z-10"
          >
            <ul className="flex flex-col space-y-4 px-6 py-4">
              {["Home", "About", "Projects", "Experience"].map(
                (link, index) => (
                  <li key={index}>
                    <motion.a
                      href={`#${link.toLowerCase()}`}
                      className="text-gray-300 dark:text-gray-100 hover:text-teal-400 text-lg"
                      onClick={() => setIsOpen(false)} // Close menu on click
                      initial={{ opacity: 0, x: 50, y: -20 }}
                      animate={{ opacity: 1, x: 0, y: 0 }}
                      transition={{
                        duration: 0.8,
                        delay: index * 0.2,
                        ease: "easeInOut",
                      }}
                    >
                      {link}
                    </motion.a>
                  </li>
                )
              )}
            </ul>
            <button
              onClick={toggleDarkMode}
              className="block w-full text-center py-2 text-gray-300 dark:text-gray-100 hover:text-teal-400"
            >
              Toggle {darkMode ? "Light" : "Dark"} Mode
            </button>
          </motion.div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
