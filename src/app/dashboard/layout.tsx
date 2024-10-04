import Navbar from "../ui/dashboard/navbar/navbar";
import Sidebar from "../ui/dashboard/sidebar/sidebar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex text-white">
      <div className=" flex-[1] bg-[#182237] p-5 h-[100vh]">
        <Sidebar />
      </div>
      <div className=" flex-[4] p-5">
        <Navbar />
        {children}
      </div>
    </div>
  );
};

export default Layout;
