// components/SocialLinks.tsx
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { SiZalo } from 'react-icons/si'; // Zalo icon (you can use custom svg if needed)

const SocialLinks = () => {
  return (
    <div className="fixed bottom-[50px] right-4 z-50 flex flex-col items-center space-y-4 ">
      <a
        onClick={() =>
          window.open('https://www.linkedin.com/in/hoang-trung-quan-434a002b5/', '_blank')
        }
        target="_blank"
        rel="noopener noreferrer"
        className="bg-white bg-opacity-90 text-white hover:text-blue-400 transition-transform transform hover:scale-110 border-2 rounded border-red-600 my-1 mr-1 p-2 transition duration-200"
      >
        <FaLinkedin size={24} color={'blue'} />
      </a>

      <a
        onClick={() => window.open('https://zalo.me/0355739816', '_blank')}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-white bg-opacity-90 text-white hover:text-blue-500 transition-transform transform hover:scale-110 border-2 rounded border-red-600 my-1 mr-1 p-2 transition duration-200"
      >
        <SiZalo size={24} color={'blue'} />
      </a>
      <a
        onClick={() => window.open('https://github.com/trungquan2k', '_blank')}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-white bg-opacity-90 text-white hover:text-gray-400 transition-transform transform hover:scale-110 border-2 rounded border-red-600 my-1 mr-1 p-2 transition duration-200"
      >
        <FaGithub size={24} color={'blue'} />
      </a>
    </div>
  );
};

export default SocialLinks;
