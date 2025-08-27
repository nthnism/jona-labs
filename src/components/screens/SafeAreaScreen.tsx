import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { Edge, SafeAreaView } from 'react-native-safe-area-context';
import { useUnistyles } from 'react-native-unistyles';

interface SafeAreaScreenProps {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  centeredContent?: boolean;
  isFullScreen?: boolean;
}

export const SafeAreaScreen = ({
  children,
  style,
  centeredContent = false,
  isFullScreen = false,
}: SafeAreaScreenProps) => {
  const { theme } = useUnistyles();

  const edges: Edge[] = isFullScreen ? ['top', 'right', 'bottom', 'left'] : ['right', 'bottom', 'left'];

  return (
    <SafeAreaView
      edges={edges}
      style={[
        {
          flex: 1,
          backgroundColor: theme.colors.background,
          padding: theme.gap(1),
        },
        centeredContent ? { justifyContent: 'center', alignItems: 'center', flex: 1 } : null,
        style,
      ]}>
      {children}
    </SafeAreaView>
  );
};
