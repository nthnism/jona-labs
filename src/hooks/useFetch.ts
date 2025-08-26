import { useCallback, useEffect, useState } from 'react';
import { customFetch } from '@/src/functions/customFetch';

export const useFetch = <TResponseType>(...args: Parameters<typeof customFetch>) => {
  const [data, setData] = useState<TResponseType | null>(null);
  const [isFetching, setIsFetching] = useState(true);
  const [hasError, setHasError] = useState(false);

  const getData = useCallback(async () => {
    // hook is initialized with isFetching = true. We only need to check and reset it here in case a retry is triggered.
    if (!isFetching) {
      setIsFetching(true);
      setHasError(false);
    }

    try {
      const response = await customFetch(...args);

      setData(response);
      setIsFetching(false);
    } catch (error) {
      console.error(`error fetching data:`, ...args, error);

      setHasError(true);
      setIsFetching(false);
    }
  }, [isFetching, args]);

  useEffect(() => {
    getData().then();
    // We only want to run this useEffect once, even when getData gets recreated.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    data,
    isFetching,
    hasError,
    retry: getData,
  } as const;
};
