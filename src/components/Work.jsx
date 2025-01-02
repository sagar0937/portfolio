import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const projects = [
  {
    title: "E-commerce Website",
    description: "A full-stack e-commerce platform with payment integration.",
    image: "https://via.placeholder.com/300",
  },
  {
    title: "Portfolio Website",
    description: "A responsive personal portfolio showcasing my work.",
    image: "https://via.placeholder.com/300",
  },
  {
    title: "Social Media App",
    description: "A social media application with real-time chat features.",
    image: "https://via.placeholder.com/300",
  },
];

const Work = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section
      ref={ref}
      id="work"
      className="py-16 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200"
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl font-bold text-center mb-12"
        >
          My Work
        </motion.h2>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.8,
                ease: "easeOut",
                delay: index * 0.2,
              }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden relative"
              whileHover={{
                scale: 1.05,
                borderBottom: "4px solid #7C3AED",
                transition: { duration: 0.3, ease: "easeInOut" },
              }}
            >
              <motion.div
                className="border-b-4 border-transparent absolute bottom-0 left-0 w-full"
                initial={{ borderBottomWidth: "0px" }}
                animate={{
                  borderBottomWidth: inView ? "4px" : "0px",
                }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              />
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>
                <button className="px-4 py-2 text-white bg-indigo-600 hover:bg-indigo-700 rounded-md">
                  View Details
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
