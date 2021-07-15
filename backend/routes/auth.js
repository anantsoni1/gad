const router = require('express').Router();
const client = require('../controllers/user');

router.post('/login', client.loginUser);

module.exports = {
  router: router,
  basePath: '/api'
};
