import en_common from '@/shared/locales/en/common.en.json';
import en_contactUs from '@/shared/locales/en/contactUs.en.json';
import en_translations from '@/shared/locales/en/translations.en.json';

import fr_common from '@/shared/locales/fr/common.fr.json';
import fr_contactUs from '@/shared/locales/fr/contactUs.fr.json';
import fr_translations from '@/shared/locales/fr/translations.fr.json';

import pl_common from '@/shared/locales/pl/common.pl.json';
import pl_contactUs from '@/shared/locales/pl/contactUs.pl.json';
import pl_translations from '@/shared/locales/pl/translations.pl.json';

import i18n from 'i18next';
import detector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    common: en_common,
    translations: en_translations,
    contactUs: en_contactUs,
  },
  fr: {
    common: fr_common,
    translations: fr_translations,
    contactUs: fr_contactUs,
  },
  pl: {
    common: pl_common,
    translations: pl_translations,
    contactUs: pl_contactUs,
  },
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
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
      lookupLocalStorage: 'language',
    },
    defaultNS: 'common',
    ns: ['common', 'translations', 'contactUs'],
    // fallbackLng: 'en',
  });

export default i18n;
