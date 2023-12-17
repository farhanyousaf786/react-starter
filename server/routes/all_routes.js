import express from "express";
const router = express.Router();

import { postImage } from "../controllers/apis.js";

router.post("/postImage", postImage);

export default router;
