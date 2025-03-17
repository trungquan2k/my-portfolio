import useLocalStorage from '@/hooks/useLocalStorage';
import { setProfile } from '@/redux/globalSlice';
import clsx from 'clsx';
import { House, LogOut, Menu, PackageOpen, Users } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { removeLocalStorage } = useLocalStorage();

  const menus = [
    {
      label: 'Trang chủ',
      icon: <House width={24} height={24} />,
      link: '/',
    },
    {
      label: 'Quản lý lương',
      icon: <Users width={24} height={24} />,
      link: '/salaries',
    },
    {
      label: 'Quản lý thu chi',
      icon: <Menu width={24} height={24} />,
      link: '/finances',
    },
    {
      label: 'Sổ cái',
      icon: <PackageOpen width={24} height={24} />,
      link: '/transactions',
    },
  ];

  const onLogout = () => {
    removeLocalStorage();
    navigate('/');
    dispatch(setProfile(undefined));
  };

  return (
    <div className="bg-gray-1 border-r border-gray-200 w-64 min-h-[calc(100vh-80px)] max-h-[calc(100vh-80px)] p-5 flex flex-col items-start justify-between">
      <div className="flex flex-col items-start w-full gap-3">
        {menus.map((item, index) => (
          <NavLink
            key={`menu-item-${index}`}
            className={({ isActive }) =>
              clsx(
                'flex items-center w-full h-12 gap-3 px-4 duration-300 rounded-md shadow outline-none',
                {
                  'bg-white text-primary-1 hover:bg-[#e9ecef]': !isActive,
                  'bg-primary-1 text-white': isActive,
                },
              )
            }
            to={item.link}
          >
            {item.icon}
            <span className="text-base font-medium">{item.label}</span>
          </NavLink>
        ))}
      </div>

      <button
        onClick={onLogout}
        type="button"
        className="flex items-center w-full h-12 gap-3 px-4 bg-white rounded-md shadow text-primary-1 hover:bg-[#e9ecef] outline-none duration-300"
      >
        <LogOut width={24} height={24} />
        <span className="text-base font-medium">Đăng xuất</span>
      </button>
    </div>
  );
};

export default Sidebar;
