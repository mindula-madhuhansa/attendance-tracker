import AddNewStudent from "@/components/add-new-student";

export default function Students() {
  return (
    <div className="p-8 flex justify-between items-center">
      <h2 className="font-bold text-3xl">Students</h2>
      <AddNewStudent />
    </div>
  );
}
