import axios from "axios";

const API_url = "http://localhost:8080/api/students";

export const getAllStudents = () => {
  return axios.get(API_url);
};

export const getStudentById = (id) => {
  return axios.get(`${API_url}/${id}`);
};

export const createStudent = (student) => {
  return axios.post(API_url, student);
};
export const updateStudent = (id, student) => {
  return axios.put(`${API_url}/${id}`, student);
};

export const deleteStudent = (id) => {
  return axios.delete(`${API_url}/${id}`);
};
