"use client";

import { useEffect, useState } from "react";

import api from "@/services/globalAPI";
import { Grade } from "@/types";

interface GradePickerProps {
  selectedGrade: (grade: string) => void;
}

export default function GradePicker({ selectedGrade }: GradePickerProps) {
  const [grades, setGrades] = useState<Grade[]>([]);

  const getAllGrades = () =>
    api
      .getAllGrades()
      .then((res) => setGrades(res.data.data))
      .catch((err) => console.log(err.response.data));

  useEffect(() => {
    getAllGrades();
  }, []);

  return (
    <div>
      <select
        onChange={(e) => selectedGrade(e.target.value)}
        id="grade"
        className="mt-1 border p-2 rounded-md focus:outline-none focus:border-primary focus:ring-0 ring-0 focus-visible:ring-0 block shadow-sm sm:text-sm md:text-lg border-gray-300 text-black"
      >
        {grades.map((grade) => (
          <option key={grade.id} value={grade.grade}>
            {grade.grade}
          </option>
        ))}
      </select>
    </div>
  );
}
