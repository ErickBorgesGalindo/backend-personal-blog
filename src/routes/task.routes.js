const {Router} = require('express');

const router = Router();


//---------- Categories 
router.get('/categories',(requ, res) => {
    res.send('retrieving a list of categories')
});

router.get('/categories/1',(requ, res) => {
    res.send('retrieving a sigle categories')
});

router.post('/categories',(requ, res) => {
    res.send('creating a category')
});

router.delete('/categories',(requ, res) => {
    res.send('deleting a category')
});

router.put('/categories',(requ, res) => {
    res.send('updating a category')
});

//---------- Writers 
// router.get('/writers',(requ, res) => {
//     res.send('retrieving a list of writers')
// });

// router.post('/writers',(requ, res) => {
//     res.send('creating a writer')
// });

// router.delete('/writers',(requ, res) => {
//     res.send('deleting a writer')
// });

// router.put('/writers',(requ, res) => {
//     res.send('updating a writer')
// });

//---------- Articles 
// router.get('/articles',(requ, res) => {
//     res.send('retrieving a list of articles')
// });

// //---------- Commentaries 
// router.get('/commentaries',(requ, res) => {
//     res.send('retrieving a list of commentaries')
// });

module.exports = router;