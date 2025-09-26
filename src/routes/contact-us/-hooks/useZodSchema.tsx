import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { z } from 'zod';

export function useZodSchema() {
  const { t, i18n } = useTranslation();

  const schema = useMemo(() => {
    const email = z.email(t('email', { ns: 'contactUs' }));
    const firstName = z
      .string()
      .min(1, t('firstNameRequired', { ns: 'contactUs' }));

    return {
      full: z.object({ email, firstName }),
      fields: {
        email,
        firstName,
      },
    };
  }, [i18n.language]);

  return schema;
}
