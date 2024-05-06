import { ColDef } from "ag-grid-community";
import {
  GraduationCapIcon,
  HandIcon,
  LayoutIcon,
  SettingsIcon,
} from "lucide-react";

import { TrashButon } from "@/components/trash-button";

export const sideNavbarLinks = [
  {
    id: 1,
    name: "Dashboard",
    icon: LayoutIcon,
    path: "/dashboard",
  },
  {
    id: 2,
    name: "Students",
    icon: GraduationCapIcon,
    path: "/dashboard/students",
  },
  {
    id: 3,
    name: "Attendance",
    icon: HandIcon,
    path: "/dashboard/attendance",
  },
  {
    id: 4,
    name: "Settings",
    icon: SettingsIcon,
    path: "/dashboard/settings",
  },
];

export const colDef: ColDef[] = [
  { field: "id", headerName: "ID", filter: true, cellClass: "center-cell" },
  {
    field: "name",
    headerName: "Name",
    filter: true,
  },
  {
    field: "grade",
    headerName: "Grade",
    filter: true,
  },
  {
    field: "contactNumber",
    headerName: "Contact Number",
    filter: true,
  },
  {
    field: "address",
    headerName: "Address",
    filter: true,
  },
  { field: "action", headerName: "Delete", cellRenderer: TrashButon },
];

export const pagination = true;
export const paginationPageSize = 10;
export const paginationPageSizeSelector = [10, 25, 50, 100];
