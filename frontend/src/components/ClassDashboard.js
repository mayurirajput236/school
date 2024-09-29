import React, { useState, useEffect } from 'react';
import AddClassForm from './AddClassForm';
import ClassList from './ClassList';
import axios from 'axios';

const ClassDashboard = () => {
    const [classes, setClasses] = useState([]);

    useEffect(() => {
        fetchClasses();
    }, []);

    const fetchClasses = async () => {
        const response = await axios.get('http://localhost:5000/api/classes');
        setClasses(response.data);
    };

    return (
        <div>
            <h1>Class Dashboard</h1>
            <AddClassForm onClassCreated={fetchClasses} />
            <ClassList classes={classes} />
        </div>
    );
};

export default ClassDashboard;
