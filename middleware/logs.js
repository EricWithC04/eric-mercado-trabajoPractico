import path from "path";
import fs from "fs";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);

const __dirname = dirname("../",__filename);

const logsDir = path.join(__dirname, "logs");

if (!fs.existsSync(logsDir)) {
    fs.mkdirSync(logsDir)
}

const logsFile = path.join(logsDir, "logs.txt")

const logStream = fs.createWriteStream(logsFile, { flags: "a" })

export default logStream