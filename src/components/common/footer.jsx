import { useTheme } from '../../context/ThemeContext';

const Footer = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <footer
      className={`py-6 mt-12 transition-colors duration-300 border-t ${
        isDark
          ? 'bg-slate-900 border-slate-800 text-slate-400'
          : 'bg-white border-slate-200 text-slate-600'
      }`}
    >
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm">© Copyright 2022 | Make by QuanDev | All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
