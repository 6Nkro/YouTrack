export interface CommonVideoDataList {
  nextPageToken: string | number | undefined;
  items: CommonVideoData[];
}

export interface CommonVideoData {
  id: string | number;
  thumbnail: string;
  duration: string;
  author: string;
  title: string;
  publishedAt: string;
  viewCount: string | number;
  description: string;
  tags?: string[];
}
