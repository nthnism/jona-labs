import { MD3DarkTheme, MD3LightTheme } from 'react-native-paper';
import { StyleSheet } from 'react-native-unistyles';

const appThemes = {
  light: MD3LightTheme,
  dark: MD3DarkTheme,
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
