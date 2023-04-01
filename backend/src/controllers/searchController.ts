import { Request, Response } from "express";
import { processKakaoData } from "../services/kakaoSearchService";
import { processYouTubeData } from "../services/youtubeSearchService";
import { Platform } from "../../../types/common";

export async function searchVideosByPlatform(req: Request, res: Response) {
  try {
    const query = req.query.query as string;
    const page = req.query.page as string;
    const platform = query ? (req.query.platform as Platform) : "YouTube";

    const serviceMap = {
      YouTube: await processYouTubeData(query, page, platform),
      kakao: await processKakaoData(query, page, platform),
    };

    return res.status(200).json(serviceMap[platform]);
  } catch (error) {
    console.error("Error in searchController:", error);
    res.status(500).json({ error });
  }
}
