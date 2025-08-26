import { useEffect } from 'react';
import { Stack } from 'expo-router';
import '@/src/translations/i18n';
import * as SplashScreen from 'expo-splash-screen';
import { DynamicStatusBar } from '@/src/components/ui/DynamicStatusBar';
import { useAppTheme } from '@/src/hooks/useAppTheme';
import { useInitializeFonts } from '@/src/hooks/useInitializeFonts';
import { useInitializeRedux } from '@/src/hooks/useInitializeRedux';

export const App = () => {
  const hasLoadedFonts = useInitializeFonts();
  const hasLoadedTheme = useAppTheme();
  const hasInitializedRedux = useInitializeRedux();

  const isInitialized = hasLoadedFonts && hasLoadedTheme && hasInitializedRedux;

  useEffect(() => {
    if (isInitialized) {
      SplashScreen.hide();
    }
  }, [isInitialized]);

  if (!isInitialized) {
    return null;
  }

  return (
    <>
      <DynamicStatusBar />
      <Stack
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="(drawer)" />
      </Stack>
    </>
  );
};
