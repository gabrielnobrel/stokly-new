"use client";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/app/_components/ui/chart";
import { DayTotalRevenueDto } from "@/app/_data-access/dashboard/get-last-14-days-revenue";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

const chartConfig = {
  totalRevenue: {
    label: "Receita",
  },
} satisfies ChartConfig;

interface RevenueChartProps {
  data: DayTotalRevenueDto[];
}

const ReveneuChart = ({ data }: RevenueChartProps) => {
  return (
    <ChartContainer config={chartConfig} className="w-full min-h-0">
      <BarChart accessibilityLayer data={data}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey={"day"}
          tickLine={false}
          tickMargin={10}
          axisLine={false}
        />
        <ChartTooltip content={<ChartTooltipContent />} />
        <Bar dataKey={"totalRevenue"} radius={4} />
      </BarChart>
    </ChartContainer>
  );
};

export default ReveneuChart;
