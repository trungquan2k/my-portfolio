import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Paragraph, {
  AppTextAlign,
  AppTextColor,
  AppTextVariant,
  ParagraphSizes,
} from '../text_custom';
const texts = ['Flutter', 'Android', 'React Native'];

const TextScroll = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="overflow-hidden w-64 h-12 flex mt-6 mb-6">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ x: '-100%', opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: '100%', opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="absolute text-xl font-bold text-blue-600"
        >
          {/* {texts[index]} */}
          <Paragraph variant={AppTextVariant.H2} align={AppTextAlign.START} mb={4}>
            {texts[index]}
          </Paragraph>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default TextScroll;
