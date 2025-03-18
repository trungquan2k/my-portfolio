import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

// Animation variants
const cardVariantsMainSkill = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  hover: { scale: 1.05, rotate: 2, transition: { duration: 0.3 } },
};
const cardVariantsSortSkill = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  hover: { scale: 1.05, rotate: -2, transition: { duration: 0.3 } },
};

const SkillView = () => {
  const [skills, setSkills] = useState({ technical_skills: [], sort_skills: [] });

  useEffect(() => {
    fetch('/assets/models/technologies.json') // Path to the JSON file in the public folder
      .then((response) => response.json())
      .then((data) => setSkills(data))
      .catch((error) => console.error('Error loading JSON:', error));
  }, []);

  return (
    <div className=" py-12 bg-white">
      <div className="container mx-auto px-4">
        {/* Main Skills Section */}
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8 underline">
          Technical Skills
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.technical_skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={cardVariantsMainSkill}
              initial="hidden"
              whileInView="visible"
              whileHover="hover" // Apply hover animation
              viewport={{ once: true, amount: 0.5 }}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg hover:bg-blue-500 transition-shadow group cursor-pointer"
            >
              <div className="text-4xl mb-4">{skill.icon}</div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-white">
                {skill.title}
              </h2>
            </motion.div>
          ))}
        </div>

        {/* Sort Skills Section */}
        <h1 className="text-4xl font-bold text-center text-gray-800 my-8 underline">Sort Skills</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.sort_skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={cardVariantsSortSkill}
              initial="hidden"
              whileInView="visible"
              whileHover="hover" // Apply hover animation
              viewport={{ once: true, amount: 0.5 }}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg hover:bg-blue-500 transition-shadow group cursor-pointer"
            >
              <div className="text-4xl mb-4">{skill.icon}</div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-white">
                {skill.title}
              </h2>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillView;
