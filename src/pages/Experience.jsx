import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";
import SkillBar from "./SkillBar";

const experiences = [
  {
    title: "Senior Frontend Developer",
    company: "IVL Technologies",
    period: "2021 - 2023",
    description:
      "Leading frontend development team, implementing React best practices, and mentoring junior developers.",
  },
  {
    title: "Frontend Developer",
    company: "Xoriant Solutions",
    period: "2017 - 2021",
    description:
      "Developed responsive web applications using React and modern JavaScript.",
  },
  {
    title: "Junior Developer",
    company: "Globant",
    period: "2015 - 2017",
    description: "Started career with Angular and JavaScript development.",
  },
];

const skills = [
  { name: "HTML/CSS", level: 92 },
  { name: "Tailwind CSS", level: 80 },
  { name: "JavaScript", level: 90 },
  { name: "React.js", level: 95 },
  { name: "Redux", level: 85 },
  { name: "TypeScript", level: 85 },
  { name: "Git", level: 88 },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Experience & Skills
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Work History
            </h3>
            {experiences.map((exp, index) => (
              <ExperienceCard key={index} {...exp} index={index} />
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Skills
            </h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <SkillBar key={index} {...skill} index={index} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default Experience;
