import { cn } from '@/shared/utils/cn';
import { cva, type VariantProps } from 'class-variance-authority';
import React from 'react';

const linkVariants = cva(
  'transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-sm', // base styles
  {
    variants: {
      variant: {
        default: 'text-blue-600 hover:text-blue-800 underline',
        muted: 'text-gray-500 hover:text-gray-700',
        button:
          'inline-flex items-center px-3 py-1.5 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md',
      },
      size: {
        sm: 'text-sm',
        md: 'text-base',
        lg: 'text-lg',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  }
);

export interface LinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof linkVariants> {}

const Link: React.FC<LinkProps> = ({ className, variant, size, ...props }) => {
  return (
    <a className={cn(linkVariants({ variant, size }), className)} {...props} />
  );
};

export { Link, linkVariants };
