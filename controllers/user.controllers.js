import User from "../models/Usuario.js";

export const getAllUsers = async (req, res) => {
    try {
        const allUsers = await User.findAll()
    
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
    try {
        const newUser = await User.create({
            name,
            surname,
            username,
            birthdate,
            email,
            password
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