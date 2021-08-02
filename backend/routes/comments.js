const express = require('express');
const router = express.Router();

const commentsCtrl = require('../controllers/comments');
const auth = require('../middlewares/auth');

// router.get('/comments', commentsCtrl.getAllArticles);
router.get('/:id', auth, commentsCtrl.getArticleComments);

module.exports = router;