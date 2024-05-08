"use client";

import { CalendarDaysIcon } from "lucide-react";
import { addMonths } from "date-fns";
import { useState } from "react";
import moment from "moment";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";

interface DatePickerProps {
  selectedMonth: (newMonth: Date) => void;
}

export default function DatePicker({ selectedMonth }: DatePickerProps) {
  const nextMonths = addMonths(new Date(), 0);

  const [month, setMonth] = useState(nextMonths);

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">
          <CalendarDaysIcon className=" h-6 w-6" />
          <span className="ml-2 text-lg">
            {moment(month).format("MMM yyyy")}
          </span>
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <Calendar
          mode="single"
          month={month}
          onMonthChange={(e) => {
            selectedMonth(e);
            setMonth(e);
          }}
          className="flex flex-1 justify-center"
        />
      </PopoverContent>
    </Popover>
  );
}
