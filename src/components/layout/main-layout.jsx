import Header from '../common/header';
import Footer from '../common/footer';
import { Loader } from 'lucide-react';
import { useSelector } from 'react-redux';
import AboutMe from '../../features/about-me';
import ExperienceView from '../../features/experiences';
import SkillsView from '../../features/skills';
import ProjectView from '../../features/project';
import ContactMeView from '../../features/contact-me';
const MainLayout = () => {
  const { loading } = useSelector((state) => state.global);

  return (
    <div className="relative w-full animate-fade-in bg-white">
      <Header />
      <div className=" w-full main-content container mx-auto px-6 z-0">
        <section id="about-me">
          <AboutMe />
        </section>
        <section id="my-experience">
          <ExperienceView />
        </section>
        <section id="skills">
          <SkillsView />
        </section>
        <section id="project">
          <ProjectView />
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
