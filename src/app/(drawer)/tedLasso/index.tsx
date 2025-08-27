import { useRouter } from 'expo-router';
import { FeatureIntroductionScreen } from '@/src/components/screens/FeatureIntroductionScreen';
import { translate } from '@/src/functions/translate';

export default function Index() {
  const router = useRouter();

  return (
    <FeatureIntroductionScreen
      description={translate('features.tedLasso.featureDescription')}
      continueTo={() => router.push('/(drawer)/tedLasso/overview')}
    />
  );
}
