import axios from "axios";

import { Inputs } from "@/types";

const getAllGrades = () => axios.get("/api/grade");

const addNewStudent = (data: Inputs) => axios.post("/api/student", data);

const getAllStudents = () => axios.get("/api/student");

const deleteStudent = (id: number) => axios.delete(`/api/student?id=${id}`);

const getAttendanceList = (grade: string, month: string) =>
  axios.get(`/api/attendance?grade=${grade}&month=${month}`);

const api = {
  getAllGrades,
  addNewStudent,
  getAllStudents,
  deleteStudent,
  getAttendanceList,
};

export default api;
