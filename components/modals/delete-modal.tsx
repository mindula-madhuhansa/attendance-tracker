"use client";

import { toast } from "sonner";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { TrashButon } from "@/components/trash-button";
import api from "@/services/globalAPI";

interface DeleteModalProps {
  data: {
    id: number;
  };
}

export default function DeleteModal({ ...props }: DeleteModalProps) {
  const deleteStudent = (id: number) => {
    api.deleteStudent(id).then((res) => {
      if (res.data) {
        toast("Student deleted successfully");
      } else {
        toast("Failed to delete student");
      }
    });
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger>
        <TrashButon />
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete the
            student record.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            onClick={() => {
              deleteStudent(props.data.id);
            }}
          >
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
