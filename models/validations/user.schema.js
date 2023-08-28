import { checkSchema } from 'express-validator';

export const createUserSchema = checkSchema({
    name: {
        notEmpty: true,
        errorMessage: "El nombre es requerido!"
    },
    surname: {
        notEmpty: true,
        errorMessage: "El apellido es requerido!"
    },
    username: {
        notEmpty: true,
        errorMessage: "El nombre de usuario es requerido!"
    },
    birthdate: {
        notEmpty: true,
        errorMessage: "La fecha de nacimiento es requerida!"
    },
    email: {
        errorMessage: 'Email invalido!',
        isEmail: true
    },
    password: {
        isLength: {
            options: { min: 8 },
            errorMessage: 'La contraseña debe tener por lo menos 8 caracteres!'
        }
    }
});