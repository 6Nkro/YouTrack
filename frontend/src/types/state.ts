export interface CommonState {
  nightMode: boolean;
  sideBar: boolean;
}

export interface SearchState {
  query: string;
  platform: "YouTube" | "kakao";
}
