import axios from "axios";

const key = process.env.REACT_APP_YOUTUBE_API_KEY;
const part = "snippet";
const maxResults = 20;
const chart = "mostPopular";
const regionCode = "KR";

export async function getSearchResult(q: string) {
  const isEmptyQuery = q === "";
  const url = !isEmptyQuery
    ? "https://www.googleapis.com/youtube/v3/search"
    : "https://www.googleapis.com/youtube/v3/videos";
  const params = !isEmptyQuery
    ? { part, maxResults, q, key }
    : { part, maxResults, chart, regionCode, key };
  const response = await axios.get(url, { params });
  return response.data;
}
