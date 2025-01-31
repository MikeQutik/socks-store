const router = require('express').Router();
const formatResponse = require('../utils/formatResponse');
const { Sock } = require('../db/models');

router.route('/')

    .post(async (req, res) => {
        try {
            const newSock = await Sock.create();
            res.status(200).json(formatResponse(200, 'Create ok', newSock))
        } catch (error) {
            res.status(404).json(formatResponse(400, 'Error', null, error.message))
        }
    })

router.route('/:id')

    .delete(async (req, res) => {
        try {
            const { id } = req.params;
            const deletedSock = await Sock.destroy({ where: { id } });
            if (deletedSock) {
                res.status(200).json(formatResponse(200, 'Delete ok', deletedSock))
            } else {
                res.status(404).json(formatResponse(404, 'No socks'))
            }
        } catch (error) {
            res.status(404).json(formatResponse(400, 'Error', null, error.message))
        }
    })

module.exports = router;