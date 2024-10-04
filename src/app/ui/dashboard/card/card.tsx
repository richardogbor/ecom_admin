import { MdOutlineSupervisedUserCircle } from "react-icons/md";

const Card = () => {
  return (
    <div className="bg-[#182237] p-5 rounded-[10px] flex gap-5 cursor-pointer w-full hover:bg-[#2e374a]">
      <MdOutlineSupervisedUserCircle size={24} />
      <div className="flex flex-col gap-5">
        <span>Total Users</span>
        <span className=" size-6 font-[500]">10.273</span>
        <div className="size-[14px] font-[300] ">
          12%&nbsp;more&nbsp;than&nbsp;previous&nbsp;week
        </div>
      </div>
    </div>
  );
};

export default Card;
