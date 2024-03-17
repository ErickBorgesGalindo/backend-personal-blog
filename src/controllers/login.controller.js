const pool = require('../db');
const bcrypt = require('bcrypt'); // Para comparar contraseñas de forma segura

const loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await pool.query(
      'SELECT * FROM users WHERE email = $1',
      [email]
    );

    if (user.rows.length === 0) {
      return res.status(401).json({ message: 'Usuario no encontrado' });
    }

    const userRow = user.rows[0];

    const salt = await bcrypt.genSalt(10); // Genera una sal aleatoria
    const hashedPassword = await bcrypt.hash(password, salt);
    const isPasswordCorrect = await bcrypt.compare(userRow.password, hashedPassword);

    // console.log('----------PASSS-----------');
    // console.log(isPasswordCorrect);
    // console.log(userRow.password);
    // console.log(password);
    // console.log(hashedPassword);

    if (!isPasswordCorrect) {
      return res.status(401).json({ message: 'Contraseña incorrecta' });
    } 

    // Login exitoso, genera un token o maneja la sesión
    res.json({
      success: 'true',
      message: '¡Inicio de sesión exitoso!',
      token: 'token-de-sesion-generado' // Opcional
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { loginUser };