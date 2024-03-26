const pool = require('../db');

const getAllCategories = async (req, res, next) => {
    try {
        const allCategories = await pool.query('SELECT * FROM categories');
        res.json(allCategories.rows);
    } catch (error) {
        next(error);
    }
};

const getSigleCategory = async (req, res, next) => {
    try {
        const { id } = req.params;
        const result = await pool.query('SELECT * FROM categories WHERE id_cat = $1', [id]);
        if (result.rows.length === 0) return res.status(404).json({
            message: "category not found",
        });

        return res.json(result.rows[0]);
    } catch (error) {
        next(error);
    }
};

const createCategory = async (req, res, next) => {
    const { cat_name, articles, image } = req.body;

    try {
        const result = await pool.query(
            'INSERT INTO categories (cat_name, articles, image) VALUES ($1, $2, $3) RETURNING *',
            [
                cat_name, articles, image
            ]);

        res.json(result.rows[0]);
    } catch (error) {
        next(error);
    };
};

const deleteCategory = async (req, res, next) => {
    const { id } = req.params;

    try {
        const result = await pool.query('DELETE FROM categories WHERE id_cat = $1', [id]);
        if (result.rowCount === 0)
            return res.status(404).json({
                message: 'Category not found'
            });

        return res.sendStatus(204);
    } catch (error) {
        next(error);
    }
};

const updateCategory = async (req, res, next) => {

    const { id } = req.params;
    const { cat_name, articles, image } = req.body;

    try {
        const result = await pool.query('UPDATE categories SET cat_name = $1, articles = $2, image = $3 WHERE id_cat = $4 RETURNING *', [cat_name, articles, image, id]);

        if (result.rows.length === 0)
            return res.status(404).json({
                message: 'Category not found',
            })

        return res.json(result.rows[0]);
    } catch (error) {
        next(error);
    }
};

module.exports = {
    getAllCategories,
    getSigleCategory,
    createCategory,
    deleteCategory,
    updateCategory
};