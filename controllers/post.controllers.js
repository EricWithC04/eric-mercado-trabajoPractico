import Post from "../models/Post.js";

export const getAllPosts = async (req, res) => {
    try {
        const allPosts = await Post.findAll()
    
        if (!allPosts || allPosts.length === 0) {
            throw ({
                status: 404,
                message: 'No hay Posts'
            })
        }
    
        res.status(200).json(allPosts)
    } catch (err) {
        console.error(err);
        res.status(err.status || 500).json(err.message || 'Error interno del servidor');
    }
}

export const getOnePosts = async (req, res) => {
    const { id } = req.params
    try {
        const browsedPost = await Post.findByPk(id)
    
        if (!browsedPost) {
            throw ({
                status: 404,
                message: 'El Post especificado no existe'
            })
        }
    
        res.status(200).json(browsedPost)
    } catch (err) {
        console.error(err);
        res.status(err.status || 500).json(err.message || 'Error interno del servidor');
    }
}

export const createPost = async (req, res) => {
    const { title, content } = req.body
    try {
        const today = new Date()
        const newPost = await Post.create({
            title,
            content,
            createDate: today.toISOString().split("T")[0],
            updateDate: "0000-00-00"   // la fecha de actualización se cambiará en el momento de que el Post se edite.
        })

        if (!newPost) {
            throw ({
                status: 404,
                message: 'No se ha podido crear el Post'
            })
        }

        res.status(201).json({
            message: 'Se ha creado el Post correctamente',
            newPost
        })
    } catch (err) {
        console.error(err);
        res.status(err.status || 500).json(err.message || 'Error interno del servidor');
    }
}

export const updatePost = async (req, res) => {
    const { id } = req.params
    const { title, content } = req.body
    try {
        const today = new Date()
        const updatedPost = await Post.update({
            title,
            content,
            updateDate: today.toISOString().split("T")[0]
        }, {
            where: {
                id
            }
        })

        if (!updatedPost) {
            throw ({
                status: 404,
                message: 'No se ha podido actualizar el Post'
            })
        }

        res.status(200).json({
            message: 'Post editado correctamente',
            updatedPost
        })
    } catch (err) {
        console.error(err);
        res.status(err.status || 500).json(err.message || 'Error interno del servidor');
    }
}

export const deletePost = async (req, res) => {
    const { id } = req.body
    try {
        const post = await Post.findByPk(id)
        const deletedPost = await post.update({ state: false })

        if (!deletedPost) {
            throw ({
                status: 404,
                message: 'No se ha podido eliminar el Post'
            })
        }

        res.status(200).json({ message: 'Post eliminado correctamente' })
    } catch (err) {
        console.error(err);
        res.status(err.status || 500).json(err.message || 'Error interno del servidor');
    }
}