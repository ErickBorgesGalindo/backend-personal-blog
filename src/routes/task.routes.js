const {Router} = require('express');
const { getAllCategories, getSigleCategory, createCategory, deleteCategory, updateCategory } = require('../controllers/task.controller');
const router = Router();


//---------- Categories 
router.get('/categories', getAllCategories );

router.get('/categories/:id', getSigleCategory);

router.post('/categories', createCategory);

router.delete('/categories/:id',deleteCategory);

router.put('/categories/:id',updateCategory);

//---------- Writers 
// router.get('/writers',(req, res) => {
//     res.send('retrieving a list of writers')
// });

// router.post('/writers',(req, res) => {
//     res.send('creating a writer')
// });

// router.delete('/writers',(req, res) => {
//     res.send('deleting a writer')
// });

// router.put('/writers',(req, res) => {
//     res.send('updating a writer')
// });

//---------- Articles 
// router.get('/articles',(req, res) => {
//     res.send('retrieving a list of articles')
// });

// //---------- Commentaries 
// router.get('/commentaries',(req, res) => {
//     res.send('retrieving a list of commentaries')
// });

module.exports = router;