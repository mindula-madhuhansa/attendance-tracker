import AttendanceSearch from "@/components/attendance-search";

export default function Attendance() {
  return (
    <div className="p-8">
      <h2 className="font-bold text-xl md:text-3xl">Attendance</h2>

      <AttendanceSearch />
    </div>
  );
}
