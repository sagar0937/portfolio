import React from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 py-12 bg-gray-50 dark:bg-gray-900"
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-gray-600 dark:text-gray-300 mb-6">
            Hi, I'm{" "}
            <span className="text-blue-400">
              <Typewriter
                options={{
                  strings: ["Sagar Mahindrakar"],
                  autoStart: true,
                  loop: true,
                  delay: 100,
                  deleteSpeed: 50,
                }}
              />
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8">
            Senior Frontend Developer with 5 years of experience
          </p>
          <div className="flex justify-center space-x-4 mb-12">
            <a
              href=""
              className="text-gray-300 hover:text-white transition-colors"
            ></a>
            <a
              href=""
              className="text-gray-300 hover:text-white transition-colors"
            ></a>
            <a
              href=""
              className="text-gray-300 hover:text-white transition-colors"
            ></a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
export default Hero;
