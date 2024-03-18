const pool = require('../db');
const bcrypt = require('bcrypt'); // Para comparar contraseñas de forma segura

const jwt = require('jsonwebtoken');
const { jsonwt } = require('../config');

const loginUser = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        //--------- Validamos el correo ----------
        const user = await pool.query(
            'SELECT * FROM users WHERE email = $1',
            [email]
        );

        if (user.rows.length === 0) {
            return res.status(401).json({ message: 'Usuario no encontrado' });
        }

        //--------- Validamos la contraseña ----------
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

        // -------- Login exitoso ----------------
        // ----- GENERA UN TOKEN ------
        const jwtSecret = jsonwt.JWT_SECRET;
        const payload = {
            id_user: userRow.id,
            email: userRow.email
        };
        const token = jwt.sign(payload, jwtSecret, { expiresIn: '1h' }); // Define la expiración del token (1 hora en este ejemplo)


        res.json({
            success: 'true',
            message: '¡Inicio de sesión exitoso!',
            token: token // Opcional
        });

        res.cookie('token', token, {
            httpOnly: true,
            secure: false,
            sameSite: 'strict'
        });

    } catch (error) {
        next(error);
    }
};

module.exports = { loginUser };