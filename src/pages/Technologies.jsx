import React from "react";
import { motion } from "framer-motion";
import { TechnologyCard } from "./TechnologyCard";

const technologies = [
  {
    name: "React",
    description:
      "A JavaScript library for building user interfaces with reusable components.",
    icon: "react",
    features: [
      "Component-Based Architecture",
      "Virtual DOM",
      "Hooks for State Management",
      "Rich Ecosystem",
    ],
  },
  {
    name: "TypeScript",
    description:
      "A typed superset of JavaScript that compiles to plain JavaScript.",
    icon: "typescript",
    features: [
      "Static Type Checking",
      "IDE Support",
      "ECMAScript Compatibility",
      "Interface Definitions",
    ],
  },
  {
    name: "Redux",
    description: "A predictable state container for JavaScript applications.",
    icon: "redux",
    features: [
      "Centralized State",
      "Predictable Updates",
      "Developer Tools",
      "Middleware Support",
    ],
  },
  {
    name: "Tailwind CSS",
    description:
      "A utility-first CSS framework for rapidly building custom designs.",
    icon: "tailwind",
    features: [
      "Utility-First Approach",
      "Responsive Design",
      "Dark Mode Support",
      "Custom Plugins",
    ],
  },
];

const Technologies = () => {
  return (
    <section
      id="technologies"
      className="py-20 px-4 bg-gradient-to-b from-gray-800 to-gray-900"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Technologies
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore the modern tech stack that powers our applications
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {technologies.map((tech, index) => (
            <TechnologyCard key={tech.name} {...tech} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default Technologies;
