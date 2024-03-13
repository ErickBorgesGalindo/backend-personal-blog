const {Router} = require('express');

const router = Router();


//---------- Categories 
router.get('/categories', async (req, res) => {
    res.send('retrieving a list of categories')
});

router.get('/categories/1',(req, res) => {
    res.send('retrieving a sigle categories')
});

router.post('/categories',(req, res) => {
    res.send('creating a category')
});

router.delete('/categories',(req, res) => {
    res.send('deleting a category')
});

router.put('/categories',(req, res) => {
    res.send('updating a category')
});

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