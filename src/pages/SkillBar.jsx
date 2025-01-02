import React from "react";
import { motion } from "framer-motion";

const SkillBar = ({ name, level, index }) => {
  return (
    <motion.div
      className="space-y-2"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="flex justify-between text-gray-700 dark:text-gray-300">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: index * 0.2 }}
        >
          {name}
        </motion.span>
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: index * 0.2 }}
        >
          {level}%
        </motion.span>
      </div>
      <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-blue-500 dark:bg-blue-400 rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          transition={{
            duration: 1,
            ease: "easeOut",
            delay: index * 0.2,
          }}
          viewport={{ once: true }}
        />
      </div>
    </motion.div>
  );
};
export default SkillBar;
