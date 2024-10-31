"use client";

import { TrendingUp } from "lucide-react";
import { LabelList, Pie, PieChart } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "A pie chart with a label list";

const chartData = [
  { category: "technology", percent: 95, fill: "#2366EB" },
  { category: "finance", percent: 50, fill: "#2ecc71" },
  { category: "business", percent: 37, fill: "#f7dc6f" },
  { category: "recruitment", percent: 93, fill: "#ffa07a" },
  { category: "other", percent: 40, fill: "#b66dff" },
];

const chartConfig = {
  percent: {
    label: "Percent",
  },
  technology: {
    label: "Technology",
  },
  finance: {
    label: "Finance",
  },
  business: {
    label: "Business",
  },
  recruitment: {
    label: "Recruitment",
  },
  other: {
    label: "Other",
  },
} satisfies ChartConfig;

export default function CourseCategoryChart() {
  return (
    <Card className="flex flex-col rounded-3xl ">
      <CardHeader className="items-center pb-0">
        <CardTitle className="max-md:text-center">
          Course Engagement by Category
        </CardTitle>
        <CardDescription>Last 3 months</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer config={chartConfig}>
          <PieChart>
            <ChartTooltip
              content={<ChartTooltipContent nameKey="percent" hideLabel />}
            />
            <Pie data={chartData} dataKey="percent">
              <LabelList
                dataKey="category"
                className="fill-white"
                stroke="none"
                fontSize={12}
                formatter={(value: keyof typeof chartConfig) =>
                  chartConfig[value]?.label
                }
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none max-md:text-center">
          Technology is trending up by 5.2% this month{" "}
          <TrendingUp className="h-4 w-4" />
        </div>
      </CardFooter>
    </Card>
  );
}
