const {Router} = require('express');
const { getAllCategories, getSigleCategory, createCategory, deleteCategory, updateCategory } = require('../controllers/category.controller');
const router = Router();


//---------- Categories 
router.get('/categories', getAllCategories );

router.get('/categories/:id', getSigleCategory);

router.post('/categories', createCategory);

router.delete('/categories/:id',deleteCategory);

router.put('/categories/:id',updateCategory);

module.exports = router;