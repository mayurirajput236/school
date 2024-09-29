import React, { useState, useEffect } from 'react';
import AddTeacherForm from './AddTeacherForm';
import TeacherList from './TeacherList';
import axios from 'axios';

const TeacherDashboard = () => {
    const [teachers, setTeachers] = useState([]);
    const [classes, setClasses] = useState([]);

    useEffect(() => {
        fetchTeachers();
        fetchClasses();
    }, []);

    const fetchTeachers = async () => {
        const response = await axios.get('http://localhost:5000/api/teachers');
        setTeachers(response.data);
    };

    const fetchClasses = async () => {
        const response = await axios.get('http://localhost:5000/api/classes');
        setClasses(response.data);
    };

    return (
        <div>
            <h1>Teacher Dashboard</h1>
            <AddTeacherForm classes={classes} onTeacherAdded={fetchTeachers} />
            <TeacherList teachers={teachers} />
        </div>
    );
};

export default TeacherDashboard;
