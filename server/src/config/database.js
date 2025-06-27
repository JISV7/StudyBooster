import mysql from 'mysql2/promise';
import config from '../config/config.js';

const pool = mysql.createPool(config.db);

export const query = async (sql, params) => {
  const [rows] = await pool.execute(sql, params);
  return rows;
};

export default pool;