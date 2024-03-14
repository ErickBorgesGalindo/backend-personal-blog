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
    res.send('deleting a category')
};

const updateCategory = async (req, res) => {
    res.send('updating a category')
}

module.exports = {
    getAllCategories,
    getSigleCategory,
    createCategory,
    deleteCategory,
    updateCategory
};