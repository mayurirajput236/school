const Class = require('../models/class.js');

exports.getClasses = async (req, res) => {
    const classes = await Class.findAll();
    res.json(classes);
};

exports.createClass = async (req, res) => {
    const { name } = req.body;
    const newClass = await Class.create({ name });
    res.status(201).json(newClass);
};
