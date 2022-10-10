import {useEffect, useState, useCallback} from 'react';

const useHome = navigation => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      setLoading(false);
    });
    return unsubscribe;
  }, [navigation]);

  return {
    loading,
  };
};

export default useHome;
