import Input from '@/shared/components/ui/Input';
import { createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export const Route = createFileRoute('/translations/')({
  component: RouteComponent,
});

function RouteComponent() {
  const { t } = useTranslation();
  const [inputText, setInputText] = useState('');

  return (
    <div>
      <h1 className="mb-6">{t('welcome')}</h1>

      <Input
        placeholder={t('typeHere')}
        onChange={(e) => setInputText(e.target.value)}
        value={inputText}
      />

      <p className="mt-4">
        {t('userCount', {
          count: Number(inputText) || 0,
        })}
      </p>
    </div>
  );
}
