import { Router } from "express";
import { searchVideosByPlatform } from "../controllers/searchController";

const router = Router();

router.get("/", searchVideosByPlatform);

export default router;
