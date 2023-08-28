import { Router } from "express";
const commentRouter = Router()
import { createComment, getAllComments } from "../controllers/comment.controllers.js";

commentRouter.get("/", getAllComments)
commentRouter.post("/", createComment)

export default commentRouter