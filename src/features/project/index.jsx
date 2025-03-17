import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { motion } from 'framer-motion';
import { Pagination, Autoplay } from 'swiper/modules';

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

  useEffect(() => {
    fetch('/src/assets/models/project.json') // Path to the JSON file in the public folder
      .then((response) => response.json())
      .then((data) => setServices(data.data))
      .catch((error) => console.error('Error loading JSON:', error));
  }, []);

  return (
    <div className="py-12">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8 underline">My Projects</h1>
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
              slidesPerView: 1, // 1 slide on small screens
            },
            768: {
              slidesPerView: 2, // 2 slides on tablets
            },
            1024: {
              slidesPerView: 3, // 3 slides on desktops
            },
          }}
        >
          {services.map((service) => (
            <SwiperSlide key={service.id}>
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
              >
                {/* Overlay to improve text readability */}
                <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>
                <div className="relative z-10 text-white p-6">
                  <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                  <p className="text-lg">{service.description}</p>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ProjectView;
