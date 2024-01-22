import express from "express";
import {
  homePage,
  fetchPosts,
  createPost,
} from "../controllers/controllers.js";

const router = express.Router();

// router get
router.get("/", homePage);

router.get("/all/posts", fetchPosts);

router.post("/user/create/post", createPost);

export default router;
