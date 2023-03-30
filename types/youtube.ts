export interface YouTubeApiParams {
  key: string | undefined;
  part: string;
  q?: string;
  chart?: string;
  type?: string;
  regionCode?: string;
  maxResults?: number;
  id?: string;
}

export interface YouTubeSearchParts {
  items: YouTubeSearchPart[] | [];
  nextPageToken?: string;
}

export interface YouTubeDetailParts {
  items: YouTubeDetailPart[] | [];
}

export interface ErrorFetchYouTube {
  items: [];
  nextPageToken: undefined;
}

interface YouTubeSearchPart {
  id: Id;
  snippet: YouTubeSnippet;
}

interface YouTubeDetailPart {
  contentDetails: {
    duration: string;
  };
  statistics: {
    viewCount: string;
  };
}

type Id = string | { videoId: string };

interface YouTubeSnippet {
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
}
