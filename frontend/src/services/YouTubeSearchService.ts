import axios from "axios";
import {
  YouTubeApiParams,
  YouTubeSnippetProps,
  YouTubeStatisticsProps,
  YouTubeVideoProps,
} from "../types/youtube";

const key = process.env.REACT_APP_YOUTUBE_API_KEY;
const baseUrl = "https://www.googleapis.com/youtube/v3/";
const maxResults = 20;
const chart = "mostPopular";
const regionCode = "KR";

async function fetchVideosData<T>(type: string, params: any): Promise<T[]> {
  const url = `${baseUrl}${type}`;
  try {
    const response = await axios.get(url, { params });
    return response.data.items;
  } catch (error) {
    console.error("Error:", error);
    return [];
  }
}

function processVideosData(
  snippetParts: YouTubeSnippetProps[],
  statisticsParts: YouTubeStatisticsProps[],
  ids: string[]
): YouTubeVideoProps[] {
  return snippetParts.map((snippetPart: any, index: number) => {
    const { title, channelTitle, publishedAt, description, tags } =
      snippetPart.snippet;
    const { viewCount } = statisticsParts[index].statistics;

    return {
      id: ids[index],
      thumbnail: snippetPart.snippet.thumbnails.medium.url,
      author: channelTitle,
      title,
      publishedAt,
      viewCount,
      description,
      tags,
    };
  });
}

export async function getYouTubeSearchResult(
  q: string
): Promise<YouTubeVideoProps[]> {
  const isEmptyQuery = q === "";
  let type = isEmptyQuery ? "videos" : "search";
  let params: YouTubeApiParams = isEmptyQuery
    ? { part: "snippet", maxResults, chart, regionCode, key }
    : { part: "snippet", maxResults, q, key };

  const snippetParts = await fetchVideosData<YouTubeSnippetProps>(type, params);
  const ids = snippetParts.map((snippetPart: YouTubeSnippetProps) =>
    typeof snippetPart.id === "string" ? snippetPart.id : snippetPart.id.videoId
  );

  type = "videos";
  params = { part: "statistics", id: ids.join(","), key };
  const statisticsParts = await fetchVideosData<YouTubeStatisticsProps>(
    type,
    params
  );

  return processVideosData(snippetParts, statisticsParts, ids);
}
