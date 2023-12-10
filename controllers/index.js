const router = require('express').Router();
const userRoutes = require('./userRoutes');
const projectRoutes = require('./blogRoutes');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
module.exports = router;
