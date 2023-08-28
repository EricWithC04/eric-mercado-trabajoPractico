import { checkSchema } from 'express-validator';

export const createPostSchema = checkSchema({
    title: {
        isLength: {
            options: { min: 8, max: 60},
            errorMessage: "El titulo debe tener un minimo de 8 caracteres y un maximo de 60!"
        }
    },
    content: {
        isLength: {
            options: { max: 500 },
            errorMessage: "El contenido puede tener un maximo de 500 caracteres!"
        }
    },
    idUser: {
        notEmpty: true,
        errorMessage: "El id del usuario es requerido!"
    }
});