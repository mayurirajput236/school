const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const sequelize = require('sequelize');
const Class = require('./models/class.js');
const Teacher = require('./models/teacher.js');
const classRoutes = require('./routes/classRoutes.js');
const teacherRoutes = require('./routes/teacherRoutes.js');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Sync database
(async () => {
    await Class.sync();
    await Teacher.sync();
})();

app.use('/api/classes', classRoutes);
app.use('/api/teachers', teacherRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
