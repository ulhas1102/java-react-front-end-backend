import React from "react";
import StudentList from "./components/StudentList";
import AddStudent from "./components/AddStudent";

function App() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1>Student Management</h1>
            <AddStudent />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <StudentList />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
