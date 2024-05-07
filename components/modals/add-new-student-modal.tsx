"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import AddNewStudentForm from "@/components/add-new-student-form";
import { Grade } from "@/types";

interface AddNewStudentModalProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  grades: Grade[];
}

export default function AddNewStudentModal({
  open,
  setOpen,
  grades,
}: AddNewStudentModalProps) {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add New Student</DialogTitle>
          <DialogDescription>
            <AddNewStudentForm setOpen={setOpen} grades={grades} />
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
