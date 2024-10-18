import React, { useEffect, useState } from "react";
import { getAllStudents, deleteStudent } from "../services/studentService";

function StudentList() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    loadStudents();
  }, []);

  const loadStudents = async () => {
    const result = await getAllStudents();
    setStudents(result.data);
  };

  const handleDelete = async (id) => {
    await deleteStudent(id);
    loadStudents(); // Refresh the list
  };

  return (
    <div>
      <h2>Student List</h2>
      <table className="table table-responsive">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.firstName}</td>
              <td>{student.lastName}</td>
              <td>{student.email}</td>
              <td>
                <button
                  onClick={() => alert("Edit functionality here")}
                  className="btn btn-primary btn-sm mx-1"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(student.id)}
                  className="btn btn-danger btn-sm mx-1"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StudentList;
