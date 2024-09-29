import React from 'react';

const TeacherList = ({ teachers }) => {
    return (
        <ul>
            {teachers.map((teacher) => (
                <li key={teacher.id}>
                    {teacher.name} - {teacher.subject} (Class: {teacher.Class ? teacher.Class.name : 'N/A'})
                </li>
            ))}
        </ul>
    );
};

export default TeacherList;
