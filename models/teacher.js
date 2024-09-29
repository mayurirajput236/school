const {  DataTypes } = require('sequelize');
const sequelize = require('../config/db.js')
const Class = require('../models/class.js');

const Teacher = sequelize.define('Teacher', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    subject: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

Teacher.belongsTo(Class, { foreignKey: 'classId' });

module.exports = Teacher;
