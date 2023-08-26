import User from "../models/Usuario.js";
import Post from "../models/Post.js";
import Coment from "../models/Comentario.js";

export const getAllUsers = async (req, res) => {
    try {
        const allUsers = await User.findAll()
    
        if (!allUsers || allUsers.length === 0) {
            throw ({
                status: 404,
                message: 'No hay Usuarios'
            })
        }
    
        res.json(allUsers)
    } catch (err) {
        console.error(err);
        res.status(err.status || 500).json(err.message || 'Error interno del servidor');
    }
}

export const getAllPosts = async (req, res) => {
    try {
        const allPosts = await Post.findAll()
    
        if (!allPosts || allPosts.length === 0) {
            throw ({
                status: 404,
                message: 'No hay Posts'
            })
        }
    
        res.json(allPosts)
    } catch (err) {
        console.error(err);
        res.status(err.status || 500).json(err.message || 'Error interno del servidor');
    }
}

export const getAllComents = async (req, res) => {
    try {
        const allComents = await Coment.findAll()
    
        if (!allComents || allComents.length === 0) {
            throw ({
                status: 404,
                message: 'No hay Comentarios'
            })
        }
    
        res.json(allComents)
    } catch (err) {
        console.error(err);
        res.status(err.status || 500).json(err.message || 'Error interno del servidor');
    }
}