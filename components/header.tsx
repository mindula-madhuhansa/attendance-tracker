import { KindeUser } from "@kinde-oss/kinde-auth-nextjs/types";
import Image from "next/image";

interface HeaderProps {
  user: KindeUser | null;
}

export default function Header({ user }: HeaderProps) {
  return (
    <div className="p-4 shadow-sm border-b-2 flex items-center justify-between h-[116px]">
      <div></div>
      <div>
        <Image
          src={user?.picture || "/images/user.png"}
          width={54}
          height={54}
          alt="User"
          className="rounded-full"
        />
      </div>
    </div>
  );
}
