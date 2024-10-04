import Card from "../ui/dashboard/card/card";
import Chart from "../ui/dashboard/chart/chart";
import Transactions from "../ui/dashboard/transactions/transactions";

const Dashboard = () => {
  return (
    <div className="pt-5 flex flex-col gap-5">
      <div className="flex gap-5 justify-between">
        <Card />
        <Card />
        <Card />
      </div>
      <Transactions />
      <Chart />
    </div>
  );
};

export default Dashboard;
