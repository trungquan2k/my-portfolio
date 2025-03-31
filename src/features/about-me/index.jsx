import { useEffect, useState } from 'react';
import { FaDownload } from 'react-icons/fa';
import Paragraph from '../../components/ui/text_custom';
import { AppButton } from '../../components/ui/button-custom';
const AboutMe = () => {
  const [yearGraduation, setYearGraduation] = useState(new Date().getFullYear() - 2022);

  useEffect(() => {
    const interval = setInterval(() => {
      setYearGraduation(new Date().getFullYear() - 2022);
    }, 1000 * 60 * 60 * 24); // Update every day

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  const onButtonClick = () => {
    const pdfUrl = '/assets/pdf/cv_quandev_mobile.pdf';
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = '[Mobile Developer] Hoang Trung Quan.pdf'; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>
      <div className="flex flex-col lg:flex-row items-center justify-between">
        {/* Text Content */}
        <div className="text-center lg:text-left lg:w-1/1">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-10">
            I’m <span className="text-blue-600">Hoang Trung Quan</span>
          </h1>
          <Paragraph align="start" className="mb-4">
            I’m a passionate software developer with expertise in mobile and web development. With
            {yearGraduation - 1}+ years of experience, I’ve worked on various projects ranging from
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

        {/* Image */}
        <img
          src="/assets/images/my_profile.png"
          className="w-48 h-48 lg:w-64 lg:h-64 xl:w-80 xl:h-80 transition-all duration-300 ease-in-out rounded-full border-4 border-gray-300 shadow-lg mt-8 lg:mt-0"
          alt="My profile"
        />
      </div>
    </div>
  );
};

export default AboutMe;
