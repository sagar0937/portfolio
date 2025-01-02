import React from "react";
import { motion } from "framer-motion";
import { TechLogo } from "./TechLogo";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const TechStack = () => {
  return (
    <section className="py-16 px-4 dark:bg-gray-800 bg-gray-100">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold dark:text-white text-gray-900 mb-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Tech Stack
        </motion.h2>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 gap-8 justify-items-center"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <TechLogo name="react" color="#61DAFB" />
          <TechLogo name="tailwind" color="#38BDF8" />
          <TechLogo name="javascript" color="#F7DF1E" />
        </motion.div>
      </div>
    </section>
  );
};
export default TechStack;
