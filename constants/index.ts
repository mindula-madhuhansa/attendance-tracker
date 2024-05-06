import {
  GraduationCapIcon,
  HandIcon,
  LayoutIcon,
  SettingsIcon,
} from "lucide-react";

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
