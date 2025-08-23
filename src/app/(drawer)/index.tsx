import { Text, View } from 'react-native';
import { useUnistyles } from 'react-native-unistyles';
import { translate } from '@/src/functions/translate';

export default function Index() {
  const { theme } = useUnistyles();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.colors.background,
      }}>
      <Text
        style={{
          color: theme.colors.onBackground,
        }}>
        {translate('global.welcome')}
      </Text>
    </View>
  );
}
