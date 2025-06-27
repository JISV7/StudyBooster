import User from '../models/User.model.js';

export const createUserWithVerification = async (userData) => {
  // Verificar si el email está registrado
  const existingUser = await User.findByEmail(userData.email);
  if (existingUser) {
    throw new Error('El email ya está registrado');
  }
  
  // Crear usuario
  const userId = await User.create(userData);
  
  // Enviar email de verificación (simulado)
  console.log(`Email de verificación enviado a ${userData.email}`);
  
  return userId;
};