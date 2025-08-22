import { Text, View } from 'react-native';
import { useTranslation } from '@/src/hooks/useTranslation';
import { useUnistyles } from 'react-native-unistyles';

export default function Index() {
  const { theme } = useUnistyles();
  const translate = useTranslation();

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
