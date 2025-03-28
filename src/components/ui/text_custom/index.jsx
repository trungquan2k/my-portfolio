import PropTypes from 'prop-types';

const ParagraphSizes = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
  XL: 'xl',
  XXL: 'xxl',
  XXXL: 'xxxl',
};

const AppTextColor = {
  DEFAULT: 'default',
  LIGHT: 'light',
  DARK: 'dark',
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
};

const AppTextVariant = {
  P: 'p',
  H1: 'h1',
  H2: 'h2',
  H3: 'h3',
  H4: 'h4',
};

const AppTextAlign = {
  START: 'start',
  CENTER: 'center',
  END: 'end',
};

const Paragraph = ({
  children,
  className = '',
  color = AppTextColor.DEFAULT,
  variant = AppTextVariant.P,
  align = AppTextAlign.START,
  size = ParagraphSizes.MEDIUM,
  mb = 0,
}) => {
  const colorStyles = {
    default: 'text-gray-900',
    light: 'text-gray-400',
    dark: 'text-gray-700',
    primary: 'text-blue-600',
    secondary: 'text-indigo-600',
  };

  const alignStyles = {
    start: 'text-start',
    center: 'text-center',
    end: 'text-end',
  };

  const sizeStyles = {
    small: 'text-sm md:text-base',
    medium: 'text-base md:text-lg',
    large: 'text-lg md:text-xl',
    xl: 'text-xl md:text-2xl',
    xxl: 'text-2xl md:text-3xl',
    xxxl: 'text-4xl md:text-5xl',
  };

  const variantStyles = {
    p: 'font-normal',
    h1: 'font-bold text-4xl md:text-5xl font-bold',
    h2: 'font-bold text-3xl md:text-4xl ',
    h3: 'font-semibold text-2xl md:text-3xl',
    h4: 'font-semibold text-xl md:text-2xl ',
  };

  // Determine which HTML element to render based on variant
  const Component = variant === AppTextVariant.P ? 'p' : variant;

  return (
    <Component
      className={`${colorStyles[color]} ${alignStyles[align]} ${
        variant === AppTextVariant.P ? sizeStyles[size] : ''
      } ${variantStyles[variant]} ${className} mb-${mb}`}
    >
      {children}
    </Component>
  );
};

Paragraph.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  color: PropTypes.oneOf(Object.values(AppTextColor)),
  variant: PropTypes.oneOf(Object.values(AppTextVariant)),
  align: PropTypes.oneOf(Object.values(AppTextAlign)),
  size: PropTypes.oneOf(Object.values(ParagraphSizes)),
  mb: PropTypes.number,
};

export { Paragraph, ParagraphSizes, AppTextColor, AppTextVariant, AppTextAlign };
export default Paragraph;
