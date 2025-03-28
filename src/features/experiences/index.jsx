import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { formatDateRange } from '/src/utils/date';
import { cardVariants } from './exp.type';
import Paragraph, {
  AppTextAlign,
  AppTextColor,
  AppTextVariant,
} from '../../components/ui/text_custom';
import { FaShareSquare } from 'react-icons/fa';

const ExperienceView = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/assets/models/experiences.json') // Path to the JSON file in the public folder
      .then((response) => response.json())
      .then((data) => setData(data.data))
      .catch((error) => console.error('Error loading JSON:', error));
  }, []);

  return (
    <div className="container pt-24 flex flex-col justify-center">
      <div className="text-start w-full">
        <Paragraph
          variant={AppTextVariant.H1}
          align={AppTextAlign.START}
          mb={10}
          className="underline"
        >
          Experiences
        </Paragraph>
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
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between">
                <div className="flex flex-col sm:flex-row text-left">
                  <h2 className="text-2xl font-bold text-gray-800">{item.title} </h2>
                </div>
                <p className="text-gray-600 mt-2 sm:mt-0">
                  {formatDateRange(item.startDate, item.endDate)}
                </p>
              </div>
              <Paragraph
                variant={AppTextVariant.P}
                align={AppTextAlign.START}
                color={AppTextColor.LIGHT}
                className="italic"
              >
                {item.company}
              </Paragraph>
              <p className="text-gray-600 text-justify  mb-4">{item.type}</p>
              <ul className="text-justify pb-3">
                {item.description.map((desc, i) => (
                  <li key={i} className="text-md">
                    {desc}
                  </li>
                ))}
              </ul>
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="sm:text-sm text-blue-800 sm:ml flex items-center "
              >
                View Reference
                <FaShareSquare className="text-sm text-white-600 ml-2" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceView;
