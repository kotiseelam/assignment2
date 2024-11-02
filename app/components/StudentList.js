// StudentList.js
import React from 'react';
import StudentCard from './StudentCard';

// In this StudentList component, we render a list of StudentCard components for each student
function StudentList({ students }) {
    return (
        <div>
            {students.map((student, index) => (
                <StudentCard key={index} student={student} />
            ))}
        </div>
    );
}

export default StudentList;
