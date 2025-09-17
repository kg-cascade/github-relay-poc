import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/shared/utils/cn';
import type { LucideIcon } from 'lucide-react';

const buttonVariants = cva(
  'inline-flex items-center justify-center font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed',
  {
    variants: {
      variant: {
        primary:
          'bg-indigo-600 text-white hover:bg-indigo-500 focus:ring-indigo-600 dark:bg-indigo-500 dark:hover:bg-indigo-400 dark:focus:ring-indigo-400',
        secondary:
          'bg-gray-500 text-black hover:bg-gray-400 focus:ring-gray-500 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600',
        link: 'text-blue-600 hover:text-blue-800 underline focus:ring-blue-600 dark:text-blue-400 dark:hover:text-blue-300 dark:focus:ring-blue-300',
      },
      size: {
        small: 'px-2 py-1 text-xs',
        normal: 'px-3 py-2 text-sm',
        large: 'px-4 py-3 text-lg',
      },
      shape: {
        square: 'rounded-md',
        rounded: 'rounded-full',
        circular: 'rounded-full p-2',
      },
      iconPosition: {
        leading: 'flex-row',
        trailing: 'flex-row-reverse',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'normal',
      shape: 'square',
      iconPosition: 'leading',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  icon?: LucideIcon;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      shape,
      iconPosition,
      icon: Icon,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={cn(
          buttonVariants({ variant, size, shape, iconPosition }),
          className
        )}
        {...props}
      >
        {Icon && <Icon className="mr-2 h-4 w-4" />}
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
