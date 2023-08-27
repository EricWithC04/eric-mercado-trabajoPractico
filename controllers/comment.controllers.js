import Comment from "../models/Comentario.js";

export const getAllComments = async (req, res) => {
    try {
        const allComents = await Comment.findAll()
    
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