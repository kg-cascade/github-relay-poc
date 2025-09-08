import React from 'react';

interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string;
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
  variant?: 'solid' | 'outline' | 'ghost';
}

const sizeClasses = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-5 py-2.5 text-lg',
};

const getColorClasses = (color: string, variant: string) => {
  const bg = `bg-${color}`;
  const border = `border-${color}`;
  const focusOutline = `focus-visible:outline-${color}`;
  const text = `text-${color}-foreground`;

  switch (variant) {
    case 'solid':
      return `${bg} ${text} border-transparent`;
    case 'outline':
      return `bg-transparent border ${border} focus-visible:ring-2 focus-visible:ring-${color}/50`;
    case 'ghost':
      return `bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800`;
    default:
      return '';
  }
};

const Input: React.FC<InputProps> = ({
  label,
  size = 'md',
  colorScheme = 'primary',
  variant = 'outline',
  className = '',
  ...rest
}) => {
  const base =
    'w-full rounded-md font-medium transition-colors duration-200 focus:outline-none';
  const sizeClass = sizeClasses[size];
  const colorClass = getColorClasses(colorScheme, variant);

  const classes = `${base} ${sizeClass} ${colorClass} ${className}`.trim();

  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          {label}
        </label>
      )}
      <input className={classes} {...rest} />
    </div>
  );
};

export default Input;
