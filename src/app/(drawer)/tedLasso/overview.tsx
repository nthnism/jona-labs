import { apiEndpoints } from '@/src/api/features/tedLasso/apiEndpoints';
import { GetShowDetailsResponse } from '@/src/api/features/tedLasso/responseTypes';
import { ImageBanner } from '@/src/components/features/tedLasso/ImageBanner';
import { ScrollableSafeAreScreen } from '@/src/components/screens/ScrollableSafeAreScreen';
import { useFetch } from '@/src/hooks/useFetch';

export default function Overview() {
  const { data, isFetching, hasError } = useFetch<GetShowDetailsResponse>(apiEndpoints.getShowDetails());

  if (isFetching || hasError || !data) {
    return null;
  }

  return (
    <ScrollableSafeAreScreen>
      {data.image?.original ? <ImageBanner source={data.image.original} /> : null}
    </ScrollableSafeAreScreen>
  );
}
