export type Platform = "YouTube" | "kakao";

export interface CommonVideoDataList {
  nextPageToken: string | number | undefined;
  items: CommonVideoData[];
}

export interface CommonVideoData {
  id: string;
  thumbnail: string;
  duration: string;
  author: string;
  title: string;
  publishedAt: string;
  viewCount: string | number;
  description: string;
  platform: Platform;
  tags?: string[];
}
