import Express from "express";
import dotenv from "dotenv";
dotenv.config();
const port = process.env.PORT;

const app = Express();

app.listen(port, () => {
    console.log(`Server listen on port ${port}`);
});
