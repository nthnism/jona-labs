import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export type ThemeType = 'device' | 'dark' | 'light';

export interface SettingsState {
  theme: ThemeType;
}

const initialState: SettingsState = {
  theme: 'device',
};

export const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<ThemeType>) => {
      state.theme = action.payload;
    },
  },
});

export const { setTheme } = settingsSlice.actions;
