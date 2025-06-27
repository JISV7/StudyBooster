import app from './app.js';
import config from './config/config.js';
import { connectDB } from './database/db.js';

const startServer = async () => {
  try {
    // Conectar a MySQL
    await connectDB();
    console.log('Conectado a MySQL');
    
    // Iniciar servidor
    app.listen(config.port, () => {
      console.log(`Servidor escuchando en puerto ${config.port}`);
    });
  } catch (error) {
    console.error('Error al iniciar servidor:', error);
    process.exit(1);
  }
};

startServer();