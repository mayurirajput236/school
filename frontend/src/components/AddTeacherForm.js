import React, { useState } from 'react';
import axios from 'axios';

const AddTeacherForm = ({ classes, onTeacherAdded }) => {
    const [name, setName] = useState('');
    const [subject, setSubject] = useState('');
    const [classId, setClassId] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:5000/api/teachers', { name, subject, classId });
        setName('');
        setSubject('');
        setClassId('');
        onTeacherAdded();
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Teacher Name"
                required
            />
            <input
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="Subject"
                required
            />
            <select value={classId} onChange={(e) => setClassId(e.target.value)} required>
                <option value="">Choose Class</option>
                {classes.map((cls) => (
                    <option key={cls.id} value={cls.id}>
                        {cls.name}
                    </option>
                ))}
            </select>
            <button type="submit">Add Teacher</button>
        </form>
    );
};

export default AddTeacherForm;
