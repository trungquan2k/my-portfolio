import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { formatDateRange } from '/src/utils/date';
import { cardVariants } from './exp.type';
import { useTheme } from '../../context/ThemeContext';
import {
  Briefcase,
  Calendar,
  ExternalLink,
  Sparkles,
  TrendingUp,
  Rocket,
  Cpu,
  Layers,
} from 'lucide-react';

const renderHighlightBadges = (description = [], isDark = true) => {
  const badges = [];
  const fullText = description.join(' ').toLowerCase();

  if (fullText.includes('ai-assisted') || fullText.includes('ai tools')) {
    badges.push({
      label: 'AI-Assisted Workflow',
      icon: Sparkles,
      color: isDark
        ? 'bg-purple-500/10 text-purple-300 border-purple-500/30'
        : 'bg-purple-50 text-purple-700 border-purple-200',
    });
  }
  if (fullText.includes('5%') || fullText.includes('operational costs')) {
    badges.push({
      label: '5% Cost Reduction',
      icon: TrendingUp,
      color: isDark
        ? 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30'
        : 'bg-emerald-50 text-emerald-700 border-emerald-200',
    });
  }
  if (fullText.includes('4+') || fullText.includes('mobile products')) {
    badges.push({
      label: '4+ E2E Mobile Products',
      icon: Rocket,
      color: isDark
        ? 'bg-blue-500/10 text-blue-300 border-blue-500/30'
        : 'bg-blue-50 text-blue-700 border-blue-200',
    });
  }
  if (fullText.includes('iot') || fullText.includes('nfc')) {
    badges.push({
      label: 'Smart IoT & Hardware Integration',
      icon: Cpu,
      color: isDark
        ? 'bg-amber-500/10 text-amber-300 border-amber-500/30'
        : 'bg-amber-50 text-amber-700 border-amber-200',
    });
  }
  if (fullText.includes('full-stack') || fullText.includes('java')) {
    badges.push({
      label: 'Full-Stack Versatility',
      icon: Layers,
      color: isDark
        ? 'bg-cyan-500/10 text-cyan-300 border-cyan-500/30'
        : 'bg-cyan-50 text-cyan-700 border-cyan-200',
    });
  }

  if (badges.length === 0) return null;

  return (
    <div className="flex flex-wrap gap-2 mb-4">
      {badges.slice(0, 3).map((badge, idx) => {
        const Icon = badge.icon;
        return (
          <span
            key={idx}
            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border backdrop-blur-sm ${badge.color}`}
          >
            <Icon className="w-3.5 h-3.5" />
            {badge.label}
          </span>
        );
      })}
    </div>
  );
};

const ExperienceView = () => {
  const [data, setData] = useState([]);
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  useEffect(() => {
    fetch('/assets/models/experiences.json')
      .then((response) => response.json())
      .then((data) => setData(data.data))
      .catch((error) => console.error('Error loading JSON:', error));
  }, []);

  return (
    <div className="container flex flex-col justify-center py-16">
      <div className="text-start w-full">
        {/* Section Header */}
        <div className="mb-12">
          <div
            className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-3 tracking-wider uppercase border ${
              isDark
                ? 'bg-blue-500/10 border-blue-500/20 text-blue-400'
                : 'bg-blue-50 border-blue-200 text-blue-600'
            }`}
          >
            <Briefcase className="w-3.5 h-3.5" />
            Career Journey
          </div>
          <h1
            className={`text-4xl md:text-5xl font-extrabold tracking-tight mb-4 ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}
          >
            Work{' '}
            <span className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 bg-clip-text text-transparent">
              Experiences
            </span>
          </h1>
          <p
            className={`text-base max-w-2xl leading-relaxed ${
              isDark ? 'text-slate-400' : 'text-slate-600'
            }`}
          >
            Delivering high-impact mobile and full-stack solutions, leveraging AI-assisted
            workflows, and driving engineering excellence across cross-functional teams.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative pl-6 md:pl-10 space-y-12">
          {/* Vertical Glowing Line */}
          <div
            className={`absolute left-2.5 md:left-4 top-3 bottom-3 w-0.5 ${
              isDark
                ? 'bg-gradient-to-b from-blue-500 via-indigo-500/60 to-purple-500/20'
                : 'bg-gradient-to-b from-blue-400 via-indigo-400/60 to-slate-200'
            }`}
          />

          {data.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              className="relative group"
            >
              {/* Timeline Dot */}
              <div
                className={`absolute -left-6 md:-left-10 top-7 -translate-x-1/2 w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all duration-300 z-10 ${
                  isDark
                    ? 'bg-slate-950 border-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.6)] group-hover:scale-125 group-hover:border-indigo-400'
                    : 'bg-white border-blue-500 shadow-md group-hover:scale-125 group-hover:border-indigo-500'
                }`}
              >
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
              </div>

              {/* Glassmorphic / Light Card */}
              <div
                className={`rounded-2xl p-6 md:p-8 border transition-all duration-300 group relative overflow-hidden ${
                  isDark
                    ? 'bg-slate-900/60 backdrop-blur-xl border-slate-800/80 hover:border-blue-500/40 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]'
                    : 'bg-white/90 border-slate-200/80 shadow-xl shadow-slate-200/60 hover:border-blue-400 hover:shadow-2xl'
                }`}
              >
                {/* Background Ambient Glow */}
                <div className="absolute -right-20 -top-20 w-48 h-48 bg-blue-500/5 group-hover:bg-blue-500/10 rounded-full blur-3xl transition-colors duration-500 pointer-events-none" />

                {/* Highlight Badges */}
                {renderHighlightBadges(item.description, isDark)}

                {/* Header Info */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-5">
                  <div>
                    <h2
                      className={`text-xl md:text-2xl font-bold transition-colors ${
                        isDark
                          ? 'text-white group-hover:text-blue-300'
                          : 'text-slate-900 group-hover:text-blue-600'
                      }`}
                    >
                      {item.title}
                    </h2>
                    <div className="flex flex-wrap items-center gap-2 mt-1.5">
                      <span className="text-blue-600 dark:text-blue-400 font-semibold">
                        {item.company}
                      </span>
                      <span className={isDark ? 'text-slate-600' : 'text-slate-300'}>•</span>
                      <span
                        className={`text-xs font-medium px-2.5 py-0.5 rounded-full border ${
                          isDark
                            ? 'text-slate-300 bg-slate-800/80 border-slate-700/60'
                            : 'text-slate-600 bg-slate-100 border-slate-200'
                        }`}
                      >
                        {item.type}
                      </span>
                    </div>
                  </div>

                  {/* Date Badge */}
                  <div
                    className={`self-start md:self-auto flex items-center gap-1.5 text-xs font-semibold px-3.5 py-1.5 rounded-full border backdrop-blur-md shadow-inner ${
                      isDark
                        ? 'text-slate-300 bg-slate-800/90 border-slate-700/80'
                        : 'text-slate-700 bg-slate-100 border-slate-200'
                    }`}
                  >
                    <Calendar className="w-3.5 h-3.5 text-blue-500" />
                    {formatDateRange(item.startDate, item.endDate)}
                  </div>
                </div>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {item.language.split(',').map((lang, i) => (
                    <span
                      key={i}
                      className={`px-2.5 py-1 text-xs font-mono rounded-lg border transition-all duration-200 ${
                        isDark
                          ? 'bg-slate-800/60 hover:bg-slate-800 text-slate-300 hover:text-blue-300 border-slate-700/50 hover:border-blue-500/30'
                          : 'bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-blue-600 border-slate-200'
                      }`}
                    >
                      {lang.trim()}
                    </span>
                  ))}
                </div>

                {/* Bullet Points */}
                <ul className="space-y-3 mb-6">
                  {item.description.map((desc, i) => (
                    <li
                      key={i}
                      className={`flex items-start text-sm leading-relaxed group/item ${
                        isDark ? 'text-slate-300' : 'text-slate-600'
                      }`}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-3 mt-2 flex-shrink-0 group-hover/item:scale-150 transition-transform" />
                      <span>{desc}</span>
                    </li>
                  ))}
                </ul>

                {/* External Link */}
                {item.link && (
                  <div
                    className={`pt-4 border-t flex items-center justify-between ${
                      isDark ? 'border-slate-800/60' : 'border-slate-100'
                    }`}
                  >
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold border transition-all group/btn ${
                        isDark
                          ? 'bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 border-blue-500/30 hover:border-blue-500/60'
                          : 'bg-blue-50 hover:bg-blue-100 text-blue-600 border-blue-200'
                      }`}
                    >
                      <span>{item.titleRefer || 'View Project'}</span>
                      <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                    </a>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceView;
