import { DataTypes } from "sequelize";
import { sequelize } from "../database.js";

const Post = sequelize.define("post",
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            unique: true,
            primaryKey: true,
            allowNull: false,
        },
        title: {
            type: DataTypes.STRING(60),
            allowNull: false,
        },
        content: {
            type: DataTypes.STRING(500),
            allowNull: false,
        },
        createDate: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        updateDate: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        state: {
            type: DataTypes.BOOLEAN,
            defaultValue: true,
            allowNull: false,
        }
    },
{
    timestamps: false,
});

export default Post;