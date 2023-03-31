import axios from "axios";
import { CommonVideoData } from "../../../types/common";
import { SearchState } from "../types/state";

export async function fetchVideoData(
  params: SearchState
): Promise<CommonVideoData[]> {
  const res = await axios.get("/api/search", { params });
  console.log(res.data);
  return res.data.items;
}
