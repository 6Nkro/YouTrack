export interface KakaoItem {
  id: number;
  channel: KakaoChannel;
  clip: KakaoClip;
}

interface KakaoChannel {
  name: string;
}

interface KakaoClip {
  title: string;
  description: string;
  duration: number;
  thumbnailUrl: string;
  playCount: number;
  createTime: string;
  tagList?: string[];
}
