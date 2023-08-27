import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config()
const { DB_NAME, DB_USER, DB_HOST, DB_PASSWORD, DB_PORT, DB_DIALECT } = process.env;

export const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
    port: DB_PORT,
    host: DB_HOST,
    dialect: DB_DIALECT,
});
