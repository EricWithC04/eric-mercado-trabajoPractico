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

export const createComment = async (req, res) => {
    const { content } = req.body
    try {
        const today = new Date()
        const newComment = await Comment.create({
            content,
            createDate: today.toISOString().split("T")[0]
        })

        if (!newComment) {
            throw ({
                status: 404,
                message: 'No se ha podido crear el Comentario'
            })
        }

        res.status(201).json({
            message: 'Se ha creado el Comentario correctamente',
            newComment
        })
    } catch (err) {
        console.error(err);
        res.status(err.status || 500).json(err.message || 'Error interno del servidor');
    }
}