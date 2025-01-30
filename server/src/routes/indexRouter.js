const router = require('express').Router();
const apiRouter = require('./apiRouter');
const authRouter = require('../routes/auth.routes')


router.use('/api', apiRouter);
router.use('/auth', authRouter)

module.exports = router;