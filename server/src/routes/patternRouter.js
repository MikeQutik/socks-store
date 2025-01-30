const router = require('express').Router();
const formatResponse = require('../utils/formatResponse');
const { Pattern } = require('../db/models')

router.route('/')

    .get(async (req, res) => {
        try {
            const allPatterns = await Pattern.findAll();
            res.status(200).json(formatResponse(200, 'Get ok', allPatterns))
        } catch (error) {
            res.status(404).json(formatResponse(400, 'Error', null, error.message))
        }
    })

module.exports = router;