import { KindeUser } from "@kinde-oss/kinde-auth-nextjs/types";
import Image from "next/image";

interface HeaderProps {
  user: KindeUser | null;
}

export default function Header({ user }: HeaderProps) {
  return (
    <div className="p-4 shadow-sm border-b-2 flex items-center justify-between md:h-[148px]">
      <div></div>
      <div>
        <Image
          src={user?.picture || "/images/user.png"}
          width={80}
          height={80}
          alt="User"
          className="rounded-full h-10 w-10 md:h-20 md:w-20 object-cover"
        />
      </div>
    </div>
  );
}
