const express = require('express');
const router = express.Router();
const teacherController = require('../controller/teacherController.js');

router.get('/', teacherController.getTeachers);
router.post('/', teacherController.createTeacher);

module.exports = router;
