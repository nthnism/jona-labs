import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import { useEffect } from 'react';
import { useUnistyles } from 'react-native-unistyles';
import { PaperProvider } from 'react-native-paper';

import '@/src/translations/i18n';

SplashScreen.setOptions({
  duration: 1000,
  fade: true,
});

SplashScreen.preventAutoHideAsync().then();

export default function RootLayout() {
  const [hasLoadedFonts] = useFonts({
    SpaceMono: require('@/assets/fonts/SpaceMono-Regular.ttf'),
  });

  const { theme } = useUnistyles();

  useEffect(() => {
    if (hasLoadedFonts) {
      SplashScreen.hide();
    }
  }, [hasLoadedFonts]);

  if (!hasLoadedFonts) {
    return null;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <PaperProvider theme={theme}>
        <Stack
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="(drawer)" />
        </Stack>
      </PaperProvider>
    </GestureHandlerRootView>
  );
}
