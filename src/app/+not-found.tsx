import { Text } from 'react-native';
import { Link } from 'expo-router';
import { useUnistyles } from 'react-native-unistyles';
import { SafeAreaScreen } from '@/src/components/screens/SafeAreaScreen';
import { translate } from '@/src/functions/translate';

export default function NotFoundScreen() {
  const { theme } = useUnistyles();

  return (
    <SafeAreaScreen centeredContent isFullScreen>
      <Text
        style={{
          color: theme.colors.onBackground,
          marginBottom: theme.gap(1),
        }}>
        {translate('global.notFound')}
      </Text>
      <Link dismissTo href="/" style={{ textDecorationLine: 'underline', color: theme.colors.onBackground }}>
        {translate('global.goBack')}
      </Link>
    </SafeAreaScreen>
  );
}
