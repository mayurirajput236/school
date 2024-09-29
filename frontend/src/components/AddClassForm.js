import React, { useState } from 'react';
import axios from 'axios';

const AddClassForm = ({ onClassCreated }) => {
    const [className, setClassName] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:5000/api/classes', { name: className });
        setClassName('');
        onClassCreated();
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={className}
                onChange={(e) => setClassName(e.target.value)}
                placeholder="Class Name"
                required
            />
            <button type="submit">Add Class</button>
        </form>
    );
};

export default AddClassForm;
