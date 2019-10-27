import { useState, useEffect, useRef } from 'react';

export default function useJsonFetch(url, opts) {
  const [data, setData] = useState();
  const [isLoading, setLoad] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {

    const fetchData = async () => {
      setLoad(true);
      try {
        const res = await fetch(url);
        if (!res.ok) throw new Error(res.statusText);
        const data = await res.json();
        setData(data);
      } catch (e) {
        setError(e);
      } finally {
        setLoad(false);
      }
    }

    fetchData();
  }, [])

  return ({ data, error, isLoading })
}