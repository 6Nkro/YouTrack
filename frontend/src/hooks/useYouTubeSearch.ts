import { useQuery } from "react-query";
import { getYouTubeSearchResult } from "../services/YouTubeSearchService";

export function useYouTubeSearch() {
  return useQuery("searchResult", () => getYouTubeSearchResult(""), {
    enabled: false,
    retry: false,
  });
}
