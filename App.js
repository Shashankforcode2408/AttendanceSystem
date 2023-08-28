import React, { useState } from 'react';
import './App.css';

function AttendanceApp() {
  const [weekdays, setWeekdays] = useState(['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']);

  const [studentList, setStudentList] = useState([
    { id: 1, fullName: 'Mark Manson', attendance: [false, true, false, true, true] },
    { id: 2, fullName: 'Paulo Coelho', attendance: [true, false, true, false, true] },
    { id: 3, fullName: 'Dale Carnegie', attendance: [true, true, true, true, false] },
    // Add more students here
  ]);

  const toggleStudentAttendance = (studentId, dayIndex) => {
    setStudentList(prevStudents =>
      prevStudents.map(student =>
        student.id === studentId
          ? {
              ...student,
              attendance: student.attendance.map(
                (attended, index) => (index === dayIndex ? !attended : attended)
              ),
            }
          : student
      )
    );
  };

  return (
    <div className="attendance-app">
      <h1>Attendance App</h1>
      <div className="attendance-record">
        <h2>Timetable Attendance</h2>
        <table>
          <thead>
            <tr>
              <th>Full Name</th>
              {weekdays.map(day => (
                <th key={day}>{day}</th>
              ))}
              <th>Present</th>
              <th>Absent</th>
            </tr>
          </thead>
          <tbody>
            {studentList.map(student => (
              <tr key={student.id}>
                <td>{student.fullName}</td>
                {student.attendance.map((attended, dayIndex) => (
                  <td
                    key={dayIndex}
                    className={`attendance-cell ${attended ? 'present' : 'absent'}`}
                    onClick={() => toggleStudentAttendance(student.id, dayIndex)}
                  >
                    {attended ? 'P' : 'A'}
                  </td>
                ))}
                <td>{student.attendance.filter(attended => attended).length}</td>
                <td>{student.attendance.filter(attended => !attended).length}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AttendanceApp;
