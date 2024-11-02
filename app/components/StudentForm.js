import { useState } from 'react';

export default function StudentForm({ addStudent }) {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [dob, setDob] = useState('');
    const [grade, setGrade] = useState('');
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        const newErrors = {};

        // Validate first name
        if (!firstName.match(/^[A-Za-z]+$/)) {
            newErrors.firstName = 'First name should contain only letters.';
        }

        // Validate last name
        if (!lastName.match(/^[A-Za-z]+$/)) {
            newErrors.lastName = 'Last name should contain only letters.';
        }

        // Validate date of birth
        const birthDate = new Date(dob);
        const today = new Date();
        const age = today.getFullYear() - birthDate.getFullYear();
        if (!dob || isNaN(birthDate.getTime()) || age < 5) {
            newErrors.dob = 'Enter a valid date. Student must be at least 5 years old.';
        }

        // Validate grade (must be a number between 1 and 12)
        if (!grade.match(/^(1[0-2]|[1-9])$/)) {
            newErrors.grade = 'Grade should be a number between 1 and 12.';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            addStudent({ firstName, lastName, dob, grade: parseInt(grade) }); // Convert grade to a number
            setFirstName('');
            setLastName('');
            setDob('');
            setGrade('');
            setErrors({});
        }
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div>
                <label className="block text-gray-700 text-sm font-bold mb-2">First Name</label>
                <input
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                {errors.firstName && <p className="text-red-500 text-xs italic">{errors.firstName}</p>}
            </div>
            <div>
                <label className="block text-gray-700 text-sm font-bold mb-2">Last Name</label>
                <input
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                {errors.lastName && <p className="text-red-500 text-xs italic">{errors.lastName}</p>}
            </div>
            <div>
                <label className="block text-gray-700 text-sm font-bold mb-2">Date of Birth</label>
                <input
                    type="date"
                    value={dob}
                    onChange={(e) => setDob(e.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                {errors.dob && <p className="text-red-500 text-xs italic">{errors.dob}</p>}
            </div>
            <div>
                <label className="block text-gray-700 text-sm font-bold mb-2">Grade</label>
                <input
                    type="number"
                    value={grade}
                    onChange={(e) => setGrade(e.target.value)}
                    min="1"
                    max="12"
                    placeholder="1 to 12"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                {errors.grade && <p className="text-red-500 text-xs italic">{errors.grade}</p>}
            </div>
            <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
                Add Student
            </button>
        </form>
    );
}
