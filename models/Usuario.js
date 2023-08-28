import { DataTypes } from "sequelize";
import { sequelize } from "../database.js";

const User = sequelize.define("user",
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            unique: true,
            primaryKey: true,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING(45),
            allowNull: false,
        },
        surname: {
            type: DataTypes.STRING(45),
            allowNull: false,
        },
        username: {
            type: DataTypes.STRING(45),
            allowNull: false,
        },
        birthdate: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING(100),
            allowNull: false,
        }
    },
{
    timestamps: false,
});

export default User;