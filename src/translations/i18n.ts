import { getLocales } from 'expo-localization';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import * as de from '@/src/translations/de.json';
import * as en from '@/src/translations/en.json';

const locales = getLocales();

const resources = {
  de: {
    translation: de,
  },
  en: {
    translation: en,
  },
};

const supportedLanguages = Object.keys(resources);

const language =
  locales.find((locale) => locale.languageCode !== null && supportedLanguages.includes(locale.languageCode))
    ?.languageCode ?? undefined;

// eslint-disable-next-line import/no-named-as-default-member
i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: language,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  })
  .then();

export default i18n;
