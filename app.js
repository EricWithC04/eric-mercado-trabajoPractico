import Express from "express";
import dotenv from "dotenv";
import router from "./routes/controllers.routes.js";
dotenv.config()
const port = process.env.PORT

const app = Express()

app.use("/api", router)

app.get("*", (req, res) => {
    res.send("Error 404: Not found!, ruta no encontrada");
});

app.listen(port, () => {
    console.log(`Server listen on port ${port}`);
})