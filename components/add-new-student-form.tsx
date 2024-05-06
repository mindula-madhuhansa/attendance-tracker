"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
import { useState } from "react";
import { LoaderIcon } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Grade, Inputs } from "@/types";
import api from "@/services/globalAPI";

interface AddNewStudentFormProps {
  setOpen: (open: boolean) => void;
  grades: Grade[];
}

export default function AddNewStudentForm({
  setOpen,
  grades,
}: AddNewStudentFormProps) {
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    setIsLoading(true);
    api.addNewStudent(data).then((response) => {
      if (response.data) {
        setIsLoading(false);
        reset();
        setOpen(false);
        toast("Student added successfully");
      } else {
        setIsLoading(false);
        toast("Failed to add student");
      }
    });
    setIsLoading(false);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="py-2">
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700"
        >
          Full Name
        </label>
        <Input
          type="text"
          id="name"
          placeholder="John Doe"
          {...register("name", { required: true, minLength: 3 })}
          className="mt-1 focus:ring-primary focus:border-primary block w-full shadow-sm sm:text-sm md:text-base border-gray-300 text-black"
        />

        {errors.name && (
          <span className="text-red-500">
            Full Name shoudl be at least 3 characters long
          </span>
        )}
      </div>

      <div className="py-2">
        <label
          htmlFor="grade"
          className="block text-sm font-medium text-gray-700"
        >
          Grade
        </label>

        <select
          id="grade"
          {...register("grade", { required: true })}
          className="mt-1 border p-2 rounded-md focus:outline-none focus:border-primary focus:ring-0 ring-0 focus-visible:ring-0 block w-full shadow-sm sm:text-sm md:text-base border-gray-300 text-black"
        >
          {grades.map((grade) => (
            <option key={grade.id} value={grade.grade}>
              {grade.grade}
            </option>
          ))}
        </select>

        {errors.grade && (
          <span className="text-red-500">Please select a grade</span>
        )}
      </div>

      <div className="py-2">
        <label
          htmlFor="contactNumber"
          className="block text-sm font-medium text-gray-700"
        >
          Contact Number
        </label>
        <Input
          type="tel"
          id="contactNumber"
          {...register("contactNumber", {
            required: true,
            minLength: 10,
            maxLength: 12,
          })}
          placeholder="+94 77 123 4567"
          className="mt-1 focus:ring-primary focus:border-primary block w-full shadow-sm sm:text-sm md:text-base border-gray-300 text-black"
        />

        {errors.contactNumber && (
          <span className="text-red-500">
            Contact Number should be between 10 and 12 characters long
          </span>
        )}
      </div>

      <div className="py-2">
        <label
          htmlFor="address"
          className="block text-sm font-medium text-gray-700"
        >
          Address
        </label>
        <Input
          type="text"
          id="address"
          {...register("address", { required: true, minLength: 3 })}
          placeholder="123, Main Street, Colombo 01"
          className="mt-1 focus:ring-primary focus:border-primary block w-full shadow-sm sm:text-sm md:text-base border-gray-300 text-black"
        />

        {errors.address && (
          <span className="text-red-500">
            Address should be at least 3 characters long
          </span>
        )}
      </div>

      <div className="flex gap-3 items-center justify-end mt-4 ">
        <Button
          type="button"
          disabled={isLoading}
          onClick={() => setOpen(false)}
          variant="secondary"
          className="font-semibold"
        >
          Cancel
        </Button>
        <Button
          type="submit"
          disabled={isLoading}
          className="ml-2 font-semibold"
        >
          {isLoading ? (
            <>
              <LoaderIcon className="animate-spin" />
              <span className="ml-2">Saving</span>
            </>
          ) : (
            "Add Student"
          )}
        </Button>
      </div>
    </form>
  );
}
