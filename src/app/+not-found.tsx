import { View } from 'react-native';
import { Link } from 'expo-router';
import { useUnistyles } from 'react-native-unistyles';
import { useTranslation } from '@/src/hooks/useTranslation';

export default function NotFoundScreen() {
  const { theme } = useUnistyles();
  const translate = useTranslation();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: theme.colors.background }}>
      <Link dismissTo href="/" style={{ textDecorationLine: 'underline', color: theme.colors.onBackground }}>
        {translate('global.goBack')}
      </Link>
    </View>
  );
}
