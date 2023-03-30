import { Request, Response } from "express";
import { processKakaoData } from "../services/kakaoSearchService";
import { processYouTubeData } from "../services/youtubeSearchService";

type Platform = "YouTube" | "kakao";

export async function searchVideosByPlatform(req: Request, res: Response) {
  try {
    const query = req.query.query as string;
    const page = req.query.page as string;
    const platform = query ? (req.query.platform as Platform) : "YouTube";

    const platformMap = {
      YouTube: await processYouTubeData(query, page),
      kakao: await processKakaoData(query, page),
    };

    return res.status(200).json(platformMap[platform]);
  } catch (error) {
    console.error("Error in searchController:", error);
    res.status(500).json({ error });
  }
}
