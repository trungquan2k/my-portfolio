import { useState } from 'react';
import { motion, useAnimationControls } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';

const PullLampToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';
  const [isPulling, setIsPulling] = useState(false);
  const pullControls = useAnimationControls();
  const swingControls = useAnimationControls();

  const handlePull = async () => {
    if (isPulling) return;
    setIsPulling(true);

    // 1. Sharp pull string animation
    await pullControls.start({
      y: [0, 22, -3, 0],
      transition: { duration: 0.3, ease: 'easeInOut' },
    });

    // 2. Toggle Theme
    toggleTheme();

    // 3. Dynamic reaction swing
    await swingControls.start({
      rotate: [-12, 10, -6, 3, 0],
      transition: { duration: 0.7, ease: 'easeOut' },
    });

    setIsPulling(false);
  };

  return (
    <div className="fixed top-0 right-6 md:right-16 z-50 pointer-events-auto select-none">
      {/* Whole Lamp Assembly with Reaction Swing */}
      <motion.div
        animate={swingControls}
        style={{ transformOrigin: 'top center' }}
        className="relative flex flex-col items-center"
      >
        {/* Continuous Gentle Idle Sway Wrapper */}
        <motion.div
          animate={{ rotate: [-2, 2, -2] }}
          transition={{ repeat: Infinity, duration: 4.5, ease: 'easeInOut' }}
          style={{ transformOrigin: 'top center' }}
          className="flex flex-col items-center"
        >
          {/* Ceiling Mount Base */}
          <div className="w-7 h-2 bg-gradient-to-r from-slate-700 via-slate-500 to-slate-700 rounded-b-md shadow-md" />

          {/* Cable */}
          <div
            className={`w-0.5 h-14 md:h-16 transition-colors duration-500 ${
              isDark ? 'bg-slate-600' : 'bg-amber-700/60'
            }`}
          />

          {/* Pendant Lamp Shade & Bulb Assembly */}
          <div className="relative flex flex-col items-center">
            {/* Ambient Radial Light Beam Aura */}
            {!isDark && (
              <div className="absolute top-5 w-32 h-32 bg-amber-400/25 rounded-full blur-2xl pointer-events-none animate-pulse" />
            )}

            {/* Premium Lamp Shade SVG */}
            <svg
              width="56"
              height="32"
              viewBox="0 0 64 36"
              fill="none"
              className="drop-shadow-md transition-colors duration-500"
            >
              {/* Top Socket Ring */}
              <rect x="26" y="0" width="12" height="6" rx="2" fill={isDark ? '#475569' : '#b45309'} />
              {/* Conical Shade Body */}
              <path
                d="M 8 36 L 22 6 L 42 6 L 56 36 Z"
                fill={isDark ? 'url(#darkShadeGradient)' : 'url(#lightShadeGradient)'}
                stroke={isDark ? '#475569' : '#f59e0b'}
                strokeWidth="1.5"
              />
              <defs>
                <linearGradient id="darkShadeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#1e293b" />
                  <stop offset="100%" stopColor="#0f172a" />
                </linearGradient>
                <linearGradient id="lightShadeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#fef3c7" />
                  <stop offset="100%" stopColor="#fde047" />
                </linearGradient>
              </defs>
            </svg>

            {/* Glowing Light Bulb */}
            <div
              className={`-mt-2.5 w-6 h-6 rounded-full border flex items-center justify-center transition-all duration-500 z-10 ${
                isDark
                  ? 'bg-slate-900 border-slate-700 text-blue-300 shadow-inner'
                  : 'bg-amber-300 border-amber-200 text-amber-950 shadow-[0_0_20px_rgba(251,191,36,1)] animate-pulse'
              }`}
            >
              {/* Glow filament circle */}
              <div
                className={`w-2 h-2 rounded-full ${
                  isDark ? 'bg-blue-400/80 shadow-[0_0_8px_rgba(96,165,250,0.8)]' : 'bg-amber-100 shadow-[0_0_10px_rgba(255,255,255,1)]'
                }`}
              />
            </div>

            {/* Interactive Pull String */}
            <motion.button
              onClick={handlePull}
              whileHover={{ y: 3 }}
              className="group relative flex flex-col items-center cursor-pointer focus:outline-none -mt-1 pt-1"
              title={isDark ? 'Giật dây để bật sáng (Light Mode)' : 'Giật dây để tắt đèn (Dark Mode)'}
            >
              {/* String / Cord */}
              <div
                className={`w-0.5 h-12 md:h-14 transition-colors duration-300 border-l border-dashed ${
                  isDark
                    ? 'bg-slate-500 border-slate-400 group-hover:bg-blue-400'
                    : 'bg-amber-600 border-amber-400 group-hover:bg-amber-800'
                }`}
              />

              {/* Metallic Pull Knob */}
              <motion.div
                animate={pullControls}
                className={`w-3.5 h-3.5 rounded-full border-2 transition-all duration-200 shadow-lg flex items-center justify-center ${
                  isDark
                    ? 'bg-slate-800 border-slate-400 group-hover:border-blue-400 group-hover:bg-blue-500/20 group-hover:shadow-[0_0_12px_rgba(96,165,250,0.8)]'
                    : 'bg-amber-400 border-amber-600 group-hover:bg-amber-300 group-hover:shadow-[0_0_14px_rgba(245,158,11,1)]'
                }`}
              >
                <div
                  className={`w-1 h-1 rounded-full ${
                    isDark ? 'bg-blue-400' : 'bg-amber-900'
                  }`}
                />
              </motion.div>
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default PullLampToggle;
