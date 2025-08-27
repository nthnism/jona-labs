import React from 'react';
import { ScrollView, View } from 'react-native';
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
      <View
        style={{
          minWidth: 500,
          maxWidth: 500,
          width: 500,
          alignSelf: 'center',
        }}>
        {children}
      </View>
    </ScrollView>
  );
};
