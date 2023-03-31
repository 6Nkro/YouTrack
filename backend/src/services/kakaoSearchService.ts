import axios from "axios";
import { KakaoItem } from "../types/kakao";
import {
  CommonVideoData,
  CommonVideoDataList,
  Platform,
} from "../../../types/common";

const sort = "Score";
const fulllevels = "list";
const fields = "-user,-clipChapterThumbnailList";
const size = 20;

async function fetchKakaoData(q: string, page: string): Promise<KakaoItem[]> {
  const url = "https://tv.kakao.com/api/v1/ft/search/cliplinks";
  const params = { q, sort, fulllevels, fields, size, page };
  try {
    const res = await axios.get(url, { params });
    return res.data.list;
  } catch (error) {
    console.error("Error in fetchYouTubeData:", error);
    return [];
  }
}

export async function processKakaoData(
  q: string,
  page: string,
  platform: Platform
): Promise<CommonVideoDataList> {
  page = page === "" ? "1" : page;
  const searchData = await fetchKakaoData(q, page);

  const nextPageToken = +page + 1;
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
      duration: duration.toString(),
      author: item.channel.name,
      title,
      publishedAt: createTime,
      viewCount: playCount,
      description,
      platform,
      tags: tagList,
    };
  });

  return { nextPageToken, items };
}
