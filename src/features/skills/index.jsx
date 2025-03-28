import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Paragraph, { AppTextAlign, AppTextVariant } from '../../components/ui/text_custom';
import { cardVariantsMainSkill, cardVariantsSortSkill } from './skill.types';
// Animation variants

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

        <Paragraph
          variant={AppTextVariant.H1}
          align={AppTextAlign.START}
          mb={10}
          className="underline"
        >
          Technical Skills
        </Paragraph>
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
