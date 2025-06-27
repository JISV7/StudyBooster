export default class User {
  static async create({ name, email }) {
    const result = await query(
      'INSERT INTO users (name, email) VALUES (?, ?)',
      [name, email]
    );
    return result.insertId;
  }

  static async findByEmail(email) {
    const [user] = await query(
      'SELECT * FROM users WHERE email = ?',
      [email]
    );
    return user;
  }
}