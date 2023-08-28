import { sequelize } from "./database.js";
import User from "./models/Usuario.js";
import Post from "./models/Post.js";
import Comment from "./models/Comentario.js";

User.hasMany(Post, {as: "posts", foreignKey: "userId"})
Post.belongsTo(User, {as: "users", foreignKey: "userId"})
Post.hasMany(Comment, {as: "comments", foreignKey: "postId"})
Comment.belongsTo(Post, {as: "posts", foreignKey: "postId"})
User.hasMany(Comment, {as: "comments", foreignKey: "userId"})
Comment.belongsTo(User, {as: "users", foreignKey: "userId"})

sequelize.models = {
    User,
    Post,
    Comment
}

export default sequelize