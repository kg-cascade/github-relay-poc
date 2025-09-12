import { cn } from '@/shared/utils/cn';
import { cva, type VariantProps } from 'class-variance-authority';
import type { ReactElement } from 'react';
import React, { isValidElement } from 'react';

const buttonVariants = cva(
  'inline-flex items-center justify-center font-semibold text-white shadow-xs transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:opacity-60 disabled:cursor-not-allowed',
  {
    variants: {
      size: {
        small: 'rounded-sm bg-indigo-600 px-2 py-1 text-xs hover:bg-indigo-500',
        normal:
          'rounded-md bg-indigo-600 px-3 py-2 text-sm hover:bg-indigo-500',
        large:
          'rounded-md bg-indigo-600 px-3.5 py-2.5 text-base hover:bg-indigo-500',
      },
    },
    defaultVariants: {
      size: 'normal',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  loading?: boolean;
  asChild?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  className,
  size,
  loading,
  children,
  disabled,
  asChild,
  ...props
}) => {
  if (asChild && isValidElement(children)) {
    // Powiedz TS że to ReactElement z propsami zawierającymi className + children
    const child = children as ReactElement<{
      className?: string;
      children?: React.ReactNode;
    }>;

    return React.cloneElement(child, {
      ...props,
      className: cn(buttonVariants({ size }), child.props.className, className),
      ...(loading || disabled ? { 'aria-disabled': true } : {}), // zamiast disabled (który nie działa na <a>/<Link>)
      children: (
        <>
          {loading && (
            <svg
              className="mr-2 h-4 w-4 animate-spin text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
              />
            </svg>
          )}
          {child.props.children}
        </>
      ),
    });
  }

  return (
    <button
      className={cn(buttonVariants({ size }), className)}
      disabled={loading || disabled}
      {...props}
    >
      {loading && (
        <svg
          className="mr-2 h-4 w-4 animate-spin text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
          />
        </svg>
      )}
      {children}
    </button>
  );
};
