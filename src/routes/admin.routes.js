const {Router} = require('express');
const { getAllArticles } = require('../controllers/admin.controller');
const router = Router();


router.get('/admin/articles', getAllArticles);

module.exports = router;