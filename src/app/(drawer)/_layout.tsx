import { HeaderBackButton } from '@react-navigation/elements';
import { useRouter, useSegments } from 'expo-router';
import { Drawer } from 'expo-router/drawer';
import { Icon } from 'react-native-paper';
import { useUnistyles } from 'react-native-unistyles';
import { translate } from '@/src/functions/translate';

import '@/src/translations/i18n';

export default function HomeLayout() {
  const { theme } = useUnistyles();
  const segments = useSegments();
  const router = useRouter();

  return (
    <Drawer
      screenOptions={{
        drawerActiveBackgroundColor: theme.colors.primary,
        drawerActiveTintColor: theme.colors.onPrimary,
        drawerInactiveTintColor: theme.colors.onBackground,
        drawerContentStyle: {
          backgroundColor: theme.colors.background,
        },
        headerStyle: {
          backgroundColor: theme.colors.background,
        },
        headerTintColor: theme.colors.onBackground,
        popToTopOnBlur: true,
        headerLeft:
          segments.length > 2
            ? (headerBackButtonProps) => (
                <HeaderBackButton
                  {...headerBackButtonProps}
                  label={translate('global.back')}
                  onPress={() => router.back()}
                />
              )
            : undefined,
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
        name="tedLasso"
        options={{
          drawerLabel: translate('drawer.tedLasso.drawerLabel'),
          title: translate('drawer.tedLasso.title'),
          drawerIcon: ({ focused, size }) => (
            <Icon color={focused ? theme.colors.onPrimary : theme.colors.onBackground} size={size} source={'soccer'} />
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
