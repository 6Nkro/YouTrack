import axios from "axios";
import { CommonVideoData } from "../../../types/video";

export async function fetchVideoData(
  query: string
): Promise<CommonVideoData[]> {
  const params = { query, platform: "YouTube" };
  const res = await axios.get("/api/search", { params });
  console.log(res.data);
  return res.data.items;
}
