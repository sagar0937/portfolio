import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Companies = () => {
  // Array of company names or logos
  const companies = [
    { id: 1, name: "Company A", logo: "https://via.placeholder.com/100x50" },
    { id: 2, name: "Company B", logo: "https://via.placeholder.com/100x50" },
    { id: 3, name: "Company C", logo: "https://via.placeholder.com/100x50" },
    { id: 4, name: "Company D", logo: "https://via.placeholder.com/100x50" },
  ];

  // Duplicate the array for smooth looping
  const companiesList = [...companies, ...companies];

  // Intersection Observer
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section
      id="companies"
      ref={ref}
      className="py-16 bg-gray-100 dark:bg-gray-900"
    >
      <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-gray-200 mb-8">
        Companies I’ve Worked With
      </h2>

      {/* Infinite Scrolling */}
      {/* <div className="overflow-hidden relative mb-12">
        <motion.div
          className="flex space-x-10"
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 10, // Adjust duration for speed
          }}
        >
          {companiesList.map((company, index) => (
            <div
              key={index}
              className="flex-shrink-0 flex flex-col items-center"
            >
              <img
                src={company.logo}
                alt={company.name}
                className="w-20 h-20 rounded-full shadow-md"
              />
              <p className="mt-2 text-sm text-gray-800 dark:text-gray-200">
                {company.name}
              </p>
            </div>
          ))}
        </motion.div>
      </div> */}

      {/* In-View Animation */}
      <div className="flex justify-center space-x-8">
        {companies.map((company, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{
              duration: 0.8,
              ease: "easeOut",
              delay: index * 0.2,
            }}
            className="flex flex-col items-center"
          >
            <img
              src={company.logo}
              alt={company.name}
              className="w-20 h-20 rounded-full shadow-md"
            />
            <p className="mt-2 text-sm text-gray-800 dark:text-gray-200">
              {company.name}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Companies;
