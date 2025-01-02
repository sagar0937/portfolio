import React from "react";
import { motion } from "framer-motion";
import { Code2, GitBranch, Package } from "lucide-react";

const icons = {
  react: <Code2 className="w-8 h-8 text-blue-400" />,
  typescript: <Code2 className="w-8 h-8 text-blue-500" />,
  redux: <Package className="w-8 h-8 text-purple-400" />,
  tailwind: <GitBranch className="w-8 h-8 text-teal-400" />,
};

export const TechnologyCard = ({
  name,
  description,
  features,
  icon,
  index,
}) => {
  return (
    <motion.div
      className="relative bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 overflow-hidden group"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity"
        initial={false}
      />
      <div className="relative z-10">
        <div className="flex items-center space-x-4 mb-4">
          {icons[icon]}
          <h3 className="text-xl font-bold text-white">{name}</h3>
        </div>
        <p className="text-gray-300 mb-4">{description}</p>
        <ul className="space-y-2">
          {features.map((feature, i) => (
            <motion.li
              key={i}
              className="text-gray-400 flex items-center space-x-2"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 + i * 0.1 }}
            >
              <span className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
              <span>{feature}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};
export default TechnologyCard;
