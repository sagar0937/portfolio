import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative bg-gray-100 dark:bg-gray-900 min-h-screen flex flex-col justify-center items-center text-center px-6">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-600 to-purple-600 opacity-10"></div>

      <div className="relative z-10">
        {/* Image */}
        <motion.img
          src="https://via.placeholder.com/200"
          alt="Hero Image"
          className="rounded-full w-40 h-40 md:w-52 md:h-52 border-4 border-indigo-400 shadow-lg mb-6"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />

        {/* Headline */}
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold text-gray-800 dark:text-gray-200 mb-4"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          Welcome to My Portfolio
        </motion.h1>

        {/* Tagline */}
        <motion.p
          className="text-xl text-gray-600 dark:text-gray-400 mb-6"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        >
          Crafting elegant solutions with ReactJS & TailwindCSS
        </motion.p>

        {/* Introduction */}
        <motion.p
          className="text-gray-700 dark:text-gray-300 mb-8 max-w-xl mx-auto"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
        >
          Hi! I'm a ReactJS developer with 5 years of experience, specializing
          in building seamless and interactive web applications. Let’s create
          something amazing together!
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="flex space-x-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
        >
          <button className="px-6 py-3 text-white bg-indigo-600 rounded-md shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition">
            Hire Me
          </button>
          <button className="px-6 py-3 text-indigo-600 bg-white dark:bg-gray-800 dark:text-gray-200 rounded-md shadow-md hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition">
            My Story
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
