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
    fetch('/assets/models/experiences.json')
      .then((response) => response.json())
      .then((data) => setData(data.data))
      .catch((error) => console.error('Error loading JSON:', error));
  }, []);

  return (
    <div className="container flex flex-col justify-center py-12">
      <div className="text-start w-full">
        <Paragraph
          variant={AppTextVariant.H1}
          align={AppTextAlign.START}
          mb={10}
          className="underline"
        >
          Experiences
        </Paragraph>
        <div className="space-y-10">
          {data.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true, amount: 0.2 }}
              className="bg-white rounded-xl shadow-md p-8 hover:shadow-xl transition-all border border-gray-100"
            >
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-4">
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-1">{item.title}</h2>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-blue-600 font-semibold">{item.company}</span>
                    <span className="text-gray-300">•</span>
                    <span className="text-gray-500 text-sm italic">{item.type}</span>
                  </div>
                </div>
                <div className="text-gray-500 font-medium text-sm bg-gray-50 px-4 py-1.5 rounded-full border border-gray-200">
                  {formatDateRange(item.startDate, item.endDate)}
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {item.language.split(',').map((lang, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-blue-50 text-blue-700 text-[11px] font-bold rounded border border-blue-100 uppercase tracking-tight"
                  >
                    {lang.trim()}
                  </span>
                ))}
              </div>

              <ul className="space-y-3 mb-6">
                {item.description.map((desc, i) => (
                  <li key={i} className="flex items-start text-gray-600 text-sm leading-relaxed">
                    <span className="text-blue-500 mr-3 mt-1.5 text-[10px]">●</span>
                    <span>{desc}</span>
                  </li>
                ))}
              </ul>

              <div className="flex items-center justify-between pt-6 border-t border-gray-50">
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-blue-700 hover:text-blue-800 font-bold text-sm transition-colors"
                >
                  {item.titleRefer}
                  <FaShareSquare className="ml-2 text-xs" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceView;
