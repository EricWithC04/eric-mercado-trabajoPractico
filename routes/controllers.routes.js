import { Router } from "express";
import { getAllComents, getAllPosts, getAllUsers } from "../controllers/index.js";
const router = Router()

router.get("/users", getAllUsers)
router.get("/posts", getAllPosts)
router.get("/coments", getAllComents)

export default router