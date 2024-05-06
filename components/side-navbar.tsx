import Image from "next/image";

import { sideNavbarLinks } from "@/constants";
import { KindeUser } from "@kinde-oss/kinde-auth-nextjs/types";

interface SideNavbarProps {
  user: KindeUser | null;
}

export default function SideNavbar({ user }: SideNavbarProps) {
  return (
    <div className="shadow-sm border-r-2 flex-1">
      <div className="flex flex-col items-center justify-center bg-primary">
        <Image src="/images/logo.png" width={80} height={80} alt="Logo" />
        <h1 className="text-xl font-bold mt-2 text-white">
          Attendance Tracker
        </h1>
      </div>

      <div className="mt-2 p-4">
        <nav>
          {sideNavbarLinks.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-3 text-lg font-bold p-4 text-muted-foreground hover:text-white hover:bg-primary cursor-pointer transition-all ease-in-out rounded-lg my-4"
            >
              <item.icon size={24} />
              <h2>{item.name}</h2>
            </div>
          ))}
        </nav>

        <div className="flex space-x-2 items-center fixed bottom-5">
          <Image
            src={user?.picture || "/images/user.png"}
            width={40}
            height={40}
            alt="User"
            className="rounded-full"
          />

          <div>
            <h3 className="text-sm font-semibold">
              {user?.given_name} {user?.family_name}
            </h3>

            <h3 className="text-xs text-slate-400">{user?.email}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
