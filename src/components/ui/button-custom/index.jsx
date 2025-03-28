import PropTypes from 'prop-types';

const ButtonVariants = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  OUTLINE: 'outline',
  GHOST: 'ghost',
  DANGER: 'danger',
  SUCCESS: 'success',
  INFO: 'info',
  WARNING: 'warning',
  DARK: 'dark',
};

const ButtonSizes = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
};

const IconPositions = {
  LEFT: 'left',
  RIGHT: 'right',
};

const AppButton = ({
  children,
  className = '',
  variants,
  size = ButtonSizes.MEDIUM,
  icon,
  iconPosition = IconPositions.LEFT,
  onClick,
  disabled = false,
  fullWidth = false,
  rounded = false,
  ...props
}) => {
  // Variant styles
  const variantStyles = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800',
    secondary: 'bg-gray-600 text-white hover:bg-gray-700 active:bg-gray-800',
    outline:
      'bg-transparent border border-blue-600 text-blue-600 hover:bg-blue-50 active:bg-blue-100',
    ghost: 'bg-transparent text-blue-600 hover:bg-blue-50 active:bg-blue-100',
    danger: 'bg-red-600 text-white hover:bg-red-700 active:bg-red-800',
    success: 'bg-green-600 text-white hover:bg-green-700 active:bg-green-800',
    info: 'bg-cyan-600 text-white hover:bg-cyan-700 active:bg-cyan-800',
    warning: 'bg-amber-500 text-white hover:bg-amber-600 active:bg-amber-700',
    dark: 'bg-gray-800 text-white hover:bg-gray-900 active:bg-black',
  };

  // Size styles
  const sizeStyles = {
    small: 'px-4 py-2 text-sm',
    medium: 'px-6 py-3',
    large: 'px-8 py-4 text-lg',
  };

  // Icon spacing
  const iconSpacing = iconPosition === IconPositions.LEFT ? 'mr-3' : 'ml-3';
  const buttonVariant = variants || ButtonVariants.PRIMARY;
  // Additional styles
  const disabledStyle = disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer';
  const widthStyle = fullWidth ? 'w-full' : '';
  const roundedStyle = rounded ? 'rounded-full' : 'rounded-lg';

  return (
    <button
      className={`flex items-center justify-center transition duration-300 ${variantStyles[buttonVariant]} ${sizeStyles[size]} ${disabledStyle} ${widthStyle} ${roundedStyle} ${className}`}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {icon && iconPosition === IconPositions.LEFT && <span className={iconSpacing}>{icon}</span>}
      {children}
      {icon && iconPosition === IconPositions.RIGHT && <span className={iconSpacing}>{icon}</span>}
    </button>
  );
};

AppButton.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  variants: PropTypes.oneOf(Object.values(ButtonVariants)),
  size: PropTypes.oneOf(Object.values(ButtonSizes)),
  icon: PropTypes.node,
  iconPosition: PropTypes.oneOf(Object.values(IconPositions)),
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  fullWidth: PropTypes.bool,
  rounded: PropTypes.bool,
};

export { AppButton, ButtonVariants, ButtonSizes, IconPositions };
