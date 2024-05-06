import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { headers } from "next/headers";

import Header from "@/components/header";
import SideNavbar from "@/components/side-navbar";
export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  const headerList = headers();
  const pathname = headerList.get("x-current-path");

  return (
    <div className="flex h-screen">
      <aside className="hidden md:flex md:w-72 h-full">
        <SideNavbar user={user} pathname={pathname} />
      </aside>

      <div className="flex-1 overflow-y-auto">
        <header>
          <Header user={user} />
        </header>
        <main>{children}</main>
      </div>
    </div>
  );
}
