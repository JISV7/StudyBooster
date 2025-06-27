import User from '../models/userModel.js';

export const registerUser = async (req, res) => {
  try {
    const { name, email } = req.body;
    
    // Validar si el usuario existe
    const existingUser = await User.findByEmail(email);
    if (existingUser) {
      return res.status(409).json({ error: 'El usuario ya existe' });
    }

    // Crear nuevo usuario
    const userId = await User.create({ name, email });
    
    res.status(201).json({ 
      id: userId, 
      name, 
      email 
    });
  } catch (error) {
    res.status(500).json({ error: 'Error del servidor' });
  }
};

export const getUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};