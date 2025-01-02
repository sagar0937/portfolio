import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import logo from "../assets/logo.webp";

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Animation runs only once when in view
    threshold: 0.2, // 20% of the section needs to be visible to trigger
  });

  return (
    <section
      ref={ref}
      id="about"
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
          About Me
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="flex justify-center"
          >
            <img
              src={logo}
              alt="Profile"
              className="w-64 h-64 md:w-72 md:h-72 rounded-full shadow-lg"
            />
          </motion.div>

          {/* Descriptive Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          >
            <p className="text-lg mb-6">
              I'm a passionate ReactJS developer with 5 years of experience
              crafting high-quality, interactive web applications. I enjoy
              solving complex problems and creating intuitive user interfaces.
            </p>
            <p className="text-lg mb-6">
              Over the years, I have collaborated with diverse teams and clients
              to deliver projects that make a difference. I specialize in
              JavaScript, ReactJS, Git, and modern tools like Tailwind CSS.
            </p>

            {/* Statistics */}
            <div className="grid grid-cols-3 gap-4 text-center">
              {[
                { title: "5+", description: "Years Experience" },
                { title: "20+", description: "Happy Clients" },
                { title: "50+", description: "Projects Delivered" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.8,
                    ease: "easeOut",
                    delay: 0.6 + index * 0.2,
                  }}
                  className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md"
                >
                  <h3 className="text-2xl font-bold">{stat.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {stat.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
