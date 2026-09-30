import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Copy, Check, Send, Sparkles, MessageSquare } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const ContactMeView = () => {
  const [copiedType, setCopiedType] = useState(null);
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2000);
  };

  return (
    <div className="container mx-auto py-16">
      {/* Section Header */}
      <div className="mb-12 text-start">
        <div
          className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-3 tracking-wider uppercase border ${isDark
            ? 'bg-blue-500/10 border-blue-500/20 text-blue-400'
            : 'bg-blue-50 border-blue-200 text-blue-600'
            }`}
        >
          <MessageSquare className="w-3.5 h-3.5" />
          Get In Touch
        </div>
        <h1
          className={`text-4xl md:text-5xl font-extrabold tracking-tight mb-4 ${isDark ? 'text-white' : 'text-slate-900'
            }`}
        >
          Let&apos;s Work{' '}
          <span className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 bg-clip-text text-transparent">
            Together
          </span>
        </h1>
        <p
          className={`text-base max-w-2xl leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'
            }`}
        >
          I&apos;m always open to discussing new mobile development opportunities, full-stack projects,
          technical leadership, or engineering collaboration.
        </p>
      </div>

      {/* Grid Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Email Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className={`rounded-2xl p-6 md:p-8 border transition-all duration-300 group relative overflow-hidden flex flex-col justify-between ${isDark
            ? 'bg-slate-900/60 backdrop-blur-xl border-slate-800/80 hover:border-blue-500/40 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]'
            : 'bg-white/90 border-slate-200/80 shadow-xl shadow-slate-200/60 hover:border-blue-400 hover:shadow-2xl'
            }`}
        >
          <div className="absolute -right-12 -top-12 w-32 h-32 bg-blue-500/5 group-hover:bg-blue-500/15 rounded-full blur-2xl transition-colors duration-500 pointer-events-none" />

          <div>
            <div
              className={`w-12 h-12 rounded-xl border flex items-center justify-center mb-5 group-hover:scale-110 transition-transform ${isDark
                ? 'bg-blue-500/10 border-blue-500/20 text-blue-400'
                : 'bg-blue-50 border-blue-200 text-blue-600'
                }`}
            >
              <Mail className="w-6 h-6" />
            </div>

            <h3
              className={`text-xs font-bold uppercase tracking-wider mb-1 ${isDark ? 'text-slate-400' : 'text-slate-500'
                }`}
            >
              Email Address
            </h3>
            <p
              className={`text-base font-semibold break-all mb-4 ${isDark ? 'text-white' : 'text-slate-900'
                }`}
            >
              qhoang.devvietnam@gmail.com
            </p>
          </div>

          <div
            className={`flex items-center gap-3 pt-4 border-t ${isDark ? 'border-slate-800/60' : 'border-slate-100'
              }`}
          >
            <a
              href="mailto:qhoang.devvietnam@gmail.com"
              className={`flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border text-xs font-semibold transition-all ${isDark
                ? 'bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 border-blue-500/30'
                : 'bg-blue-50 hover:bg-blue-100 text-blue-600 border-blue-200'
                }`}
            >
              <Send className="w-3.5 h-3.5" />
              <span>Send Mail</span>
            </a>

            <button
              onClick={() => handleCopy('qhoang.devvietnam@gmail.com', 'email')}
              title="Copy Email"
              className={`p-2.5 rounded-xl border text-xs font-medium transition-colors ${isDark
                ? 'bg-slate-800/80 hover:bg-slate-800 border-slate-700 text-slate-300 hover:text-white'
                : 'bg-slate-100 hover:bg-slate-200 border-slate-200 text-slate-700'
                }`}
            >
              {copiedType === 'email' ? (
                <Check className="w-4 h-4 text-emerald-500" />
              ) : (
                <Copy className="w-4 h-4" />
              )}
            </button>
          </div>
        </motion.div>

        {/* Phone Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className={`rounded-2xl p-6 md:p-8 border transition-all duration-300 group relative overflow-hidden flex flex-col justify-between ${isDark
            ? 'bg-slate-900/60 backdrop-blur-xl border-slate-800/80 hover:border-indigo-500/40 hover:shadow-[0_0_30px_rgba(99,102,241,0.15)]'
            : 'bg-white/90 border-slate-200/80 shadow-xl shadow-slate-200/60 hover:border-indigo-400 hover:shadow-2xl'
            }`}
        >
          <div className="absolute -right-12 -top-12 w-32 h-32 bg-indigo-500/5 group-hover:bg-indigo-500/15 rounded-full blur-2xl transition-colors duration-500 pointer-events-none" />

          <div>
            <div
              className={`w-12 h-12 rounded-xl border flex items-center justify-center mb-5 group-hover:scale-110 transition-transform ${isDark
                ? 'bg-indigo-500/10 border-indigo-500/20 text-indigo-400'
                : 'bg-indigo-50 border-indigo-200 text-indigo-600'
                }`}
            >
              <Phone className="w-6 h-6" />
            </div>

            <h3
              className={`text-xs font-bold uppercase tracking-wider mb-1 ${isDark ? 'text-slate-400' : 'text-slate-500'
                }`}
            >
              Phone / Mobile
            </h3>
            <p
              className={`text-base font-semibold mb-4 ${isDark ? 'text-white' : 'text-slate-900'
                }`}
            >
              (+84) 355 739 816
            </p>
          </div>

          <div
            className={`flex items-center gap-3 pt-4 border-t ${isDark ? 'border-slate-800/60' : 'border-slate-100'
              }`}
          >
            <a
              href="tel:+84355739816"
              className={`flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border text-xs font-semibold transition-all ${isDark
                ? 'bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-400 border-indigo-500/30'
                : 'bg-indigo-50 hover:bg-indigo-100 text-indigo-600 border-indigo-200'
                }`}
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call Direct</span>
            </a>

            <button
              onClick={() => handleCopy('+84355739816', 'phone')}
              title="Copy Phone"
              className={`p-2.5 rounded-xl border text-xs font-medium transition-colors ${isDark
                ? 'bg-slate-800/80 hover:bg-slate-800 border-slate-700 text-slate-300 hover:text-white'
                : 'bg-slate-100 hover:bg-slate-200 border-slate-200 text-slate-700'
                }`}
            >
              {copiedType === 'phone' ? (
                <Check className="w-4 h-4 text-emerald-500" />
              ) : (
                <Copy className="w-4 h-4" />
              )}
            </button>
          </div>
        </motion.div>

        {/* Location & Status Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className={`rounded-2xl p-6 md:p-8 border transition-all duration-300 group relative overflow-hidden flex flex-col justify-between ${isDark
            ? 'bg-slate-900/60 backdrop-blur-xl border-slate-800/80 hover:border-purple-500/40 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]'
            : 'bg-white/90 border-slate-200/80 shadow-xl shadow-slate-200/60 hover:border-purple-400 hover:shadow-2xl'
            }`}
        >
          <div className="absolute -right-12 -top-12 w-32 h-32 bg-purple-500/5 group-hover:bg-purple-500/15 rounded-full blur-2xl transition-colors duration-500 pointer-events-none" />

          <div>
            <div
              className={`w-12 h-12 rounded-xl border flex items-center justify-center mb-5 group-hover:scale-110 transition-transform ${isDark
                ? 'bg-purple-500/10 border-purple-500/20 text-purple-400'
                : 'bg-purple-50 border-purple-200 text-purple-600'
                }`}
            >
              <MapPin className="w-6 h-6" />
            </div>

            <h3
              className={`text-xs font-bold uppercase tracking-wider mb-1 ${isDark ? 'text-slate-400' : 'text-slate-500'
                }`}
            >
              Location & Availability
            </h3>
            <p
              className={`text-base font-semibold mb-2 ${isDark ? 'text-white' : 'text-slate-900'
                }`}
            >
              Ho Chi Minh City, Vietnam
            </p>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Available for Remote & On-site
            </div>
          </div>

          <div
            className={`pt-4 border-t flex items-center justify-between text-xs ${isDark ? 'border-slate-800/60 text-slate-400' : 'border-slate-100 text-slate-500'
              }`}
          >
            <span className="flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-purple-500" /> Fast response time
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactMeView;
