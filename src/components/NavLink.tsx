import { cn } from '@/shared/utils/cn'; // Upewnij się, że ścieżka do cn jest poprawna
import { Link } from '@tanstack/react-router';
import type { ReactNode } from 'react';

interface NavLinkProps {
  to: string;
  children: ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  colorScheme?:
    | 'primary'
    | 'secondary'
    | 'accent'
    | 'success'
    | 'error'
    | 'warning'
    | 'info'
    | 'text';
}

const sizeClasses = {
  sm: 'text-sm',
  md: 'text-base',
  lg: 'text-lg',
};

const colorClasses = {
  primary: 'text-primary',
  secondary: 'text-secondary',
  accent: 'text-accent',
  success: 'text-success',
  error: 'text-error',
  warning: 'text-warning',
  info: 'text-info',
  text: 'text-text',
};

const NavLink: React.FC<NavLinkProps> = ({
  to,
  children,
  className,
  size = 'md',
  colorScheme = 'primary',
}) => {
  return (
    <Link
      to={to}
      className={cn(
        'font-semibold transition-colors duration-200 no-underline hover:no-underline hover:opacity-80',
        sizeClasses[size],
        colorClasses[colorScheme],
        className
      )}
    >
      {children}
    </Link>
  );
};

export default NavLink;
