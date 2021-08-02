const express = require('express');
const router = express.Router();

const articlesCtrl = require('../controllers/articles');
const auth = require('../middlewares/auth');

router.get('/', auth, articlesCtrl.getAllArticles);
router.get('/:id', auth, articlesCtrl.getOneArticle);
router.post('/', articlesCtrl.createArticle);
router.put('/:id', articlesCtrl.updateArticle);
router.delete('/:id', articlesCtrl.deleteArticle);

module.exports = router;