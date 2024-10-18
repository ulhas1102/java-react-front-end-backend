import React, { useState } from "react";
import { createStudent } from "../services/studentService";


function AddStudent() {
  const [student, setStudent] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createStudent(student);
    alert("Student added!");
   
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="form-control mb-3"
        name="firstName"
        value={student.firstName}
        onChange={handleChange}
        placeholder="First Name"
      />
      <input
        type="text"
        name="lastName"
        className="form-control mb-3"
        value={student.lastName}
        onChange={handleChange}
        placeholder="Last Name"
      />
      <input
        type="email"
        name="email"
        className="form-control mb-3"
        value={student.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <button type="submit" className="btn btn-primary">
        Add Student
      </button>
    </form>
  );
}

export default AddStudent;
