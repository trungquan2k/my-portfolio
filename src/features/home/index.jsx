import { motion } from 'framer-motion';
import { useEffect, useState, useCallback } from 'react';
import Paragraph, {
  AppTextAlign,
  AppTextColor,
  AppTextVariant,
  ParagraphSizes,
} from '../../components/ui/text_custom';
import TextScroll from '../../components/ui/text-scroll';
import { AppButton, ButtonVariants } from '../../components/ui/button-custom';
import { cardVariants } from './home.types';

const HomeView = () => {
  const [data, setData] = useState([]);
  const [yearGraduation, setYearGraduation] = useState(0);

  useEffect(() => {
    const calculateYearGraduation = () => {
      const graduationDate = new Date(2022, 0, 1);
      const today = new Date();
      const diffInTime = today.getTime() - graduationDate.getTime();
      const diffInYears = diffInTime / (1000 * 60 * 60 * 24 * 365.25);
      setYearGraduation(Number(diffInYears.toFixed(0)));
    };

    calculateYearGraduation();

    const interval = setInterval(() => {
      calculateYearGraduation();
    }, 1000 * 60 * 60 * 24);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    fetch('/assets/models/about-me.json') // Path to the JSON file in the public folder
      .then((response) => response.json())
      .then((data) => {
        const updatedData = data.data.map((item) => {
          if (item.key === 'Years of experience') {
            return { ...item, value: `${yearGraduation - 1}+` };
          }
          return item;
        });
        setData(updatedData);
      })
      .catch((error) => console.error('Error loading JSON:', error));
  }, [yearGraduation - 1]);

  const handleScroll = useCallback((event) => {
    event.preventDefault();
    const section = document.querySelector('#project');

    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: 'smooth',
      });
      window.history.pushState(null, null, '#project');
    }
  }, []);
  return (
    <div className="container pt-40  flex flex-col justify-center ">
      <div className="text-start w-full">
        <Paragraph
          variant={AppTextVariant.H1}
          align={AppTextAlign.START}
          size={ParagraphSizes.XXXL}
          mb={6}
        >
          Mobile Developer
        </Paragraph>
        <TextScroll></TextScroll>
        {/* <Paragraph variant={AppTextVariant.H4} align={AppTextAlign.START} mb={4}>
          Flutter, Android, React Native
        </Paragraph> */}

        <Paragraph align="start" className="max-w-xl pb-10">
          Passionate about creating beautiful and functional digital experiences with over +
          {yearGraduation - 1} years of expertise in mobile application.
        </Paragraph>

        <AppButton
          variants={ButtonVariants.PRIMARY}
          className="mb-10"
          onClick={(e) => handleScroll(e)}
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
