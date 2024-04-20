const User = require('../model/user');

exports.getAllUsers = async (req, res) => {
    try {
        // Busca todos los usuarios en la base de datos
        const usuarios = await User.find();

        // Devuelve los usuarios encontrados como respuesta
        res.json(usuarios);
    } catch (error) {
        // Maneja cualquier error que pueda ocurrir
        console.log(error);
        res.status(500).json({ message: 'Error al obtener los usuarios' });
    }
};
