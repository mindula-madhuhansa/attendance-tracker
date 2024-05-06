import axios from "axios";

import { Inputs } from "@/types";

const getAllGrades = () => axios.get("/api/grade");

const addNewStudent = (data: Inputs) => axios.post("/api/student", data);

const getAllStudents = () => axios.get("/api/student");

const api = { getAllGrades, addNewStudent, getAllStudents };

export default api;
