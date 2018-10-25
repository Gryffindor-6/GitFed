const express = require('express');

const router = express.Router();

/* ping */
router.get('/ping', (_, res) =>
  res.send({ ping: 'ok', route: '/api/users/ping' })
);

router.get('/data', (req, res, next) => {
  console.log('data', res.locals.userData);
});
// router.get('/', (req, res) => {

//   res.send(req.userList)
// })

module.exports = router;
