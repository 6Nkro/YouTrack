import axios from "axios";

const key = process.env.REACT_APP_YOUTUBE_API_KEY;
const maxResults = 20;
const chart = "mostPopular";
const regionCode = "KR";
const type = "video";

const getPopularVideos = async (q: string) => {
  const url = "https://www.googleapis.com/youtube/v3/videos";
  const params = { part: "snippet", maxResults, chart, regionCode, key };
  const response = await axios.get(url, { params });
  return response.data.items;
};

const getSearchVideos = async (q: string) => {
  const url = "https://www.googleapis.com/youtube/v3/search";
  const params = { part: "snippet", maxResults, q, type, key };
  const response = await axios.get(url, { params });
  return response.data.items;
};

export async function getYouTubeSearchResult(q: string) {
  const isEmptyQuery = q === "";
  const items = isEmptyQuery
    ? await getPopularVideos(q)
    : await getSearchVideos(q);
  const id = isEmptyQuery
    ? items.map((item: { id: string }) => item.id)
    : items.map((item: { id: { videoId: string } }) => item.id.videoId);

  const url = "https://www.googleapis.com/youtube/v3/videos";
  const params = { part: "statistics", id: id.join(","), key };
  const response = await axios.get(url, { params });

  return items.map((item: any, index: number) => {
    const { title, channelTitle, publishedAt, description, tags } =
      item.snippet;
    const { viewCount } = response.data.items[index].statistics;

    return {
      id: id[index],
      thumbnail: item.snippet.thumbnails.medium.url,
      author: channelTitle,
      title,
      publishedAt,
      viewCount,
      description,
      tags,
    };
  });
}
