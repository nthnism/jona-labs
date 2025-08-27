import '@/src/translations/i18n';
import { Stack } from 'expo-router';

export default function TedLassoLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="overview" />
    </Stack>
  );
}
