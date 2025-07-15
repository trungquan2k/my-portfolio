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

const DomainView = () => {
  const [domains, setSetDomains] = useState([]);

  useEffect(() => {
    fetch('/assets/models/domain.json') // Path to the JSON file in the public folder
      .then((response) => response.json())
      .then((data) => setSetDomains(data.data))
      .catch((error) => console.error('Error loading JSON:', error));
  }, []);

  // return (
  //   <div onClick={() => closeModal()}>
  //     <Paragraph
  //       variant={AppTextVariant.H1}
  //       align={AppTextAlign.START}
  //       mb={10}
  //       className="underline"
  //     >
  //       Domain developed
  //     </Paragraph>
  //     <div className="container mx-auto px-4">
  //       <Swiper
  //         slidesPerView={3} // Number of slides visible at once
  //         spaceBetween={20} // 10px gap between slides
  //         pagination={{ clickable: true }}
  //         navigation={true}
  //         autoplay={{ delay: 3000 }}
  //         modules={[Pagination, Autoplay]}
  //         className="mySwiper"
  //         breakpoints={{
  //           // Responsive breakpoints
  //           320: {
  //             slidesPerView: 1,
  //           },
  //           768: {
  //             slidesPerView: 2,
  //           },
  //           1024: {
  //             slidesPerView: 3,
  //           },
  //         }}
  //       >
  //         {domains.map((item, index) => (
  //           <SwiperSlide key={index}>
  //             <motion.div
  //               variants={slideVariants}
  //               initial="hidden"
  //               whileInView="visible"
  //               whileHover="hover"
  //               viewport={{ once: true, amount: 0.5 }}
  //               className="relative rounded-lg shadow-md h-full flex flex-col text-center"
  //               style={{
  //                 backgroundImage: `url(${item.image})`,
  //                 backgroundSize: 'cover',
  //                 backgroundPosition: 'center',
  //               }}
  //             >
  //               {/* Overlay to improve text readability */}
  //               <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>
  //               <div className="relative z-10 text-white p-6">
  //                 <h2 className="text-2xl font-bold mb-4">{item.title}</h2>
  //                 {item.tasks.map((element, index) => (
  //                   <p key={index} className="text-lg line-clamp-2 justify-start text-start">
  //                     - {element}
  //                   </p>
  //                 ))}
  //               </div>
  //             </motion.div>
  //           </SwiperSlide>
  //         ))}
  //       </Swiper>
  //     </div>
  //   </div>
  // );
  return (
    <div onClick={() => closeModal()}>
      <Paragraph
        variant={AppTextVariant.H1}
        align={AppTextAlign.START}
        mb={10}
        className="underline"
      >
        Domain developed
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
          watchSlidesProgress={true}
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
          {domains.map((item, index) => (
            <SwiperSlide key={index}>
              <motion.div
                variants={slideVariants}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: true, amount: 0.5 }}
                className="relative rounded-lg shadow-md min-h-[400px] flex flex-col text-center"
                style={{
                  backgroundImage: `url(${item.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                {/* Overlay to improve text readability */}
                <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>
                <div className="relative z-10 text-white p-6 flex flex-col h-full min-h-[400px]">
                  <h2 className="text-2xl font-bold mb-4 flex-shrink-0">{item.title}</h2>
                  <div className="flex-grow overflow-y-auto">
                    {item.tasks.map((element, index) => (
                      <p key={index} className="text-lg text-start mb-2">
                        - {element}
                      </p>
                    ))}
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* CSS để đảm bảo tất cả slides có cùng chiều cao */}
      <style jsx>{`
        .mySwiper .swiper-wrapper {
          align-items: stretch !important;
        }

        .mySwiper .swiper-slide {
          height: auto !important;
          display: flex !important;
        }

        /* Tất cả slides sẽ có chiều cao bằng slide cao nhất */
        .mySwiper .swiper-slide > div {
          flex: 1 !important;
          display: flex !important;
          flex-direction: column !important;
        }
      `}</style>
    </div>
  );
};

export default DomainView;
