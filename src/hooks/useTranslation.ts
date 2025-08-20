import { useTranslation as useTranslationInternal } from 'react-i18next';

import * as en from '@/src/translations/en.json';

type validKeys = keyof typeof en;

export const useTranslation = () => {
  const { t } = useTranslationInternal();

  // @ts-ignore TODO: Fix @ts-ignore
  return (key: validKeys, ...args: any) => t(key, ...args);
};
