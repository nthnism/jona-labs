import { StyleSheet } from 'react-native-unistyles';
import { materialLightTheme } from '@/src/themes/materialLightTheme';
import { materialDarkTheme } from '@/src/themes/materialDarkTheme';

const appThemes = {
  light: materialLightTheme,
  dark: materialDarkTheme,
};

const breakpoints = {
  xs: 0,
  sm: 300,
  md: 500,
  lg: 800,
  xl: 1200,
};

type AppBreakpoints = typeof breakpoints;
type AppThemes = typeof appThemes;

declare module 'react-native-unistyles' {
  /* eslint-disable */
  export interface UnistylesThemes extends AppThemes {}
  export interface UnistylesBreakpoints extends AppBreakpoints {}
}

StyleSheet.configure({
  settings: {
    adaptiveThemes: true,
  },
  breakpoints,
  themes: appThemes,
});
