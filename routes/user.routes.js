import { Router } from "express";
const userRouter = Router()
import { getAllUsers, createUser } from "../controllers/user.controllers.js";

userRouter.get("/", getAllUsers)
userRouter.post("/", createUser)

export default userRouter