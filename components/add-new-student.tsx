"use client";

import { PlusCircleIcon } from "lucide-react";
import { useEffect, useState } from "react";

import api from "@/services/globalAPI";
import { Grade } from "@/types";
import { Button } from "@/components/ui/button";
import AddNewStudentModal from "@/components/modals/add-new-student-modal";

export default function AddNewStudent() {
  const [open, setOpen] = useState(false);
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
      <Button
        onClick={() => setOpen(true)}
        className="py-4 md:py-8 px-4 rounded-lg"
      >
        <PlusCircleIcon className="w-5 h-5 md:w-7 md:h-7" />
        <span className="ml-2 text-base md:text-xl font-semibold">
          Add New Student
        </span>
      </Button>

      <AddNewStudentModal open={open} setOpen={setOpen} grades={grades} />
    </div>
  );
}
