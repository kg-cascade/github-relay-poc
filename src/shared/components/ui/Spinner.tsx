import React from 'react';

interface SpinnerProps {
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

const Spinner: React.FC<SpinnerProps> = ({
  size = 'medium',
  className = '',
}) => {
  let sizeClasses = '';

  switch (size) {
    case 'small':
      sizeClasses = 'w-4 h-4';
      break;
    case 'medium':
      sizeClasses = 'w-8 h-8';
      break;
    case 'large':
      sizeClasses = 'w-12 h-12';
      break;
    default:
      sizeClasses = 'w-8 h-8';
  }

  return (
    <div
      className={`inline-block animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite] ${sizeClasses} ${className}`}
      role="status"
    >
      <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !border-0 !p-0 !whitespace-nowrap ![clip:rect(0,0,0,0)]">
        Loading...
      </span>
    </div>
  );
};

export default Spinner;
