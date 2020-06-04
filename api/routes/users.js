const express = require('express');
const router = express.Router();
const controller = require('../controllers/users');

router.post('/', controller.signupUser);
router.post('/login', controller.loginUser);

module.exports = router;