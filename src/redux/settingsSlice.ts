import AsyncStorage from '@react-native-async-storage/async-storage';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { UnistylesThemes } from 'react-native-unistyles';

export type ThemeType = 'device' | keyof UnistylesThemes;

export interface SettingsState {
  theme: ThemeType;
}

const initialState: SettingsState = {
  theme: 'device',
};

const sliceName = 'settings';

export const saveSettings = async (state: SettingsState) => {
  try {
    await AsyncStorage.setItem(sliceName, JSON.stringify(state));
  } catch (e) {
    console.error('Failed to save settings', e);
  }
};

export const loadSettings = async (): Promise<SettingsState | null> => {
  try {
    const stateString = await AsyncStorage.getItem(sliceName);
    return stateString ? (JSON.parse(stateString) as SettingsState) : null;
  } catch (e) {
    console.error('Failed to load settings', e);
    return null;
  }
};

export const settingsSlice = createSlice({
  name: sliceName,
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<ThemeType>) => {
      state.theme = action.payload;
    },
    hydrateSettings: (_, action: PayloadAction<SettingsState>) => {
      return action.payload;
    },
  },
});

export const { setTheme, hydrateSettings } = settingsSlice.actions;
