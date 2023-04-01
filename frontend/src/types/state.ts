import { Platform } from "../../../types/common";

export interface CommonState {
  nightMode: boolean;
  sideBar: boolean;
}

export interface SearchState {
  query: string;
  platform: Platform;
}
