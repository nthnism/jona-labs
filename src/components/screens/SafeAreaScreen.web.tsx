import React from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import { Edge, SafeAreaView } from 'react-native-safe-area-context';
import { useUnistyles } from 'react-native-unistyles';

interface SafeAreaScreenProps {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  centeredContent?: boolean;
  fullScreen?: boolean;
}

export const SafeAreaScreen = ({
  children,
  style,
  centeredContent = false,
  fullScreen = false,
}: SafeAreaScreenProps) => {
  const { theme } = useUnistyles();

  const edges: Edge[] = fullScreen ? ['top', 'right', 'bottom', 'left'] : ['right', 'bottom', 'left'];

  return (
    <SafeAreaView
      edges={edges}
      style={[
        {
          flex: 1,
          backgroundColor: theme.colors.background,
          padding: theme.gap(1),
          alignItems: 'center',
        },
      ]}>
      <View
        style={[
          {
            minWidth: 500,
            maxWidth: 500,
            width: 500,
          },
          centeredContent ? { justifyContent: 'center', alignItems: 'center', flex: 1 } : null,
          style,
        ]}>
        {children}
      </View>
    </SafeAreaView>
  );
};
