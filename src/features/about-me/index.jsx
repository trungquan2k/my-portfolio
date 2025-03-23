import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  hover: { scale: 1.05, rotate: -2, transition: { duration: 0.3 } },
};
const AboutMe = () => {
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

  const onButtonClick = () => {
    const pdfUrl = '/assets/pdf/mobille_hoangtrungquan_cv.pdf';
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = '[Mobile Developer] Hoang Trung Quan.pdf'; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="bg-gray-100 pt-40 bg-white">
      <div>
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Text Content */}
          <div className="text-center lg:text-left lg:w-1/1">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-10">
              Hello, I’m <span className="text-blue-600">Hoang Trung Quan</span>
            </h1>
            <p className="text-lg lg:text-xl text-gray-600 mb-10">
              I am eager to pursue a dynamic and mobile role within an innovative company where I
              can leverage my {yearGraduation - 1}+ years of experience while continuously expanding
              my skill set. I am passionate about technology, adaptability, and problem-solving, and
              I thrive in environments that challenge me to learn and grow. I am excited to apply my
              expertise in a mobile capacity, contributing to the company’s success while developing
              into a highly valuable and versatile asset. My commitment to professional growth and
              dedication to excellence make me eager to take on new challenges and drive impactful
              results.
            </p>
            <button
              className="bg-blue-600  text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300"
              onClick={onButtonClick}
            >
              DOWNLOAD CV
            </button>
          </div>

          {/* Image */}
          <img
            src="/assets/images/my_profile.png"
            className="w-48 h-48 lg:w-64 lg:h-64 xl:w-80 xl:h-80 transition-all duration-300 ease-in-out rounded-full border-4 border-gray-300 shadow-lg mt-8 lg:mt-0"
            alt="My profile"
          />
        </div>
        {/* Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-center mt-12 mb-10">
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
              <h2 className="text-4xl font-bold text-blue-600">{item.value}</h2>
              <p className="text-gray-600">{item.key}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
