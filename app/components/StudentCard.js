// StudentCard.js
import React from 'react';

// In this StudentCard component, we display each student's information (name, date of birth, and grade) in a card format
function StudentCard({ student }) {
    return (
        <div className="p-4 m-2 border rounded shadow-sm">
            <h2 className="font-semibold">{student.firstName} {student.lastName}</h2>
            <p>DOB: {student.dob}</p>
            <p>Grade: {student.grade}</p>
        </div>
    );
}

export default StudentCard;
