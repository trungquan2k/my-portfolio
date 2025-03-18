import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const NavLink = ({ href, children, className }) => {
  return (
    <a
      href={href}
      className={clsx(
        'border-2 rounded border-red-600 my-1 mr-1 p-1 transition duration-200',
        'hover:bg-blue-600 hover:text-white',
        className,
      )}
    >
      {children}
    </a>
  );
};

NavLink.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node,
  className: PropTypes.string,
};

export default NavLink;
