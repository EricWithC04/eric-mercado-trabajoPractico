import Express from "express";
import dotenv from "dotenv";
import router from "./routes/controllers.routes.js";
dotenv.config()

const app = Express()

app.use("/api", router)

app.get("*", (req, res) => {
    res.send("Error 404: Not found!, ruta no encontrada");
});

export default app