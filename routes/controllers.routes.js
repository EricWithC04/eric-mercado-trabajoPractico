import { Router } from "express";
import { getAllUsers, createUser } from "../controllers/user.controllers.js";
import { createPost, deletePost, getAllPosts, getOnePost, updatePost } from "../controllers/post.controllers.js";
import { createComment, getAllComments } from "../controllers/comment.controllers.js";
const router = Router()

//Rutas de controladores para usuarios
router.get("/users", getAllUsers)
router.post("/createUser", createUser)

//Rutas de controladores para posts
router.get("/posts", getAllPosts)
router.get("/post/:id", getOnePost)
router.post("/createPost", createPost)
router.put("/updatePost/:id", updatePost)
router.delete("/deletePost/:id", deletePost)

//Rutas de controladores para comentarios
router.get("/comments", getAllComments)
router.post("/createComment", createComment)

export default router