const router = require('express').Router();
const colorRouter = require('./colorRouter');
const patternRouter = require('./patternRouter');
const imageRouter = require('./imageRouter');

router.use('/color', colorRouter)
router.use('/pattern', patternRouter)
router.use('/image', imageRouter)

module.exports = router;