"use client";
import { Area, AreaChart, YAxis } from "recharts";
import * as React from "react";
import { useState } from "react";
import { CartesianGrid, XAxis } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartConfig = {
  views: {
    label: "Page Views",
  },
  hours: {
    label: "Hours",
  },
} satisfies ChartConfig;
const monthlyData = [
  { month: "January", employee: 186 },
  { month: "February", employee: 305 },
  { month: "March", employee: 237 },
  { month: "April", employee: 73 },
  { month: "May", employee: 209 },
  { month: "June", employee: 214 },
];
const weeklyData = [
  { day: "Monday", employee: 186 },
  { day: "Tuesday", employee: 305 },
  { day: "Wednesday", employee: 237 },
  { day: "Thursday", employee: 73 },
  { day: "Friday", employee: 209 },
  { day: "Saturday", employee: 214 },
  { day: "Sunday", employee: 214 },
];
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { IconBook } from "@tabler/icons-react";
export default function EmployeeChart() {
  const [timeRange, setTimeRange] = useState("90d");

  const chartData = timeRange === "7d" ? weeklyData : monthlyData;
  return (
    <Card className="rounded-3xl flex flex-col ">
      <CardHeader className="flex w-full  max-md:flex-col flex-row justify-between items-center space-y-2 pb-4">
        <div>
          <CardTitle className="text-sm font-medium flex items-center text-slate-600 font-plus">
            <IconBook className="h-4 w-4  text-muted-foreground inline mr-2" />
            Total Number of Employees
          </CardTitle>
          <CardDescription className="text-2xl max-md:text-center mt-2 text-black flex flex-col font-bold">
            <>
              50
              <span className={`text-xs text-slate-500 mt-1`}>
                +{25}% from last week
              </span>
            </>
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
          <AreaChart accessibilityLayer data={chartData}>
            <defs>
              <linearGradient id="employee" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#2366EB" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#2366EB" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid
              vertical={false}
              stroke="#64748b"
              strokeOpacity={0.2}
            />
            <XAxis
              dataKey={timeRange === "7d" ? "day" : "month"}
              tickLine={false}
              axisLine={false}
              tickMargin={6}
              tick={{ fill: "#64748b" }}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tick={{ fill: "#64748b" }}
              tickMargin={8}
              tickCount={7}
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  className="w-[200px]"
                  style={{
                    background:
                      "linear-gradient(127deg, rgba(6, 11, 40, 0.74) 28.26%, rgba(10, 14, 35, 0.71) 91.2%)",
                  }}
                />
              }
            />
            <Area
              dataKey="employee"
              type="natural"
              fillOpacity={0.4}
              fill="url(#employee)"
              stroke="#2366EB"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
