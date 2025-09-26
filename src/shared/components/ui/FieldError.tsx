// src/shared/components/ui/FieldError.tsx

import * as React from 'react';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';

interface FieldErrorProps {
  /** i18n key, or literal string */
  message?: string;
}

export const FieldError: React.FC<FieldErrorProps> = memo(({ message }) => {
  const { t } = useTranslation('contactUs');

  const baseClasses = 'text-red-600 mt-1 text-sm h-5';
  const visibilityClass = message ? 'visible' : 'invisible';

  return (
    <div role="alert" className={`${baseClasses} ${visibilityClass}`}>
      {message ? t(message) : <>&nbsp;</>}
    </div>
  );
});

FieldError.displayName = 'FieldError';
