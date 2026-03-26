import { useState, useEffect, useCallback, useMemo } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import NavLink from '../ui/nav-link/nav-link';
import TabLink from '../ui/link/tab-link';
import { throttle } from 'lodash';
import {
  Bars3Icon,
  HomeIcon,
  BriefcaseIcon,
  CogIcon,
  FolderIcon,
  EnvelopeIcon,
  UserIcon,
} from '@heroicons/react/24/outline';
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
    }, 200);

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollY]);

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  const menus = useMemo(
    () => [
      { label: 'About me', link: '#about-me', key: 'about-me', icon: HomeIcon },
      { label: 'Experience', link: '#experience', key: 'experience', icon: BriefcaseIcon },
      { label: 'Skills', link: '#skills', key: 'skills', icon: CogIcon },
      { label: 'Project', link: '#project', key: 'project', icon: FolderIcon },
      { label: 'Contact me', link: '#contact-me', key: 'contact-me', icon: EnvelopeIcon },
    ],
    [],
  );

  const handleScroll = useCallback(
    (event, targetId) => {
      event.preventDefault();
      const section = document.querySelector(targetId);

      if (section) {
        window.scrollTo({
          top: section.offsetTop - 120,
          behavior: 'smooth',
        });
        window.history.pushState(null, null, targetId);

        // Update active tab immediately on click
        const matchingMenu = menus.find((menu) => menu.link === targetId);
        if (matchingMenu) {
          setActiveTab(matchingMenu.key);
        }
      }
    },
    [menus],
  );

  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const options = {
      root: null,
      rootMargin: '-10% 0px -40% 0px', // More sensitive to current section
      threshold: [0.1, 0.5],
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio > 0.1) {
          const sectionId = entry.target.id;
          const matchingMenu = menus.find(
            (menu) => menu.link === `#${sectionId}` || menu.key === sectionId,
          );

          if (matchingMenu) {
            setActiveTab(matchingMenu.key);
          }
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
  }, [menus]);

  return (
    <header className="z-10 fixed top-0 left-1/2 transform -translate-x-1/2 mt-6" role="banner">
      <div className="bg-gray-900/80 backdrop-blur-lg border border-gray-700/50 rounded-[1rem] px-4 py-4 shadow-4xl">
        <div className="flex items-center justify-between w-full">
          <div className="md:hidden">
            <a
              className="text-lg font-bold text-white hover:text-gray-300 transition-colors duration-300"
              href="/"
              onClick={(e) => handleScroll(e, '#about-me') || navigate('/')}
            >
              IAMQUAN
            </a>
          </div>
          <a
            className="absolute left-4 top-1/2 -translate-y-1/2 md:hidden text-lg font-bold text-white hover:text-gray-300 transition-colors duration-300"
            href="/"
            onClick={(e) => handleScroll(e, '#about-me') || navigate('/')}
          >
            IAMQUAN
          </a>
          <nav className="hidden md:flex items-center space-x-8">
            {menus.map((menu, index) => {
              const IconComponent = menu.icon;
              return (
                <TabLink
                  key={index}
                  href={menu.link}
                  isActive={activeTab === menu.key}
                  onClick={(e) => handleScroll(e, menu.link)}
                  className={`p-3 rounded-full transition-all duration-300 ${
                    activeTab === menu.key
                      ? 'text-white bg-green-600/80'
                      : 'text-gray-400 hover:text-white hover:bg-gray-700/50'
                  }`}
                  title={menu.label}
                >
                  <IconComponent className="h-6 w-6" />
                </TabLink>
              );
            })}
          </nav>

          <div className="md:hidden ">
            <button
              onClick={toggleModal}
              className="text-white focus:outline-none p-2 rounded-full hover:bg-gray-700/50 transition-colors duration-200"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-40 pointer-events-none">
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm pointer-events-auto"
            onClick={toggleModal}
          />
          <div className="absolute top-24 left-1/2 -translate-x-1/2 z-50 pointer-events-auto">
            <div
              className="bg-gray-900/95 backdrop-blur-xl border border-gray-700/50 
                   rounded-2xl shadow-2xl p-6 w-64"
              onClick={(e) => e.stopPropagation()}
            >
              <nav className="flex flex-col space-y-3">
                {menus.map((menu, index) => (
                  <TabLink
                    key={index}
                    href={menu.link}
                    isActive={activeTab === menu.key}
                    onClick={(e) => {
                      handleScroll(e, menu.link);
                      setIsModalOpen(false);
                    }}
                    className={`text-sm font-medium px-4 py-3 rounded-xl transition-all duration-200 ${
                      activeTab === menu.key
                        ? 'text-white bg-green-600/80'
                        : 'text-gray-300 hover:text-white hover:bg-gray-700/50'
                    }`}
                  >
                    {menu.label}
                  </TabLink>
                ))}
              </nav>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
