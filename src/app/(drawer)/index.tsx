import { Text } from 'react-native-paper';
import { SafeAreaScreen } from '@/src/components/screens/SafeAreaScreen';
import { translate } from '@/src/functions/translate';

export default function Index() {
  return (
    <SafeAreaScreen centeredContent>
      <Text variant={'headlineLarge'}>{translate('global.welcome')}</Text>
    </SafeAreaScreen>
  );
}
