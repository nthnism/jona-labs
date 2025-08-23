import { Text, View } from 'react-native';
import { Link } from 'expo-router';
import { useUnistyles } from 'react-native-unistyles';
import { translate } from '@/src/functions/translate';

export default function NotFoundScreen() {
  const { theme } = useUnistyles();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: theme.colors.background }}>
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
    </View>
  );
}
