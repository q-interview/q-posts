import { useEffect, useState } from "react";
import { http } from "../http";

interface Return<T> {
  data: T | null;
  loading: boolean;
}

export default function useFetch<T>(route: string): Return<T> {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const response = await http<T>({ url: route });
        setData(response);
      } finally {
        setLoading(false);
      }
    })();
  }, [route]);

  return { data, loading };
}
