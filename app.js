import Express from "express";
import dotenv from "dotenv";
import { body, validationResult } from 'express-validator';
import userRouter from "./routes/user.routes.js";
import postRouter from "./routes/post.routes.js";
import commentRouter from "./routes/comment.routes.js";
dotenv.config()

const app = Express();

app.use(Express.json())
app.use(Express.urlencoded({extended: true}))

// app.post('/',
//     body('email').notEmpty().isEmail(),
//     body('password').notEmpty(),
//     (req, res) => {
//         const errors = validationResult(req);

//     if (errors.isEmpty()) {
//         return res.json(req.body);
//     }
//     console.log(req.body);
//     res.status(400).json(errors.array());
// });

app.use("/api/users", userRouter)
app.use("/api/posts", postRouter)
app.use("/api/comments", commentRouter)

app.get("*", (req, res) => {
    res.send("Error 404: Not found!, ruta no encontrada");
});

export default app