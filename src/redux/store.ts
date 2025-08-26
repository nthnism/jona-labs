import { configureStore, createListenerMiddleware } from '@reduxjs/toolkit';
import devToolsEnhancer from 'redux-devtools-expo-dev-plugin';
import { hydrateSettings, loadSettings, saveSettings, settingsSlice } from '@/src/redux/settingsSlice';

const reduxListener = createListenerMiddleware();

reduxListener.startListening({
  predicate: (action) => action.type.startsWith(`${settingsSlice.name}/`) && action.type !== hydrateSettings.type,
  effect: async (_, listenerApi) => {
    const state = listenerApi.getState() as RootState;
    await saveSettings(state.settings);
  },
});

export const store = configureStore({
  reducer: {
    settings: settingsSlice.reducer,
  },
  devTools: false,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().prepend(reduxListener.middleware),
  enhancers: (getDefaultEnhancers) => getDefaultEnhancers().concat(devToolsEnhancer()),
});

const initSettings = async () => {
  const persistedSettings = await loadSettings();
  if (persistedSettings) {
    store.dispatch(hydrateSettings(persistedSettings));
  }
};

export const initStore = async () => {
  await initSettings();
};

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
