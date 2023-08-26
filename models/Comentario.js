import { DataTypes } from "sequelize";
import { sequelize } from "../database.js";

const Coment = sequelize.define("coment",
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            unique: true,
            primaryKey: true,
            allowNull: false,
        },
        content: {
            type: DataTypes.STRING(200),
            allowNull: false,
        },
        createDate: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        updateDate: {
            type: DataTypes.DATE,
            allowNull: false,
        }
    },
{
    timestamps: false,
});

export default Coment;