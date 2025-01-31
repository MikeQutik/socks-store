const router = require('express').Router();
const colorRouter = require('./colorRouter');
const patternRouter = require('./patternRouter');
const imageRouter = require('./imageRouter');
const sockRouter = require('./sockRouter');

router.use('/color', colorRouter)
router.use('/pattern', patternRouter)
router.use('/image', imageRouter)
router.use('/sock', sockRouter)

module.exports = router;