import { Router } from "express";
const postRouter = Router()
import { createPost, deletePost, getAllPosts, getOnePost, updatePost } from "../controllers/post.controllers.js";

postRouter.get("/", getAllPosts)
postRouter.get("/:id", getOnePost)
postRouter.post("/", createPost)
postRouter.put("/:id", updatePost)
postRouter.delete("/:id", deletePost)

export default postRouter

