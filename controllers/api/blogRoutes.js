const router = require('express').Router();
const { Blog } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', async (req, res) => {
    try {
      const newPost = await Blog.create({
        ...req.body,
        user_id: req.session.user_id,
      });
  
      res.status(200).json(newPost);
    } catch (err) {
      res.status(400).json(err);
    }
  });

  router.post('/:id/comment', async(req, res)=>{
    try{
        res.status(200).json(``);
    }catch(err){
        res.status(400).json(err);
    }
  });

  router.delete('/:id', withAuth, async (req, res) => {
    try {
      const blogData = await Blog.destroy({
        where: {
          id: req.params.id,
          user_id: req.session.user_id,
        },
      });
  
      if (!blogData) {
        res.status(404).json({ message: 'No Blog found with this id!' });
        return;
      }
  
      res.status(200).json(blogData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  module.exports = router;