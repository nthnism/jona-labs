import { useEffect, useState } from 'react';
import { initStore } from '@/src/redux/store';

export const useInitializeRedux = () => {
  const [hasInitializedRedux, setHasInitializedRedux] = useState(false);

  useEffect(() => {
    (async () => {
      await initStore();
      setHasInitializedRedux(true);
    })();
  }, []);

  return hasInitializedRedux;
};
