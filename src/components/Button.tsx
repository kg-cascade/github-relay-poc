import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'sm' | 'md' | 'lg';
  colorScheme?:
    | 'primary'
    | 'secondary'
    | 'danger'
    | 'accent'
    | 'success'
    | 'error'
    | 'warning'
    | 'info';
  variant?: 'solid' | 'outline' | 'ghost' | 'link';
}

const sizeClasses = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-5 py-2.5 text-lg',
};

// Utility for classes based on color and variant
const getColorClasses = (color: string, variant: string) => {
  const bg = `bg-${color}`;
  const text = `text-${color}-foreground`;
  const border = `border-${color}`;
  const hoverBg = `hover:bg-${color}/10`;
  const focusOutline = `focus-visible:outline-${color}`;
  const textOnly = `text-${color}`;

  switch (variant) {
    case 'solid':
      return `${bg} ${text} hover:bg-${color}/80 ${focusOutline}`;
    case 'outline':
      return `bg-transparent ${text} border ${border} hover:bg-${color}/10 ${focusOutline}`;
    case 'ghost':
      return `bg-transparent ${textOnly} ${hoverBg} ${focusOutline}`;
    case 'link':
      return `bg-transparent ${textOnly} hover:underline ${focusOutline} p-0 h-auto`;
    default:
      return '';
  }
};

const Button: React.FC<ButtonProps> = ({
  size = 'md',
  colorScheme = 'primary',
  variant = 'solid',
  className = '',
  children,
  ...rest
}) => {
  const base =
    'inline-flex items-center justify-center rounded-md font-medium transition-colors duration-200 cursor-pointer hover:opacity-80 delay-100';
  const sizeClass = variant === 'link' ? '' : sizeClasses[size];
  const colorClass = getColorClasses(colorScheme, variant);

  const classes = `${base} ${sizeClass} ${colorClass} ${className}`.trim();

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
};

export default Button;
