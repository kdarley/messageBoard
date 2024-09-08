
const express = require('express');
const indexController = require('../controllers/indexController.js');

const router = express.Router();

router.get('/', indexController.getMessages);

module.exports = router;