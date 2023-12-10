const router = require('express').Router();
const { compare } = require('bcrypt');
const { Comment } = require('../../models')
const withAuth = require('../../utils/auth');
const session = require('express-session');

router.get('/', (req, res) => {
    Comment.findAll()
        .then(CommentData => res.json(CommentData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.post('/', withAuth, (req, res) => {
    if (req.session) {
        Comment.create({
            blog_comment: req.body.blog_comment,
            blogpost_id: req.body.blogpost_id,
            user_id: session.user_id,
        }).then(CommentData => res.json(CommentData))
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });
    }
});

router.delete('/:id', (req, res) => {
    Comment.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(CommentData => {
        if(!CommentData){
            res.status(404).json({ message: "No such ID exist" });
            return;
        }
        res.json(CommentData);
    })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;