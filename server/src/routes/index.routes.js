const router = require('express').Router();
const mainRouter = require('./main.routes');
const authRouter = require('./auth.routes');

router.use('/', mainRouter);
router.use('/auth', authRouter);


module.exports = router;