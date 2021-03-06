const router = require('express').Router();
const {Post, User, Comment } = require('../models');
const withAuth = require('../utils/auth');

// get all user posts
router.get('/', withAuth, (req, res) => {
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
                attributes: ['id','username']
            }
        ]
    })
    .then(dbPostData => {
        //serialize data
        const posts = dbPostData.map(post => post.get({ plain: true }));
        res.render('dashboard', { 
            posts,
            loggedIn: true,
            dashUserId: req.session.user_id
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// gets chosen post to edit
router.get('/edit/:id', withAuth, (req, res) => {
    Post.findOne({
        where: {
            id: req.params.id
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
                attributes: ['id','username']
            }
        ]
    })
    .then(dbPostData => {
        if (!dbPostData) {
            res.status(404).json({ message: 'No post found with this id' });
            return;
        }
        //serialize data
        const post = dbPostData.get({ plain: true });
        res.render('edit-post', { 
            post,
            loggedIn: true,
            postAuthorId: post.user.id,
            dashUserId: req.session.user_id
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;