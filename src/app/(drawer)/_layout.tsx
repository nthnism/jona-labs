import { Drawer } from 'expo-router/drawer';
import { useUnistyles } from 'react-native-unistyles';
import { translate } from '@/src/functions/translate';

import '@/src/translations/i18n';

export default function HomeLayout() {
  const { theme } = useUnistyles();

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
      <Drawer.Screen
        name="settings"
        options={{
          drawerLabel: translate('tabs.settings.drawerLabel'),
          title: translate('tabs.settings.title'),
        }}
      />
    </Drawer>
  );
}
