import PropTypes from 'prop-types';
import clsx from 'clsx';

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
