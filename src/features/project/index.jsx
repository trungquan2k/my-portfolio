import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { motion } from 'framer-motion';
import { Pagination, Autoplay } from 'swiper/modules';
import { Button } from 'antd';
import Paragraph, { AppTextAlign, AppTextVariant } from '../../components/ui/text_custom';

// Animation variants
const slideVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hover: {
    scale: 1.05,
    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
    transition: { duration: 0.3 },
  },
};

const ProjectView = () => {
  const [services, setServices] = useState([]);
  const [selectedService, setSelectedService] = useState(null);

  const openModal = (service) => {
    setSelectedService(service);
  };

  const closeModal = () => {
    if (selectedService !== null) {
      setSelectedService(null);
    }
  };
  useEffect(() => {
    fetch('/assets/models/project.json') // Path to the JSON file in the public folder
      .then((response) => response.json())
      .then((data) => setServices(data.data))
      .catch((error) => console.error('Error loading JSON:', error));
  }, []);

  return (
    <div className="py-12" onClick={() => closeModal()}>
      <Paragraph
        variant={AppTextVariant.H1}
        align={AppTextAlign.START}
        mb={10}
        className="underline"
      >
        Projects
      </Paragraph>
      <div className="container mx-auto px-4">
        <Swiper
          slidesPerView={3} // Number of slides visible at once
          spaceBetween={20} // 10px gap between slides
          pagination={{ clickable: true }}
          navigation={true}
          autoplay={{ delay: 3000 }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
          breakpoints={{
            // Responsive breakpoints
            320: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {services.map((service, index) => (
            <SwiperSlide key={index}>
              <motion.div
                variants={slideVariants}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: true, amount: 0.5 }}
                className="relative rounded-lg shadow-md h-96 flex items-end justify-center text-center"
                style={{
                  backgroundImage: `url(${service.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
                onClick={() => openModal(service)}
              >
                {/* Overlay to improve text readability */}
                <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>
                <div className="relative z-10 text-white p-6">
                  <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                  <p className="text-lg line-clamp-2">{service.description}</p>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* Modal */}
      {selectedService && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg overflow-hidden max-w-2xl w-full">
            <div className="group relative aspect-[16/9] overflow-hidden">
              {' '}
              <img
                src={selectedService.image}
                alt="Zoomable"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2">{selectedService.title}</h2>
              <p className="text-md">{selectedService.description}</p>

              <Button
                onClick={closeModal}
                className="mt-4 bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700"
              >
                Close
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectView;
