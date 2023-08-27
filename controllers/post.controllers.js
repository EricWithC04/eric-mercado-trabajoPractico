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
    
        res.json(allPosts)
    } catch (err) {
        console.error(err);
        res.status(err.status || 500).json(err.message || 'Error interno del servidor');
    }
}