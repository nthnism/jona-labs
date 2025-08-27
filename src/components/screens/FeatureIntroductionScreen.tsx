import React from 'react';
import { View } from 'react-native';
import { Button, Text } from 'react-native-paper';
import { useUnistyles } from 'react-native-unistyles';
import { ScrollableSafeAreScreen } from '@/src/components/screens/ScrollableSafeAreScreen';
import { translate } from '@/src/functions/translate';

interface FeatureIntroductionScreenProps {
  description: string;
  continueTo: () => void;
}

export const FeatureIntroductionScreen = ({ description, continueTo }: FeatureIntroductionScreenProps) => {
  const { theme } = useUnistyles();
  return (
    <ScrollableSafeAreScreen>
      <View style={{ alignItems: 'center', gap: theme.gap(2) }}>
        <Text variant={'bodyLarge'}>{description}</Text>
        <Button mode={'contained'} onPress={continueTo}>
          {translate('global.continue')}
        </Button>
      </View>
    </ScrollableSafeAreScreen>
  );
};
