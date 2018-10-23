const express = require('express');

const router = express.Router();

/* ping */
router.get('/ping', (req, res) => res.send({ ping: 'ok', route: '/api/ping' }));

/* Configure routes */
router.use('/users', require('../users/routes'));

module.exports = router;
