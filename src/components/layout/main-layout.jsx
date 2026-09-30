import Header from '../common/header';
import PullLampToggle from '../common/pull-lamp-toggle';
import CustomCursor from '../common/custom_cursor';
import SocialLinks from '../common/contact_link';
import Footer from '../common/footer';
import { Loader } from 'lucide-react';
import { useSelector } from 'react-redux';
import AboutMe from '../../features/about-me';
import ExperienceView from '../../features/experiences';
import SkillsView from '../../features/skills';
import DomainView from '../../features/domains';
import ContactMeView from '../../features/contact-me';
import HomeView from '../../features/home';
import { useTheme } from '../../context/ThemeContext';
const MainLayout = () => {
  const { loading } = useSelector((state) => state.global);
  const { theme } = useTheme();

  return (
    <div
      className={`relative w-full animate-fade-in transition-colors duration-300 ${
        theme === 'dark' ? 'bg-[#18181b] text-white' : 'bg-slate-50 text-slate-900'
      }`}
    >
      <Header />
      <PullLampToggle />
      <CustomCursor />
      <SocialLinks />
      <div className="w-full main-content container mx-auto px-6 z-0">
        <section id="about-me">
          <HomeView />
          <AboutMe />
        </section>
        <section id="experience">
          <ExperienceView />
        </section>
        <section id="skills">
          <SkillsView />
        </section>
        <section id="project">
          <DomainView />
        </section>
        <section id="contact-me">
          <ContactMeView />
        </section>
      </div>
      <Footer />
      {!!loading && (
        <div className="absolute top-0 left-0 flex items-center justify-center w-full h-screen bg-black z-1000 opacity-60">
          <Loader className="text-white animate-spin" size={52} />
        </div>
      )}
    </div>
  );
};

export default MainLayout;
