import axios from "axios";

const key = process.env.REACT_APP_YOUTUBE_API_KEY;
const part = "snippet";
const maxResults = 20;
const chart = "mostPopular";
const regionCode = "KR";

export async function getSearchResult(q: string) {
  if (q === "") {
    return getPopularVideos();
  }
  const url = "https://www.googleapis.com/youtube/v3/search";
  const params = { part, maxResults, q, key };
  const response = await axios.get(url, { params });
  return response.data;
}

export async function getPopularVideos() {
  const url = "https://www.googleapis.com/youtube/v3/videos";
  const params = { part, maxResults, chart, regionCode, key };
  const response = await axios.get(url, { params });
  return response.data;
}
