import { useState, useEffect, useCallback, useMemo } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Bars3Icon } from '@heroicons/react/24/solid';
import NavLink from '../ui/nav-link/nav-link';
import TabLink from '../ui/link/tab-link';
import { throttle } from 'lodash';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hideNav, setHideNav] = useState(false);
  const [prevScrollY, setPrevScrollY] = useState(0);
  const [activeTab, setActiveTab] = useState('');

  useEffect(() => {
    const handleScroll = throttle(() => {
      if (window.scrollY > prevScrollY) {
        setHideNav(true);
      } else {
        setHideNav(false);
      }
      setPrevScrollY(window.scrollY);
    }, 200); // Throttle to 200ms

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollY]);

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  const menus = useMemo(
    () => [
      { label: 'About me', link: '#about-me', key: 'about-me' },
      { label: 'Experience', link: '#experience', key: 'experience' },
      { label: 'Skills', link: '#skills', key: 'skills' },
      { label: 'Project', link: '#project', key: 'project' },
      { label: 'Contact me', link: '#contact-me', key: 'contact-me' },
    ],
    [],
  );

  const handleScroll = useCallback((event, targetId) => {
    event.preventDefault();
    const section = document.querySelector(targetId);

    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: 'smooth',
      });
      window.history.pushState(null, null, targetId);
    }
  }, []);
  // Intersection Observer to detect active section
  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const options = {
      root: null,
      rootMargin: '-20% 0px -20% 0px',
      threshold: [0.25, 0.5, 0.75],
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
          setActiveTab(entry.target.id);
        }
      });
    }, options);

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <header
      className={`z-10 fixed w-full bg-white ${
        hideNav ? 'shadow-md' : 'shadow-none'
      } transition-all duration-500 ${hideNav ? 'h-20 py-6' : 'h-30 py-4'}`}
      role="banner"
    >
      {/* Entire Header Content Inside */}
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a
            className="text-xl font-semibold text-gray-800"
            href="/"
            onClick={(e) => handleScroll(e, '#about-me') || navigate('/')}
          >
            IAMQUAN
          </a>

          {/* Hamburger Icon (Mobile Only) */}
          <div className="md:hidden space-x-4">
            <button onClick={toggleModal} className="text-gray-700 focus:outline-none">
              <Bars3Icon className="h-6 w-6" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex space-x-14">
            {menus.map((menu, index) => (
              <TabLink
                key={index}
                href={menu.link} // Keep href for accessibility
                isActive={activeTab === menu.key}
                onClick={(e) => handleScroll(e, menu.link)}
              >
                {menu.label}
              </TabLink>
            ))}
          </nav>
        </div>

        {/* Social Links (Hide on Scroll) */}
        <div
          className={`flex justify-end transition-all duration-500 hidden md:flex ${
            hideNav ? '-translate-y-5 opacity-0 pointer-events-none' : 'translate-y-0 opacity-100'
          }`}
        >
          <NavLink href="https://www.linkedin.com/in/hoang-trung-quan-434a002b5/">Linkedin</NavLink>
          <p className="mx-2"></p>
          <NavLink href="https://github.com/trungquan2k">Github</NavLink>
        </div>
      </div>

      {/* Mobile Menu Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50" onClick={toggleModal}>
          <div className="fixed inset-y-0 right-0 w-64 bg-white shadow-lg p-6">
            <nav className="flex flex-col space-y-4">
              {menus.map((menu, index) => (
                <TabLink
                  key={index}
                  href={menu.link} // Keep href for accessibility
                  isActive={location.hash === menu.link}
                  onClick={(e) => handleScroll(e, menu.link)}
                >
                  {menu.label}
                </TabLink>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
