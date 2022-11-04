import { useCallback, useEffect, useState } from "react";
import useInfiniteScroll, {
  UseInfiniteScrollHookRefCallback,
} from "react-infinite-scroll-hook";
import http from "../http";

interface PaginationProps {
  route: string;
  limit: number;
  apiFilters?: string;
}

interface PaginationReturn<T> {
  items: T[];
  hasMoreItems: boolean;
  sentryRef: UseInfiniteScrollHookRefCallback;
  loadData: (reset?: boolean) => void;
}

export default function usePagination<T>({
  route,
  limit,
  apiFilters,
}: PaginationProps): PaginationReturn<T> {
  const [start, setStart] = useState(0);
  const [items, setItems] = useState<T[]>([]);
  const [loading, setLoading] = useState(true);
  const [hasNextPage, setHasNextPage] = useState(false);
  const [disabled, setDisabled] = useState<boolean | undefined>(undefined);

  const loadData = useCallback(
    (reset = false) => {
      if (reset) {
        setStart(0);
        setItems([]);
        setLoading(true);
        setHasNextPage(false);
      } else {
        setStart((prev) => prev + limit);
      }
    },
    [limit]
  );

  const [sentryRef] = useInfiniteScroll({
    loading,
    hasNextPage,
    disabled,
    onLoadMore: loadData,
    rootMargin: "0px 0px 400px 0px",
  });

  useEffect(() => {
    (async () => {
      try {
        const response = await http<T[]>({
          url: `${route}?_start=${start}&_limit=${limit}${apiFilters ?? ""}`,
        });

        if (!start) {
          setItems(response);
        } else {
          setItems((prev) => [...prev, ...response]);
        }
        setHasNextPage(!!response.length);
      } catch (err) {
        setDisabled(true);
        throw err;
      } finally {
        setLoading(false);
      }
    })();
  }, [apiFilters, limit, route, start]);

  return { items, hasMoreItems: loading || hasNextPage, loadData, sentryRef };
}
