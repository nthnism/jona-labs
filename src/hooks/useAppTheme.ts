import { useEffect, useState } from 'react';
import { UnistylesRuntime } from 'react-native-unistyles';
import { useAppSelector } from '@/src/hooks/useAppSelector';

export const useAppTheme = () => {
  const selectedTheme = useAppSelector((state) => state.settings.theme);

  const [hasLoadedTheme, setHasLoadedTheme] = useState(false);

  useEffect(() => {
    if (selectedTheme === 'device') {
      UnistylesRuntime.setAdaptiveThemes(true);
    }
    if (selectedTheme === 'dark') {
      UnistylesRuntime.setAdaptiveThemes(false);
      UnistylesRuntime.setTheme('dark');
    }
    if (selectedTheme === 'light') {
      UnistylesRuntime.setAdaptiveThemes(false);
      UnistylesRuntime.setTheme('light');
    }
    setHasLoadedTheme(true);
  }, [selectedTheme]);

  return hasLoadedTheme;
};
