import * as SplashScreen from 'expo-splash-screen';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { PaperProvider } from 'react-native-paper';
import { useUnistyles } from 'react-native-unistyles';
import { Provider } from 'react-redux';
import '@/src/translations/i18n';
import { App } from '@/src/App';
import { store } from '@/src/redux/store';

SplashScreen.setOptions({
  duration: 1000,
  fade: true,
});

SplashScreen.preventAutoHideAsync().then();

export default function RootLayout() {
  const { theme } = useUnistyles();
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Provider store={store}>
        <PaperProvider theme={theme}>
          <App />
        </PaperProvider>
      </Provider>
    </GestureHandlerRootView>
  );
}
