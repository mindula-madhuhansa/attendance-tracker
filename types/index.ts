export type Grade = {
  id: string;
  grade: string;
};

export type Inputs = {
  name: string;
  grade: string;
  contactNumber: string;
  address: string;
};

export type Student = {
  id: number;
  name: string;
  grade: string;
  contactNumber: string;
  address: string;
};

export type AttendanceList = {
  attendanceId: number;
  date: string;
  day: number;
  grade: string;
  name: string;
  status: boolean;
  studentId: number;
};
