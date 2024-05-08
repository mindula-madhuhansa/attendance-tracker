"use client";

import { useState } from "react";
import moment from "moment";
import { toast } from "sonner";

import api from "@/services/globalAPI";
import { AttendanceList } from "@/types";
import DatePicker from "@/components/date-picker";
import GradePicker from "@/components/grade-picker";
import { Button } from "@/components/ui/button";
import AttendanceTable from "@/components/attendance-table";

export default function AttendanceSearch() {
  const [selectedMonth, setSelectedMonth] = useState<Date | null>();
  const [selecteGrade, setSelectedGrade] = useState<string | null>(null);
  const [attendanceList, setAttendanceList] = useState<AttendanceList[]>([]);

  const handleSearch = async () => {
    const month = moment(selectedMonth).format("MM/YYYY");

    if (selecteGrade !== null) {
      await api
        .getAttendanceList(selecteGrade, month)
        .then((res) => {
          setAttendanceList(res.data.data);
        })
        .catch((err) => {
          toast.error(err.message);
        });
    }
  };

  return (
    <div>
      <div className="mt-4 flex items-center space-x-8 p-4 border rounded-lg">
        <div className="flex items-center space-x-2">
          <label className="block font-medium text-gray-700 mb-1">
            Select Month:
          </label>
          <DatePicker selectedMonth={(e) => setSelectedMonth(e)} />
        </div>

        <div className="flex items-center space-x-2">
          <label className="block font-medium text-gray-700 mb-1">
            Select Grade:
          </label>
          <GradePicker selectedGrade={(e) => setSelectedGrade(e)} />
        </div>

        <Button onClick={handleSearch} size="lg">
          Search
        </Button>
      </div>

      <AttendanceTable
        attendanceList={attendanceList}
        selectedMonth={selectedMonth}
      />
    </div>
  );
}
