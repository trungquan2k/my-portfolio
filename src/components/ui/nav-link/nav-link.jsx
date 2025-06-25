import PropTypes from 'prop-types';
import clsx from 'clsx';

const NavLink = ({ href, children, className, onClick }) => {
  return (
    <a
      href={href}
      onClick={onClick} // Optional: handle click events if needed
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
  href: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

export default NavLink;
