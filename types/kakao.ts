export interface KakaoItem {
  channel: KakaoChannel;
  clip: KakaoClip;
}

interface KakaoChannel {
  name: string;
}

interface KakaoClip {
  id: number;
  title: string;
  description: string;
  duration: number;
  thumbnailUrl: string;
  playCount: number;
  createTime: string;
  tagList?: string[];
}
