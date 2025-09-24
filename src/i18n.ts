import en_common from '@/shared/locales/en/common.en.json';
import en_translations from '@/shared/locales/en/translations.en.json';

import fr_common from '@/shared/locales/fr/common.fr.json';
import fr_translations from '@/shared/locales/fr/translations.fr.json';

import pl_common from '@/shared/locales/pl/common.pl.json';
import pl_translations from '@/shared/locales/pl/translations.pl.json';

import i18n from 'i18next';
import detector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: { common: en_common, translations: en_translations },
  fr: { common: fr_common, translations: fr_translations },
  pl: { common: pl_common, translations: pl_translations },
};

i18n
  .use(detector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    // lng: 'en', // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
      lookupLocalStorage: 'language',
    },
    defaultNS: 'common',
    ns: ['common', 'translations'],
    // fallbackLng: 'en',
  });

export default i18n;
