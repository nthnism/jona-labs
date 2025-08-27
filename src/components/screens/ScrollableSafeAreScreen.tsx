import React from 'react';
import { ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useUnistyles } from 'react-native-unistyles';

interface ScrollableSafeAreScreenProps {
  children: React.ReactNode;
  isFullScreen?: boolean;
}

export const ScrollableSafeAreScreen = ({ children, isFullScreen = false }: ScrollableSafeAreScreenProps) => {
  const { theme } = useUnistyles();
  const { top, right, bottom, left } = useSafeAreaInsets();

  const defaultPadding = theme.gap(1);

  return (
    <ScrollView
      contentContainerStyle={{
        paddingTop: (isFullScreen ? top : 0) + defaultPadding,
        paddingRight: right + defaultPadding,
        paddingLeft: left + defaultPadding,
        paddingBottom: bottom + defaultPadding,
      }}
      style={{
        backgroundColor: theme.colors.background,
      }}>
      {children}
    </ScrollView>
  );
};
