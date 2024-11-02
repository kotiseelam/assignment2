"use client"
// page.js
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import StudentList from './components/StudentList'; 
import StudentForm from './components/StudentForm';
import studentsData from './data/students.json'; // This is path to the data of list of 5 students

function App() {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        setStudents(studentsData); // This is  initial state with imported JSON data
    }, []);

    const addStudent = (student) => {
        setStudents([...students, student]);
    };

    return (
        <div className="App">
            <Navbar />
            <div className="container mx-auto p-4">
                <StudentForm addStudent={addStudent} />
                <StudentList students={students} />
            </div>
            <Footer />
        </div>
    );
}

export default App;
