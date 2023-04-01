import axios from "axios";
import { KakaoItem } from "../types/kakao";
import {
  CommonVideoData,
  CommonVideoDataList,
  Platform,
} from "../../../types/common";
import { formatDurationBySeconds, formatViewCount } from "../utils/formatData";

const baseUrl = "https://tv.kakao.com/api/v1/ft/";
const sort = "Score";
const fulllevels = "list";
const fields = "-user,-clipChapterThumbnailList";
const size = 20;

async function fetchKakaoData(
  endpoint: string,
  q: string,
  page: string
): Promise<KakaoItem[]> {
  const url = `${baseUrl}/${endpoint}`;
  const params = { q, sort, fulllevels, fields, size, page };
  try {
    const res = await axios.get(url, { params });
    return res.data.list;
  } catch (error) {
    console.error("Error in fetchKakaoData:", error);
    return [];
  }
}

export async function processKakaoData(
  q: string,
  page: string,
  platform: Platform
): Promise<CommonVideoDataList> {
  const isEmptyQuery = q === "";
  const endpoint = isEmptyQuery ? "home/category/original" : "search/cliplinks";
  const searchData = await fetchKakaoData(endpoint, q, page);

  const nextPageToken = +page + 1 || 2;

  const items = searchData.map((item): CommonVideoData => {
    const {
      title,
      description,
      duration,
      thumbnailUrl,
      playCount,
      createTime,
      tagList,
    } = item.clip;

    return {
      id: item.id.toString(),
      thumbnail: thumbnailUrl,
      duration: formatDurationBySeconds(duration),
      author: item.channel.name,
      title,
      publishedAt: createTime,
      viewCount: formatViewCount(playCount),
      description,
      platform,
      tags: tagList,
    };
  });

  return { nextPageToken, items };
}
