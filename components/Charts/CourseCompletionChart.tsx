"use client";
import { useState } from "react";
import { ChartSpline } from "lucide-react";
import { Bar, BarChart, CartesianGrid, LabelList, XAxis } from "recharts";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartConfig = {
  enrolled: {
    label: "Enrolled",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;
const monthlyData = [
  { month: "January", enrolled: 186 },
  { month: "February", enrolled: 305 },
  { month: "March", enrolled: 237 },
  { month: "April", enrolled: 73 },
  { month: "May", enrolled: 209 },
  { month: "June", enrolled: 214 },
];
const weeklyData = [
  { day: "Monday", enrolled: 186 },
  { day: "Tuesday", enrolled: 305 },
  { day: "Wednesday", enrolled: 237 },
  { day: "Thursday", enrolled: 73 },
  { day: "Friday", enrolled: 209 },
  { day: "Saturday", enrolled: 214 },
  { day: "Sunday", enrolled: 214 },
];

export default function CourseCompletionChart() {
  const [timeRange, setTimeRange] = useState("90d");

  const chartData = timeRange === "7d" ? weeklyData : monthlyData;
  return (
    <Card className="rounded-3xl flex flex-col ">
      <CardHeader className="flex w-full  max-md:flex-col flex-row justify-between items-center space-y-2 pb-4">
        <div>
          <CardTitle className="text-sm font-medium text-black font-plus  flex items-center">
            <ChartSpline className="h-4 w-4 text-muted-foreground inline mr-2" />{" "}
            Course Completions
          </CardTitle>

          <CardDescription className="text-xs max-md:text-center mt-2 text-slate-500 flex flex-col  font-bold">
            +10% this month
          </CardDescription>
        </div>
        <Select value={timeRange} onValueChange={setTimeRange}>
          <SelectTrigger
            className="w-[160px] rounded-lg sm:ml-auto shadow-none "
            aria-label="Select a value"
          >
            <SelectValue placeholder="Last 3 months" />
          </SelectTrigger>
          <SelectContent className="rounded-xl">
            <SelectItem value="90d" className="rounded-lg">
              Monthly
            </SelectItem>
            <SelectItem value="7d" className="rounded-lg">
              Last 7 days
            </SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>

      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={chartData}
            margin={{
              top: 20,
            }}
          >
            <CartesianGrid
              vertical={false}
              stroke="#64748b "
              strokeOpacity={0.2}
            />
            <XAxis
              dataKey={timeRange === "7d" ? "day" : "month"}
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tick={{ fill: "#64748b" }}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent hideLabel className="min-w-[160px]" />
              }
            />
            <Bar dataKey={"enrolled"} fill="#2366EB" radius={8}>
              <LabelList
                position="top"
                offset={12}
                className="fill-[#64748b]"
                fontSize={12}
              />
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
