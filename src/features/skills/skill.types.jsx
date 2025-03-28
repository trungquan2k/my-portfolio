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

export { cardVariantsMainSkill, cardVariantsSortSkill };
