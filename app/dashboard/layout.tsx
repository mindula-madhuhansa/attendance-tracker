import Header from "@/components/header";
import SideNavbar from "@/components/side-navbar";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { getUser } = getKindeServerSession();

  const user = await getUser();

  return (
    <div className="flex h-screen">
      <aside className="hidden md:flex md:w-72 h-full">
        <SideNavbar user={user} />
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
