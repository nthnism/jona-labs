import { Text } from 'react-native';

import { useUnistyles } from 'react-native-unistyles';

import { SafeAreaScreen } from '@/src/components/screens/SafeAreaScreen';
import { translate } from '@/src/functions/translate';

export default function Index() {
  const { theme } = useUnistyles();

  return (
    <SafeAreaScreen centeredContent>
      <Text
        style={{
          color: theme.colors.onBackground,
        }}>
        {translate('global.welcome')}
      </Text>
    </SafeAreaScreen>
  );
}
