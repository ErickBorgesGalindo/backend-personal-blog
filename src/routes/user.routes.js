const {Router} = require('express');
const { getAllUsers } = require('../controllers/user.controller');
const router = Router();


//---------- Categories 
router.get('/users', getAllUsers);

module.exports = router;