import { useQuery } from "react-query";
import { fetchVideoData } from "../services/YouTubeSearchService";

export function useYouTubeSearch() {
  return useQuery("searchResult", () => fetchVideoData(""), {
    enabled: false,
    retry: false,
  });
}
