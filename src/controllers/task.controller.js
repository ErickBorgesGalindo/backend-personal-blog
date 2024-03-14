const pool = require('../db');

const getAllCategories = async (req, res) => {
    try {
        const allCategories = await pool.query('SELECT * FROM categories');
        res.json(allCategories.rows);
    } catch (error) {
        console.log(error);
        res.json({ error: error, message });
    }
};

const getSigleCategory = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await pool.query('SELECT * FROM categories WHERE id_cat = $1', [id]);
        if (result.rows.length === 0) return res.status(404).json({
            message: "category not found",
        });

        return res.json(result.rows[0]);
    } catch (error) {
        console.log(error.message);
    }
};

const createCategory = async (req, res) => {
    const { nombre, articles, image } = req.body;

    try {
        const result = await pool.query(
            'INSERT INTO categories (nombre, articles, image) VALUES ($1, $2, $3) RETURNING *',
            [
                nombre, articles, image
            ]);

        res.json(result.rows[0]);
    } catch (error) {
        res.json({ error: error, message });
    };
};

const deleteCategory = async (req, res) => {
    const { id } = req.params;

    const result = await pool.query('DELETE FROM categories WHERE id_cat = $1', [id]);
    if (result.rowCount === 0)
        return res.status(404).json({
            message: 'Category not found'
        });

    return res.sendStatus(204);
};

const updateCategory = async (req, res) => {

    const { id } = req.params;
    const { nombre, articles, image } = req.body;

    const result = await pool.query('UPDATE categories SET nombre = $1, articles = $2, image = $3 WHERE id_cat = $4 RETURNING *', [nombre, articles, image, id]);

    if (result.rows.length === 0)
        return res.status(404).json({
            message: 'Category not found',
        })

    return res.json(result.rows[0]);
};

module.exports = {
    getAllCategories,
    getSigleCategory,
    createCategory,
    deleteCategory,
    updateCategory
};