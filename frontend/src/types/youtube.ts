export interface YouTubeApiParams {
  key: string | undefined;
  part: string;
  maxResults?: number;
  q?: string;
  chart?: string;
  regionCode?: string;
  id?: string;
}

export interface YouTubeSnippetProps {
  id:
    | string
    | {
        videoId: string;
      };
  snippet: {
    title: string;
    thumbnails: {
      medium: {
        url: string;
      };
    };
    channelTitle: string;
    publishedAt: string;
    description: string;
    tags?: string[];
  };
}

export interface YouTubeStatisticsProps {
  statistics: {
    viewCount: string;
  };
}

export interface YouTubeVideoProps {
  id: string;
  thumbnail: string;
  author: string;
  title: string;
  publishedAt: string;
  viewCount: string;
  description: string;
  tags?: string[];
}
