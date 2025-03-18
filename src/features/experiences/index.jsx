import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { formatDateRange } from '/src/utils/date';

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  hover: {
    scale: 1.05,
    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
    transition: { duration: 0.3 },
  },
};

const ExperienceView = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/assets/models/experiences.json') // Path to the JSON file in the public folder
      .then((response) => response.json())
      .then((data) => setData(data.data))
      .catch((error) => console.error('Error loading JSON:', error));
  }, []);

  return (
    <div className=" py-12">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-12 underline">
          My Experience
        </h1>
        <div className="space-y-8">
          {data.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true, amount: 0.5 }}
              className="bg-white bg-opacity-75 rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow"
            >
              {/* Inline Title and Subtitle */}
              <div className="flex items-center justify-between">
                <div className="flex ">
                  <h2 className="text-2xl font-bold text-gray-800">{item.title}</h2>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-2xl font-bold text-blue-800 ml-4"
                  >
                    Link
                  </a>
                </div>
                <p className="text-gray-600 ">{formatDateRange(item.startDate, item.endDate)}</p>
              </div>
              <p className="text-gray-600 text-justify  mb-4">{item.type}</p>
              <ul className="text-justify">
                {item.description.map((desc, i) => (
                  <li key={i} className="text-xl">
                    {desc}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceView;
