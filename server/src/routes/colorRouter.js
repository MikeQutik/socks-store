const router = require('express').Router();
const formatResponse = require('../utils/formatResponse');
const { Color } = require('../db/models')

router.route('/')

    .get(async (req, res) => {
        try {
            const allColors = await Color.findAll();
            res.status(200).json(formatResponse(200, 'Get ok', allColors))
        } catch (error) {
            res.status(404).json(formatResponse(400, 'Error', null, error.message))
        }
    })

module.exports = router;