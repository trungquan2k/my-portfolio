import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { motion } from 'framer-motion';
import { Pagination, Autoplay } from 'swiper/modules';
import { useTheme } from '../../context/ThemeContext';
import {
  Globe,
  ExternalLink,
  Sparkles,
  Radio,
  Share2,
  Database,
  Landmark,
  ShoppingBag,
  Check,
} from 'lucide-react';

const slideVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const getDomainIcon = (title = '') => {
  const lower = title.toLowerCase();
  if (lower.includes('iot')) return Radio;
  if (lower.includes('social')) return Share2;
  if (lower.includes('data') || lower.includes('tracking')) return Database;
  if (lower.includes('bank')) return Landmark;
  if (lower.includes('e-commerce') || lower.includes('commerce')) return ShoppingBag;
  return Globe;
};

const DomainView = () => {
  const [domains, setDomains] = useState([]);
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  useEffect(() => {
    fetch('/assets/models/domain.json')
      .then((response) => response.json())
      .then((data) => setDomains(data.data))
      .catch((error) => console.error('Error loading JSON:', error));
  }, []);

  return (
    <div className="container mx-auto py-16">
      {/* Section Header */}
      <div className="mb-12 text-start">
        <div
          className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-3 tracking-wider uppercase border ${
            isDark
              ? 'bg-blue-500/10 border-blue-500/20 text-blue-400'
              : 'bg-blue-50 border-blue-200 text-blue-600'
          }`}
        >
          <Globe className="w-3.5 h-3.5" />
          Industry Expertise
        </div>
        <h1
          className={`text-4xl md:text-5xl font-extrabold tracking-tight mb-4 ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}
        >
          Domains{' '}
          <span className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 bg-clip-text text-transparent">
            Developed
          </span>
        </h1>
        <p
          className={`text-base max-w-2xl leading-relaxed ${
            isDark ? 'text-slate-400' : 'text-slate-600'
          }`}
        >
          Extensive experience designing, building, and deploying solutions across diverse domain
          verticals.
        </p>
      </div>

      {/* Swiper Slider */}
      <div className="px-1">
        <Swiper
          slidesPerView={3}
          spaceBetween={24}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          modules={[Pagination, Autoplay]}
          className="mySwiper !pb-14"
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {domains.map((item, index) => {
            const IconComponent = getDomainIcon(item.title);

            return (
              <SwiperSlide key={index} className="!h-auto">
                <motion.div
                  variants={slideVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  className={`h-full border rounded-2xl overflow-hidden transition-all duration-300 group flex flex-col justify-between ${
                    isDark
                      ? 'bg-slate-900/70 backdrop-blur-xl border-slate-800/90 hover:border-blue-500/40 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]'
                      : 'bg-white/90 border-slate-200/80 shadow-xl shadow-slate-200/60 hover:border-blue-400 hover:shadow-2xl'
                  }`}
                >
                  {/* Image Container with Gradient Overlay */}
                  <div className="relative h-48 w-full overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-t ${
                        isDark
                          ? 'from-slate-950 via-slate-950/60 to-transparent'
                          : 'from-slate-900/90 via-slate-900/40 to-transparent'
                      }`}
                    />

                    {/* Icon Badge */}
                    <div className="absolute top-4 left-4 p-2.5 rounded-xl bg-slate-900/80 backdrop-blur-md border border-slate-700/60 text-blue-400">
                      <IconComponent className="w-5 h-5" />
                    </div>

                    {/* Category Title */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors">
                        {item.title}
                      </h3>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <ul className="space-y-2.5 mb-6">
                      {item.tasks.map((task, taskIdx) => (
                        <li
                          key={taskIdx}
                          className={`flex items-start text-xs leading-relaxed group/item ${
                            isDark ? 'text-slate-300' : 'text-slate-600'
                          }`}
                        >
                          <Check className="w-3.5 h-3.5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>{task}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Footer / Action */}
                    {item.link ? (
                      <div
                        className={`pt-4 border-t ${
                          isDark ? 'border-slate-800/60' : 'border-slate-100'
                        }`}
                      >
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-500 transition-colors"
                        >
                          <span>Explore Domain Application</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    ) : (
                      <div
                        className={`pt-4 border-t flex items-center gap-1.5 text-xs ${
                          isDark
                            ? 'border-slate-800/60 text-slate-500'
                            : 'border-slate-100 text-slate-400'
                        }`}
                      >
                        <Sparkles className="w-3.5 h-3.5 text-slate-400" />
                        <span>Enterprise System Solution</span>
                      </div>
                    )}
                  </div>
                </motion.div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

      <style>{`
        .mySwiper .swiper-pagination-bullet {
          background: ${isDark ? '#475569' : '#cbd5e1'} !important;
          opacity: 0.8;
        }
        .mySwiper .swiper-pagination-bullet-active {
          background: #3b82f6 !important;
          opacity: 1;
          width: 24px;
          border-radius: 9999px;
        }
      `}</style>
    </div>
  );
};

export default DomainView;
