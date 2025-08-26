import { useFonts } from 'expo-font';

export const useInitializeFonts = () => {
  const [hasLoadedFonts] = useFonts({
    SpaceMono: require('@/assets/fonts/SpaceMono-Regular.ttf'),
  });

  return hasLoadedFonts;
};
