import { Router } from "express";
import { getAllUsers, createUser } from "../controllers/user.controllers.js";
import { getAllPosts } from "../controllers/post.controllers.js";
import { getAllComments } from "../controllers/comment.controllers.js";
const router = Router()

//Rutas de controladores para usuarios
router.get("/users", getAllUsers)
router.post("/createUser", createUser)

//Rutas de controladores para posts
router.get("/posts", getAllPosts)

//Rutas de controladores para comentarios
router.get("/coments", getAllComments)

export default router