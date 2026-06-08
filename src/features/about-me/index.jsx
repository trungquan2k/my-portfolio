import { useEffect, useState } from 'react';
import { FaDownload } from 'react-icons/fa';
import Paragraph from '../../components/ui/text_custom';
import { AppButton } from '@/components/ui/button-custom';
const AboutMe = () => {
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

    const interval = setInterval(
      () => {
        calculateYearGraduation();
      },
      1000 * 60 * 60 * 24,
    );

    return () => clearInterval(interval);
  }, []);

  const onButtonClick = () => {
    const pdfUrl = '/assets/pdf/[Mobile Developer]Hoang_Trung_Quan.pdf';
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = '[Mobile Developer]Hoang_Trung_Quan.pdf'; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>
      <div className="flex flex-col lg:flex-row items-center justify-between py-12 ">
        {/* Text Content */}
        <div className="text-center lg:text-left lg:flex-1 pr-0 lg:pr-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-10">
            I’m <span className="text-blue-600">Hoang Trung Quan</span>
          </h1>
          <Paragraph align="start" className="mb-4">
            I’m a passionate software developer with expertise in mobile and web development. With +
            {yearGraduation} years of experience, I’ve worked on various projects ranging from
            enterprise applications to innovative startups. I specialize in creating user-centric
            solutions that combine beautiful design with efficient functionality.
          </Paragraph>
          <Paragraph align="start" className="mb-10">
            My journey in technology has equipped me with a deep understanding of different
            platforms and frameworks, allowing me to choose the right tools for each unique project
            requirement.
          </Paragraph>
          <AppButton onClick={onButtonClick}>
            <FaDownload className="text-xl text-white-600 mr-4" />
            DOWNLOAD CV
          </AppButton>
        </div>

        <div className="flex-shrink-0 w-48 h-48 lg:w-64 lg:h-64 xl:w-80 xl:h-80 aspect-square rounded-full border-4 border-gray-300 shadow-lg mt-8 lg:mt-0 overflow-hidden transition-all duration-300 ease-in-out hover:scale-105 hover:border-blue-500 hover:shadow-2xl">
          <img
            src="/assets/images/quan.jpg"
            className="w-full h-full object-cover"
            alt="My profile"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
