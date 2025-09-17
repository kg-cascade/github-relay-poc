import { cn } from '@/shared/utils/cn';
import {
  Link,
  type LinkProps as TanstackLinkProps,
} from '@tanstack/react-router';
import { cva, type VariantProps } from 'class-variance-authority';
import type { LucideIcon } from 'lucide-react';
import * as React from 'react';

const navLinkVariants = cva(
  'inline-flex items-center gap-x-3 rounded-md font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed',
  {
    variants: {
      variant: {
        primary: 'text-gray-400 hover:bg-white/5 focus:ring-white',
        secondary: 'text-gray-400 hover:bg-white/5 focus:ring-white',
        link: 'text-blue-600 hover:text-blue-800 underline focus:ring-blue-600 dark:text-blue-400 dark:hover:text-blue-300',
      },
      size: {
        small: 'text-sm px-2 py-1',
        normal: 'text-sm/6 px-3 py-2',
      },
      active: {
        true: 'bg-white/5 text-white font-bold',
        false: '',
      },
      iconPosition: {
        leading: 'flex-row',
        trailing: 'flex-row-reverse',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'normal',
      active: false,
      iconPosition: 'leading',
    },
  }
);

export interface NavLinkProps
  extends Omit<TanstackLinkProps, 'children'>,
    VariantProps<typeof navLinkVariants> {
  children?: React.ReactNode;
  icon?: LucideIcon;
  linkClassName?: string;
  spanClassName?: string;
}

export const NavLink: React.FC<NavLinkProps> = ({
  variant,
  size,
  iconPosition,
  icon: Icon,
  children,
  linkClassName,
  spanClassName,
  ...props
}) => {
  return (
    <Link {...props}>
      {({ isActive }) => (
        <span
          className={cn(
            navLinkVariants({ variant, size, active: isActive, iconPosition }),
            linkClassName,
            spanClassName
          )}
        >
          {Icon && <Icon className="size-6 shrink-0" />}
          {children}
        </span>
      )}
    </Link>
  );
};
