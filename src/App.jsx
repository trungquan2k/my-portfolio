import MainLayout from '@/components/layout/main-layout';
// import AboutMe from '@/features/about-me';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        {/* <Route path="/" element={<AboutMe />} /> */}
        {/* <Route path="skills" element={<SkillsView />} />
        <Route path="project" element={<ProjectView />} />
        <Route path="contact-me" element={<ContactMe />} /> */}
      </Route>
    </Routes>
  );
};

export default App;
