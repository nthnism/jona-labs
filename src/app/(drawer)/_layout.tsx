import { Drawer } from 'expo-router/drawer';
import { Icon } from 'react-native-paper';
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
          drawerLabel: translate('drawer.home.drawerLabel'),
          title: translate('drawer.home.title'),
          drawerIcon: ({ focused, size }) => (
            <Icon color={focused ? theme.colors.onPrimary : theme.colors.onBackground} size={size} source={'home'} />
          ),
        }}
      />
      <Drawer.Screen
        name="settings"
        options={{
          drawerLabel: translate('drawer.settings.drawerLabel'),
          title: translate('drawer.settings.title'),
          drawerIcon: ({ focused, size }) => (
            <Icon color={focused ? theme.colors.onPrimary : theme.colors.onBackground} size={size} source={'cog'} />
          ),
        }}
      />
    </Drawer>
  );
}
