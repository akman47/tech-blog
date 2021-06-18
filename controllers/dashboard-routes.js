const router = require('express').Router();
const {Post, User, Comment } = require('../models');
const withAuth = require('../utils/auth');

// get all user posts
router.get('/', (req, res) => {
    Post.findAll({
        where: {
            user_id: req.session.user_id
        },
        attributes: [
            'id',
            'title',
            'post_text',
            'created_at'
        ],
        include: [
            {
                model: Comment,
                attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
                include: {
                    model: User,
                    attributes: ['username']
                }
            }, 
            {
                model: User,
                attributes: ['username']
            }
        ]
    })
    .then(dbPostData => {
        //serialize data
        const posts = dbPostData.map(post => post.get({ plain: true }));
        res.render('dashboard', { posts, loggedIn: true });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// gets chosen post to edit

module.exports = router;