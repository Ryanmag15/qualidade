const Users = require('../models/Users'); // Importa a model Users definida com Sequelize

// Método para listar todos os usuários
const listUsers = async (req, res) => {
    try {
        const users = await Users.findAll({
            attributes: ['id', 'name', 'email', 'password'] // Liste todos os atributos que deseja retornar
        });
        res.json(users);
    } catch (error) {
        console.error('Failed to fetch users:', error);
        res.status(500).json({ error: 'Failed to fetch users ' + error.message });
    }
};

// Método para criar um novo usuário
const createUser = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const newUser = await Users.create({ name, email, password });
        res.status(201).json(newUser);
    } catch (error) {
        console.error('Failed to create user:', error);
        res.status(500).json({ error: 'Failed to create user ' + error.message });
    }
};

// Método para buscar um usuário pelo ID
const getUserById = async (req, res) => {
    const userId = req.params.id;
    try {
        const user = await Users.findByPk(userId);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.json(user);
    } catch (error) {
        console.error('Failed to fetch user:', error);
        res.status(500).json({ error: 'Failed to fetch user ' + error.message });
    }
};

// Método para atualizar um usuário pelo ID
const updateUserById = async (req, res) => {
    const userId = req.params.id;
    const { name, email, password } = req.body;
    try {
        let user = await Users.findByPk(userId);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        user.name = name;
        user.email = email;
        user.password = password;
        await user.save();
        res.json(user);
    } catch (error) {
        console.error('Failed to update user:', error);
        res.status(500).json({ error: 'Failed to update user ' + error.message });
    }
};

// Método para deletar um usuário pelo ID
const deleteUserById = async (req, res) => {
    const userId = req.params.id;
    try {
        const user = await Users.findByPk(userId);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        await user.destroy();
        res.status(204).send();
    } catch (error) {
        console.error('Failed to delete user:', error);
        res.status(500).json({ error: 'Failed to delete user ' + error.message });
    }
};

module.exports = {
    listUsers,
    createUser,
    getUserById,
    updateUserById,
    deleteUserById
};
