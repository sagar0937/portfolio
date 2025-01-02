import React from "react";
import { motion } from "framer-motion";

const ExperienceCard = ({ title, company, period, description, index }) => {
  return (
    <motion.div
      className="mb-8 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg transform-gpu"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: index * 0.2,
        type: "spring",
        stiffness: 100,
      }}
      viewport={{ once: true }}
      whileHover={{
        scale: 1.02,
        transition: { duration: 0.2 },
      }}
    >
      <motion.h4
        className="text-xl font-semibold text-blue-500 dark:text-blue-400"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: index * 0.3 }}
      >
        {title}
      </motion.h4>
      <motion.p
        className="text-gray-600 dark:text-gray-400"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: index * 0.4 }}
      >
        {company} | {period}
      </motion.p>
      <motion.p
        className="text-gray-700 dark:text-gray-300 mt-2"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: index * 0.5 }}
      >
        {description}
      </motion.p>
    </motion.div>
  );
};
export default ExperienceCard;
