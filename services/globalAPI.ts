import axios from "axios";

import { Inputs } from "@/types";

const getAllGrades = () => axios.get("/api/grade");
const addNewStudent = (data: Inputs) => axios.post("/api/student", data);

const api = { getAllGrades, addNewStudent };

export default api;
