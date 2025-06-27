import mysql from 'mysql2/promise';
import config from './config.js';

// 1. Crear el pool de conexiones
const pool = mysql.createPool({
  host: config.DB_HOST,
  user: config.DB_USER,
  password: config.DB_PASSWORD,
  database: config.DB_NAME,
  port: config.DB_PORT,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

export const connectDB = async () => {
  try {
    const connection = await pool.getConnection();
    console.log('✅ Conectado a MySQL');
    connection.release();
    return pool;
  } catch (error) {
    console.error('❌ Error de conexión a MySQL:', error.message);
    process.exit(1);
  }
};

export default pool;