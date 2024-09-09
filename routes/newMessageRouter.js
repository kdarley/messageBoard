const express = require('express');
const newMessageController = require('../controllers/newMessageController.js');

const router = express.Router();

router.get('/', newMessageController.getForm);
router.post('/', newMessageController.postForm);
module.exports = router;