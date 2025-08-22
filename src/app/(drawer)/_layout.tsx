import { Drawer } from 'expo-router/drawer';
import '@/src/translations/i18n';
import { useUnistyles } from 'react-native-unistyles';
import { useTranslation } from '../../hooks/useTranslation';

export default function RootLayout() {
  const { theme } = useUnistyles();
  const translate = useTranslation();

  return (
    <Drawer
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.colors.background,
        },
        headerTintColor: theme.colors.onBackground,
        drawerActiveBackgroundColor: theme.colors.primary,
        drawerActiveTintColor: theme.colors.onPrimary,
        drawerInactiveTintColor: theme.colors.onBackground,
        drawerContentStyle: {
          backgroundColor: theme.colors.background,
        },
      }}>
      <Drawer.Screen
        name="index"
        options={{
          drawerLabel: translate('tabs.home.drawerLabel'),
          title: translate('tabs.home.title'),
        }}
      />
    </Drawer>
  );
}
