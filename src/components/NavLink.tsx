import { Link } from '@tanstack/react-router';

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
  className?: string;
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
}

const sizeClasses = {
  sm: 'text-sm',
  md: 'text-base',
  lg: 'text-lg',
};

const colorClasses = {
  primary: 'text-primary hover:text-primary-foreground',
  secondary: 'text-secondary hover:text-secondary-foreground',
  danger: 'text-error hover:text-error-foreground',
  accent: 'text-accent hover:text-accent-foreground',
  success: 'text-success hover:text-success-foreground',
  error: 'text-error hover:text-error-foreground',
  warning: 'text-warning hover:text-warning-foreground',
  info: 'text-info hover:text-info-foreground',
};

const NavLink: React.FC<NavLinkProps> = ({
  to,
  children,
  className = '',
  size = 'md',
  colorScheme = 'primary',
}) => {
  return (
    <Link
      to={to}
      className={`${sizeClasses[size]} font-semibold transition-colors duration-200 ${colorClasses[colorScheme]} ${className}`}
    >
      {children}
    </Link>
  );
};

export default NavLink;
