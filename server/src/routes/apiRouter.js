const router = require('express').Router();
const colorRouter = require('./colorRouter');
const patternRouter = require('./patternRouter');

router.use('/color', colorRouter)
router.use('/pattern', patternRouter)

module.exports = router;