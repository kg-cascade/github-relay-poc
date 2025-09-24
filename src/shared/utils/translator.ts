import en from '@/shared/locales/en.json';
import fr from '@/shared/locales/fr.json';
import pl from '@/shared/locales/pl.json';

type Lang = 'pl' | 'en' | 'fr';

type Translations = {
  [key: string]: string | Translations;
};

const translationsMap: Record<Lang, Translations> = {
  en,
  pl,
  fr,
};

let lang = localStorage.getItem('language') as Lang | null;

if (!lang) {
  const browserLang = navigator.language || navigator.languages?.[0] || 'en';
  if (browserLang.startsWith('pl')) lang = 'pl';
  else if (browserLang.startsWith('fr')) lang = 'fr';
  else lang = 'en';
}

const currentLang: Lang = lang === 'pl' || lang === 'fr' ? lang : 'en';

const translations = translationsMap[currentLang];

function getNestedTranslation(
  obj: Translations,
  keyPath: string
): string | undefined {
  const keys = keyPath.split('.');
  let current: string | Translations | undefined = obj;

  for (const key of keys) {
    if (typeof current === 'string') return undefined; // nie można iść dalej
    current = current[key];
    if (current === undefined) return undefined;
  }

  return typeof current === 'string' ? current : undefined;
}

export function t_custom(key: string): string {
  return getNestedTranslation(translations, key) || key;
}
