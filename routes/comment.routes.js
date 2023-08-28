import { Router } from "express";
const commentRouter = Router()
import { createComment, getAllComments } from "../controllers/comment.controllers.js";
import { createCommentSchema } from "../models/validations/comment.schema.js";
import { validateSchema } from "../middleware/validationSchema.js";

commentRouter.get("/", getAllComments)
commentRouter.post("/", createCommentSchema, validateSchema ,createComment)

export default commentRouter