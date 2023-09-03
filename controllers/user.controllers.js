import { hashString } from "../helpers/hash.js";
import Post from "../models/Post.js";
import User from "../models/Usuario.js";

export const getAllUsers = async (req, res) => {
    try {
        const allUsers = await User.findAll({
            include: [
                {
                    model: Post, 
                    as: "posts",
                    attributes: ["id", "title", "content"]
                }
            ]
        })
    
        if (!allUsers || allUsers.length === 0) {
            throw ({
                status: 404,
                message: 'No hay Usuarios'
            })
        }
    
        res.status(200).json(allUsers)
    } catch (err) {
        console.error(err);
        res.status(err.status || 500).json(err.message || 'Error interno del servidor');
    }
}

export const createUser = async (req, res) => {
    const { name, surname, username, birthdate, email, password } = req.body
    const hashUserPassword = await hashString(password)
    try {
        const newUser = await User.create({
            name,
            surname,
            username,
            birthdate,
            email,
            password: hashUserPassword
        })

        if (!newUser) {
            throw ({
                status: 404,
                message: 'No se ha podido crear el Usuario'
            })
        }

        res.status(201).json(newUser)
    } catch (err) {
        console.error(err);
        res.status(err.status || 500).json(err.message || 'Error interno del servidor');
    }
}