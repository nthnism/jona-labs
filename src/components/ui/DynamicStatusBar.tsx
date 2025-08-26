import { StatusBar, StatusBarStyle } from 'expo-status-bar';
import { useAppSelector } from '@/src/hooks/useAppSelector';

export const DynamicStatusBar = () => {
  const selectedTheme = useAppSelector((state) => state.settings.theme);

  const statusBarStyle: StatusBarStyle =
    selectedTheme === 'device' ? 'auto' : selectedTheme === 'dark' ? 'light' : 'dark';

  return <StatusBar style={statusBarStyle} />;
};
