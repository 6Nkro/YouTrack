import { useQuery } from "react-query";
import { getSearchResult } from "../services/YouTubeSearchService";

export function useYouTubeSearch() {
  return useQuery("searchResult", () => getSearchResult(""), {
    enabled: false,
    retry: false,
  });
}
