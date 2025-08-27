import { Image } from 'expo-image';
import { useUnistyles } from 'react-native-unistyles';

interface ImageBannerProps {
  source: string;
}

const blurhash =
  '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

export const ImageBanner = ({ source }: ImageBannerProps) => {
  const { theme } = useUnistyles();

  return (
    <Image
      style={{
        width: '100%',
        height: 300,
        borderRadius: theme.roundness,
      }}
      source={source}
      placeholder={{ blurhash }}
      contentFit="cover"
      transition={1000}
    />
  );
};
