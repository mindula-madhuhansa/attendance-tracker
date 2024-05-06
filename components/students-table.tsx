"use client";

import { useEffect, useState } from "react";
import { toast } from "sonner";
import { SearchIcon } from "lucide-react";
import { AgGridReact } from "ag-grid-react";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";

import api from "@/services/globalAPI";
import { Student } from "@/types";
import {
  colDef,
  pagination,
  paginationPageSize,
  paginationPageSizeSelector,
} from "@/constants";
import { Input } from "@/components/ui/input";

export default function StudentsTable() {
  const [students, setStudents] = useState<Student[]>([]);
  const [rowData, setRowData] = useState<Student[]>([]);
  const [searchIput, setSearchInput] = useState("");

  const getAllStudents = () => {
    api.getAllStudents().then((res) => {
      if (res.data) {
        setStudents(res.data.data);
      } else {
        toast("Failed to fetch students");
      }
    });
  };

  useEffect(() => {
    getAllStudents();
  }, []);

  useEffect(() => {
    setRowData(students);
  }, [students]);

  return (
    <div className="ag-theme-quartz mt-2" style={{ height: 500 }}>
      <div>
        <h2 className="font-bold text-xl md:text-2xl bg-primary text-white p-4 rounded-lg inline-block">
          Total Students: {students.length}
        </h2>
      </div>

      <div className="my-4 p-2 rounded-lg border shadow-sm flex gap-2 items-center">
        <SearchIcon className="mr-2" />
        <Input
          placeholder="Search"
          value={searchIput}
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
        />
      </div>
      <AgGridReact
        rowData={rowData}
        columnDefs={colDef}
        quickFilterText={searchIput}
        pagination={pagination}
        paginationPageSize={paginationPageSize}
        paginationPageSizeSelector={paginationPageSizeSelector}
      />
    </div>
  );
}
