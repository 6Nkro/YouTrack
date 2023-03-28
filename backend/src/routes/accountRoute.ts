import express from "express";
import { findAccount, createAccount } from "../controllers/accountController";

const router = express.Router();

router.get("/find", findAccount);
router.post("/join", createAccount);

export default router;
