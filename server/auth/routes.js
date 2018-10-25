const { githubLogIn, getUserInfo, storeUserInfo } = require('./controller');
const express = require('express');
const router = express.Router();

/* ping */
router.get('/ping', (req, res) =>
  res.send({ ping: 'ok', route: '/auth/ping' })
);

router.get('/github', githubLogIn, getUserInfo, storeUserInfo);

/* Configure routes */
router.use('/sessions', require('../sessions/routes'));

module.exports = router;
