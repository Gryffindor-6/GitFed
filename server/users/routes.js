const express = require('express');

const router = express.Router();

/* ping */
router.get('/ping', (_, res) =>
  res.send({ ping: 'ok', route: '/api/users/ping' })
);

module.exports = router;
