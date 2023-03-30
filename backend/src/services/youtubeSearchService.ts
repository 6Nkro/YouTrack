import axios from "axios";
import {
  ErrorFetchYouTube,
  YouTubeApiParams,
  YouTubeDetailParts,
  YouTubeSearchParts,
} from "../../../types/youtube";
import { CommonVideoData, CommonVideoDataList } from "../../../types/video";

const baseUrl = "https://www.googleapis.com/youtube/v3";
const type = "video";
const maxResults = 20;
const chart = "mostPopular";
const regionCode = "KR";

async function fetchYouTubeData<T>(
  endpoint: string,
  params: YouTubeApiParams
): Promise<T | ErrorFetchYouTube> {
  const url = `${baseUrl}/${endpoint}`;

  try {
    const res = await axios.get(url, { params });
    return res.data;
  } catch (error) {
    console.error("Error in fetchYouTubeData:", error);
    return { items: [], nextPageToken: undefined };
  }
}

export async function processYouTubeData(
  q: string,
  pageToken: string
): Promise<CommonVideoDataList> {
  const isEmptyQuery = q === "";
  const isFirstPage = pageToken === "";
  const endpoint = isEmptyQuery ? "videos" : "search";
  const searchParams: YouTubeApiParams = {
    key: process.env.YOUTUBE_API_KEY,
    part: "snippet",
    type,
    maxResults,
    regionCode,
    ...(isEmptyQuery ? { chart } : { q }),
    ...(isFirstPage ? {} : { pageToken }),
  };

  const searchParts = await fetchYouTubeData<YouTubeSearchParts>(
    endpoint,
    searchParams
  );
  const ids = searchParts.items.map(searchPart =>
    typeof searchPart.id === "string" ? searchPart.id : searchPart.id.videoId
  );
  const detailParams: YouTubeApiParams = {
    key: process.env.YOUTUBE_API_KEY,
    part: "statistics,contentDetails",
    id: ids.join(","),
  };
  const detailParts = await fetchYouTubeData<YouTubeDetailParts>(
    "videos",
    detailParams
  );

  const { nextPageToken } = searchParts;
  const items = searchParts.items.map((searchPart, index): CommonVideoData => {
    const { title, channelTitle, publishedAt, description, tags } =
      searchPart.snippet;
    const { duration } = detailParts.items[index].contentDetails;
    const { viewCount } = detailParts.items[index].statistics;

    return {
      id: ids[index],
      thumbnail: searchPart.snippet.thumbnails.medium.url,
      duration,
      author: channelTitle,
      title,
      publishedAt,
      viewCount,
      description,
      tags,
    };
  });

  return { nextPageToken, items };
}
