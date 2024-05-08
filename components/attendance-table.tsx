"use client";

import { useEffect, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import moment from "moment";
import { ColDef } from "ag-grid-community";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";

import { AttendanceList } from "@/types";

interface AttendanceTableProps {
  attendanceList: any[];
  selectedMonth?: Date | null;
}

export default function AttendanceTable({
  attendanceList,
  selectedMonth,
}: AttendanceTableProps) {
  const [rowData, setRowData] = useState<any[]>([]);
  const [colDef, setColDef] = useState<ColDef[]>([
    { field: "studentId", headerName: "ID" },
    {
      field: "name",
      headerName: "Name",
    },
    {
      field: "name",
      headerName: "Name",
    },
  ]);

  const daysInMonth = (year: any, month: any) =>
    new Date(year, month + 1, 0).getDate();

  const numberOfDays = daysInMonth(
    moment(selectedMonth).format("yyyy"),
    moment(selectedMonth).format("MM")
  );

  const daysArray = Array.from({ length: numberOfDays }, (_, i) => i + 1);

  useEffect(() => {
    if (attendanceList) {
      const userList = getUniqueRecords();
      setRowData(userList);

      daysArray.forEach((day) => {
        setColDef((prev) => [
          ...prev,
          {
            field: day.toString(),
            headerName: `${day}`,
            width: 50,
            editable: true,
          },
        ]);
        userList.forEach((obj) => {
          obj[day] = false;
        });
      });
    }
  }, [attendanceList]);

  const getUniqueRecords = () => {
    const uniqueRecords: any[] = [];
    const existingUser = new Set();

    attendanceList.forEach((record) => {
      if (!existingUser.has(record.studentId)) {
        existingUser.add(record.studentId);
        uniqueRecords.push(record);
      }
    });

    return uniqueRecords;
  };

  return (
    <div className="ag-theme-quartz mt-2" style={{ height: 500 }}>
      <AgGridReact rowData={rowData} columnDefs={colDef} />
    </div>
  );
}
