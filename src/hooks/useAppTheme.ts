import { useEffect, useState } from 'react';
import { UnistylesRuntime } from 'react-native-unistyles';
import { useAppSelector } from '@/src/hooks/useAppSelector';

export const useAppTheme = () => {
  const selectedTheme = useAppSelector((state) => state.settings.theme);

  const [hasLoadedTheme, setHasLoadedTheme] = useState(false);

  useEffect(() => {
    switch (selectedTheme) {
      case 'device':
        UnistylesRuntime.setAdaptiveThemes(true);
        break;
      case 'dark':
        UnistylesRuntime.setAdaptiveThemes(false);
        UnistylesRuntime.setTheme('dark');
        break;
      case 'light':
        UnistylesRuntime.setAdaptiveThemes(false);
        UnistylesRuntime.setTheme('light');
        break;
      case 'darkRed':
        UnistylesRuntime.setAdaptiveThemes(false);
        UnistylesRuntime.setTheme('darkRed');
        break;
      case 'lightRed':
        UnistylesRuntime.setAdaptiveThemes(false);
        UnistylesRuntime.setTheme('lightRed');
        break;
    }
    setHasLoadedTheme(true);
  }, [selectedTheme]);

  return hasLoadedTheme;
};
