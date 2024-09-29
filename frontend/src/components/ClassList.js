import React from 'react';

const ClassList = ({ classes }) => {
    return (
        <ul>
            {classes.map((cls) => (
                <li key={cls.id}>{cls.name}</li>
            ))}
        </ul>
    );
};

export default ClassList;
