import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Paragraph, {
  AppTextAlign,
  AppTextColor,
  AppTextVariant,
  ParagraphSizes,
} from '../../components/ui/text_custom';
import { AppButton, ButtonVariants } from '../../components/ui/button-custom';
import { cardVariants } from './home.types';

const HomeView = () => {
  const [data, setData] = useState([]);
  const [yearGraduation, setYearGraduation] = useState(new Date().getFullYear() - 2022);
  useEffect(() => {
    const interval = setInterval(() => {
      setYearGraduation(new Date().getFullYear() - 2022);
    }, 1000 * 60 * 60 * 24); // Update every day

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  useEffect(() => {
    fetch('/assets/models/about-me.json') // Path to the JSON file in the public folder
      .then((response) => response.json())
      .then((data) => setData(data.data))
      .catch((error) => console.error('Error loading JSON:', error));
  }, []);

  const handleScroll = useCallback((event, targetId) => {
    event.preventDefault();
    const section = document.querySelector(targetId);

    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: 'smooth',
      });
      window.history.pushState(null, null, targetId);
    }
  }, []);
  return (
    <div className="container pt-40 pb-24  flex flex-col justify-center ">
      <div className="text-start w-full">
        <Paragraph
          variant={AppTextVariant.H1}
          align={AppTextAlign.START}
          size={ParagraphSizes.XXXL}
          mb={6}
        >
          Mobile Developer
        </Paragraph>
        <Paragraph variant={AppTextVariant.H4} align={AppTextAlign.START} mb={4}>
          Flutter + React Native
        </Paragraph>

        <Paragraph align="start" className="max-w-xl pb-10">
          Passionate about creating beautiful and functional digital experiences with over +
          {yearGraduation - 1} years of expertise in mobile application.
        </Paragraph>

        <AppButton
          variants={ButtonVariants.PRIMARY}
          className="mb-10"
          onClick={(e) => handleScroll(e, '#project')}
        >
          View Projects
        </AppButton>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
          {data.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover" // Apply hover animation
              viewport={{ once: true, amount: 0.5 }}
              className="bg-gray-100 p-6 rounded-lg shadow-md transition-shadow cursor-pointer"
            >
              <Paragraph
                variant={AppTextVariant.H2}
                align={AppTextAlign.CENTER}
                color={AppTextColor.PRIMARY}
              >
                {item.value}
              </Paragraph>
              <Paragraph
                variant={AppTextVariant.P}
                align={AppTextAlign.CENTER}
                color={AppTextColor.DARK}
              >
                {item.key}
              </Paragraph>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeView;
