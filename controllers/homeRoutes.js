const router = require('express').Router();
const { Blog, User, Comment } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    try {
        // Get all projects and JOIN with user data
        const blogData = await Blog.findAll({
            include: [
                {
                    model: User,
                    attributes: ['username'],
                },
                {
                    model: Comment,
                    attributes: ["blog_comment"]
                }
            ],
        });

        // Serialize data so the template can read it
        const blogposts = blogData.map((blogpost) => blogpost.get({ plain: true }));

        // Pass serialized data and session flag into template
        res.render('homepage', {
            blogposts,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/blogs/:id', async (req, res) => {
    try {
        const blogData = await Blog.findByPk(req.params.id, {
            include: [
                {
                    model: User,
                    attributes:["username"],
                },
                {
                    model: Comment,
                    include: [User],
                },
            ],
        });

        const blogpost = blogData.get({ plain: true });

        res.render('blogs', {
            ...blogpost,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

// Use withAuth middleware to prevent access to route
router.get('/dashboard', withAuth, async (req, res) => {
    try {
        // Find the logged in user based on the session ID
        const userData = await User.findByPk(req.session.user_id, {
            attributes: { exclude: ['password'] },
            include: [
                { 
                    model: Blog,
                    include: [User], 
                },
                {
                    model: Comment,
                },
            ],
        });

        const user = userData.get({ plain: true });
        console.log(user);
        
        res.render('dashboard', {
            ...user,
            logged_in: true
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/login', (req, res) => {
    // If the user is already logged in, redirect the request to another route
    if (req.session.logged_in) {
        res.redirect('/dashboard');
        return;
    }

    res.render('login');
});

router.get('/signup', (req, res)=>{
    if(req.session.logged_in){
        res.redirect('/');
        return;
    }
    res.render('signup');
});

module.exports = router;