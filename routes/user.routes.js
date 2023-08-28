import { Router } from "express";
const userRouter = Router()
import { getAllUsers, createUser } from "../controllers/user.controllers.js";
import { createUserSchema } from "../models/validations/user.schema.js";
import { validateSchema } from "../middleware/validationSchema.js";

userRouter.get("/", getAllUsers)
userRouter.post("/", createUserSchema, validateSchema, createUser)

export default userRouter