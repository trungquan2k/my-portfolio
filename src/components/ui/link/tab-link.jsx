import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
// import { BrowserRouter as Router, Routes, Route, Link, Outlet } from 'react-router-dom';

// const TabLink = ({ href, children, className, isActive }) => {
//   return (
//     <Link
//       to={href}
//       className={clsx(
//         'text-xl text-gray-700',
//         {
//           'border-b-2 border-blue-500': isActive, // Add underline if isActive is true
//         },
//         className,
//       )}
//     >
//       {children}
//     </Link>
//   );
// };

// TabLink.propTypes = {
//   href: PropTypes.string.isRequired,
//   children: PropTypes.node,
//   className: PropTypes.string,
//   isActive: PropTypes.bool,
// };

// export default TabLink;

const TabLink = ({ href, children, className, isActive, onClick }) => {
  return (
    <a
      href={href} // Keep href for accessibility
      onClick={onClick} // Trigger smooth scroll
      className={clsx(
        'text-xl text-gray-700 cursor-pointer',
        { 'border-b-2 border-blue-500': isActive }, // Active state styling
        className,
      )}
    >
      {children}
    </a>
  );
};

TabLink.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node,
  className: PropTypes.string,
  isActive: PropTypes.bool,
  onClick: PropTypes.func,
};

export default TabLink;
