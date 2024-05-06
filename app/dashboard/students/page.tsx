import AddNewStudent from "@/components/add-new-student";
import StudentsTable from "@/components/students-table";

export default function Students() {
  return (
    <div className="p-8">
      <div className="flex justify-between items-center">
        <h2 className="font-bold text-xl md:text-3xl">Students</h2>
        <AddNewStudent />
      </div>
      <StudentsTable />
    </div>
  );
}
