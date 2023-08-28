import { checkSchema } from 'express-validator';

export const createCommentSchema = checkSchema({
    content: {
        notEmpty: true,
        errorMessage: "El contenido del comentario es requerido!"
    },
    idPost: {
        notEmpty: true,
        errorMessage: "El id del post es requerido!"
    }
});

