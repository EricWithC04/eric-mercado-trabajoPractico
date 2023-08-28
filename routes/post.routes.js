import { Router } from "express";
const postRouter = Router()
import { createPost, deletePost, getAllPosts, getOnePost, updatePost } from "../controllers/post.controllers.js";
import { createPostSchema } from "../models/validations/post.schema.js";
import { validateSchema } from "../middleware/validationSchema.js";

postRouter.get("/", getAllPosts)
postRouter.get("/:id", getOnePost)
postRouter.post("/", createPostSchema, validateSchema, createPost)
postRouter.put("/:id", updatePost)
postRouter.delete("/:id", deletePost)

export default postRouter

