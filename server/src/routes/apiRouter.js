const router = require('express').Router();
const colorRouter = require('./colorRouter');

router.use('/color', colorRouter)

module.exports = router;