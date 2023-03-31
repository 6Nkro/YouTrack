import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { fetchVideoData } from "../services/searchService";
import { SearchState } from "../types/state";

export function useSearch(params: SearchState) {
  const [shouldFetch, setShouldFetch] = useState(true);

  useEffect(() => {
    setShouldFetch(true);
  }, [params]);

  return useQuery(["params", params], () => fetchVideoData(params), {
    enabled: shouldFetch,
    staleTime: Infinity,
    retry: false,
    onSuccess: () => {
      setShouldFetch(false);
    },
  });
}
