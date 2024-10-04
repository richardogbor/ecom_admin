"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const MenuLink = ({
  item,
}: {
  item: {
    title: string;
    path: string;
    icon: JSX.Element;
  };
}) => {
  const pathname = usePathname();

  return (
    <Link
      href={item.path}
      key={item.title}
      className={
        "p-[10px] flex items-center gap-[10px] hover:bg-[#2e374a] w-full my-[5px] mx-[0px] cursor-pointer rounded-[10px]"
        // (pathname === item.path ? "" : "focus:bg-[#2e374a] active:bg-[#2e374a]")
      }
    >
      {item.icon}
      {item.title}
    </Link>
  );
};

export default MenuLink;
