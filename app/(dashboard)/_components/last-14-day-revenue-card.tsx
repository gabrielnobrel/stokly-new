import { getLast14DaysRevenue } from "@/app/_data-access/dashboard/get-last-14-days-revenue";
import ReveneuChart from "./reveneu-chart";

const Last14DaysRevenueCard = async () => {
  await new Promise((resolve) => setTimeout(resolve, 7000));
  const totalLast14DaysRevenue = await getLast14DaysRevenue();

  return (
    <div className="flex flex-col h-full p-6 overflow-hidden bg-white rounded-xl">
      <p className="text-lg font-semibold text-slate-900">Receita</p>
      <p className="text-sm text-slate-400">Últimos 14 dias</p>

      <ReveneuChart data={totalLast14DaysRevenue} />
    </div>
  );
};

export default Last14DaysRevenueCard;
