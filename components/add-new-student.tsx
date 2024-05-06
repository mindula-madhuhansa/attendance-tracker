"use client";

import { PlusCircleIcon } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import AddNewStudentForm from "@/components/add-new-student-form";
import api from "@/services/globalAPI";
import { Grade } from "@/types";

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
      <Button onClick={() => setOpen(true)} className="py-8 px-4">
        <PlusCircleIcon size={30} />
        <span className="ml-2 text-xl font-semibold">Add New Student</span>
      </Button>

      <Dialog open={open}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add New Student</DialogTitle>
            <DialogDescription>
              <AddNewStudentForm setOpen={setOpen} grades={grades} />
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}
