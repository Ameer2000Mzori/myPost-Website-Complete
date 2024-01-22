import express from "express";
import { homePage, fetchPosts } from "../controllers/controllers.js";

const router = express.Router();

// router get
router.get("/", homePage);

router.get("/all/posts/", fetchPosts);

export default router;
