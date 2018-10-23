const express = require('express');
const router = express.Router();

/* ping */
router.get('/ping', (req, res) =>
  res.send({ ping: 'ok', route: '/auth/ping' })
);

/* Configure routes */
router.use('/sessions', require('../sessions/routes'));

module.exports = router;
