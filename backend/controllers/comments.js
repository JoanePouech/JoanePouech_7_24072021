const model = require ('../models/index');

//Requête GET ciblée
exports.getArticleComments = (req, res, next) => {
    model.Comment.findAll({where: {ArticleId: req.params.id}}, {order:[['id','DESC']]})
        .then(comments => res.status(200).json(comments))
        .catch(error => res.status(404).json({error}));
};