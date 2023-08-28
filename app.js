import Express from "express";
import dotenv from "dotenv";
import userRouter from "./routes/user.routes.js";
import postRouter from "./routes/post.routes.js";
import commentRouter from "./routes/comment.routes.js";
import morgan from "morgan";
import cors from "cors";
import helmet from "helmet";
dotenv.config()

const app = Express();

app.use(morgan("dev"))
app.use(cors())
app.use(helmet())
app.use(Express.json())
app.use(Express.urlencoded({extended: true}))

app.use("/api/users", userRouter)
app.use("/api/posts", postRouter)
app.use("/api/comments", commentRouter)

app.get("*", (req, res) => {
    res.send("Error 404: Not found!, ruta no encontrada");
});

export default app