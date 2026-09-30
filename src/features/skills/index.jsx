import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { cardVariantsMainSkill, cardVariantsSortSkill } from './skill.types';
import { Code2, Brain, Sparkles, Cpu } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const SkillView = () => {
  const [skills, setSkills] = useState({ technical_skills: [], sort_skills: [] });
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  useEffect(() => {
    fetch('/assets/models/technologies.json')
      .then((response) => response.json())
      .then((data) => setSkills(data))
      .catch((error) => console.error('Error loading JSON:', error));
  }, []);

  return (
    <div className="container mx-auto py-16">
      {/* Section Header */}
      <div className="mb-14 text-start">
        <div
          className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-3 tracking-wider uppercase border ${
            isDark
              ? 'bg-blue-500/10 border-blue-500/20 text-blue-400'
              : 'bg-blue-50 border-blue-200 text-blue-600'
          }`}
        >
          <Cpu className="w-3.5 h-3.5" />
          Technical & Soft Skills
        </div>
        <h1
          className={`text-4xl md:text-5xl font-extrabold tracking-tight mb-4 ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}
        >
          Skills &{' '}
          <span className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 bg-clip-text text-transparent">
            Expertise
          </span>
        </h1>
        <p
          className={`text-base max-w-2xl leading-relaxed ${
            isDark ? 'text-slate-400' : 'text-slate-600'
          }`}
        >
          A comprehensive overview of my core technology stack, frameworks, tools, and key
          professional competencies.
        </p>
      </div>

      {/* Technical Skills Section */}
      <div className="mb-16">
        <div className="flex items-center gap-3 mb-8">
          <div
            className={`p-2 rounded-xl border ${
              isDark
                ? 'bg-blue-500/10 border-blue-500/20 text-blue-400'
                : 'bg-blue-50 border-blue-200 text-blue-600'
            }`}
          >
            <Code2 className="w-5 h-5" />
          </div>
          <h2
            className={`text-2xl font-bold tracking-tight ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}
          >
            Technical Stack
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.technical_skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={cardVariantsMainSkill}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true, amount: 0.2 }}
              className={`rounded-2xl p-6 border transition-all duration-300 group cursor-pointer relative overflow-hidden flex flex-col justify-between ${
                isDark
                  ? 'bg-slate-900/60 backdrop-blur-xl border-slate-800/80 hover:border-blue-500/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]'
                  : 'bg-white/90 border-slate-200/80 shadow-xl shadow-slate-200/60 hover:border-blue-400 hover:shadow-2xl'
              }`}
            >
              {/* Background Ambient Glow */}
              <div className="absolute -right-12 -top-12 w-32 h-32 bg-blue-500/5 group-hover:bg-blue-500/15 rounded-full blur-2xl transition-colors duration-500 pointer-events-none" />

              <div>
                {/* Icon Wrapper */}
                <div
                  className={`w-14 h-14 rounded-2xl border flex items-center justify-center text-3xl mb-5 group-hover:scale-110 transition-all duration-300 shadow-inner ${
                    isDark
                      ? 'bg-slate-800/80 border-slate-700/60 group-hover:border-blue-400/50 group-hover:bg-slate-800'
                      : 'bg-slate-100 border-slate-200 group-hover:border-blue-300 group-hover:bg-blue-50'
                  }`}
                >
                  {skill.icon}
                </div>

                <h3
                  className={`text-xl font-bold transition-colors mb-2 ${
                    isDark
                      ? 'text-white group-hover:text-blue-300'
                      : 'text-slate-900 group-hover:text-blue-600'
                  }`}
                >
                  {skill.title}
                </h3>

                {skill.description && (
                  <p
                    className={`text-sm leading-relaxed ${
                      isDark ? 'text-slate-400' : 'text-slate-600'
                    }`}
                  >
                    {skill.description}
                  </p>
                )}
              </div>

              {/* Bottom decorative bar */}
              <div
                className={`mt-6 pt-4 border-t flex items-center justify-between text-xs transition-colors ${
                  isDark
                    ? 'border-slate-800/60 text-slate-500 group-hover:text-blue-400/80'
                    : 'border-slate-100 text-slate-400 group-hover:text-blue-600'
                }`}
              >
                <span className="font-mono">CORE TECH</span>
                <Sparkles className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Soft Skills Section */}
      <div>
        <div className="flex items-center gap-3 mb-8">
          <div
            className={`p-2 rounded-xl border ${
              isDark
                ? 'bg-purple-500/10 border-purple-500/20 text-purple-400'
                : 'bg-purple-50 border-purple-200 text-purple-600'
            }`}
          >
            <Brain className="w-5 h-5" />
          </div>
          <h2
            className={`text-2xl font-bold tracking-tight ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}
          >
            Soft Skills & Core Competencies
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.sort_skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={cardVariantsSortSkill}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true, amount: 0.2 }}
              className={`rounded-2xl p-6 border transition-all duration-300 group cursor-pointer relative overflow-hidden flex flex-col justify-between ${
                isDark
                  ? 'bg-slate-900/60 backdrop-blur-xl border-slate-800/80 hover:border-purple-500/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]'
                  : 'bg-white/90 border-slate-200/80 shadow-xl shadow-slate-200/60 hover:border-purple-400 hover:shadow-2xl'
              }`}
            >
              {/* Background Ambient Glow */}
              <div className="absolute -right-12 -top-12 w-32 h-32 bg-purple-500/5 group-hover:bg-purple-500/15 rounded-full blur-2xl transition-colors duration-500 pointer-events-none" />

              <div>
                {/* Icon Wrapper */}
                <div
                  className={`w-14 h-14 rounded-2xl border flex items-center justify-center text-3xl mb-5 group-hover:scale-110 transition-all duration-300 shadow-inner ${
                    isDark
                      ? 'bg-slate-800/80 border-slate-700/60 group-hover:border-purple-400/50 group-hover:bg-slate-800'
                      : 'bg-slate-100 border-slate-200 group-hover:border-purple-300 group-hover:bg-purple-50'
                  }`}
                >
                  {skill.icon}
                </div>

                <h3
                  className={`text-xl font-bold transition-colors mb-2 ${
                    isDark
                      ? 'text-white group-hover:text-purple-300'
                      : 'text-slate-900 group-hover:text-purple-600'
                  }`}
                >
                  {skill.title}
                </h3>

                {skill.description && (
                  <p
                    className={`text-sm leading-relaxed ${
                      isDark ? 'text-slate-400' : 'text-slate-600'
                    }`}
                  >
                    {skill.description}
                  </p>
                )}
              </div>

              {/* Bottom decorative bar */}
              <div
                className={`mt-6 pt-4 border-t flex items-center justify-between text-xs transition-colors ${
                  isDark
                    ? 'border-slate-800/60 text-slate-500 group-hover:text-purple-400/80'
                    : 'border-slate-100 text-slate-400 group-hover:text-purple-600'
                }`}
              >
                <span className="font-mono">STRENGTH</span>
                <Sparkles className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillView;
