const express = require('express');
const router = express.Router();
const classController = require('../controller/classController.js');

router.get('/', classController.getClasses);
router.post('/', classController.createClass);

module.exports = router;
