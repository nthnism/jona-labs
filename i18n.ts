import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import * as de from '@/assets/translations/de.json';
import * as en from '@/assets/translations/en.json';

const resources = {
  de: {
    translation: de,
  },
  en: {
    translation: en,
  },
};

// eslint-disable-next-line import/no-named-as-default-member
i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  })
  .then();

export default i18n;
