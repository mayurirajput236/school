const Teacher = require('../models/teacher.js');
const Class = require('../models/class.js');

exports.getTeachers = async (req, res) => {
    const teachers = await Teacher.findAll({ include: Class });
    res.json(teachers);
};

exports.createTeacher = async (req, res) => {
    const { name, subject, classId } = req.body;
    const newTeacher = await Teacher.create({ name, subject, classId });
    res.status(201).json(newTeacher);
};
