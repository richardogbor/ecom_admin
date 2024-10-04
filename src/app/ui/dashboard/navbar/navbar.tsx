"use client";

import { usePathname } from "next/navigation";
import { IoSearchOutline } from "react-icons/io5";
import {
  MdNotifications,
  MdOutlineChat,
  MdPublic,
  MdSearch,
} from "react-icons/md";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className="flex items-center justify-between rounded-xl p-3 bg-[#182237]">
      <div className="text-slate-400 font-bold capitalize">
        {pathname.split("/").pop()}
      </div>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 bg-[#2e374a] p-[10px] rounded-xl">
          <MdSearch />
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent border-none text-white"
          />
          {/* <input
            className=" text-white border-r-0 w-[400px] h-[40px] left-[343px] rounded-l-lg border-t-[1px]  border-[#213f7d] placeholder:p-5 opacity-20"
            type="text"
            placeholder="Search for anything"
          />
          <span className="w-14 h-10 border-none  rounded-r-lg bg-[#39cdcc] text-white size-3 flex items-center justify-center">
            <IoSearchOutline />
          </span> */}
        </div>
        <div className="flex gap-2">
          <MdOutlineChat size={20} />
          <MdNotifications size={20} />
          <MdPublic size={20} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
