"use client";

import * as React from "react";
import { CartesianGrid, Line, LineChart, XAxis } from "recharts";
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

import { Bitcoin } from "lucide-react";

const chartConfig = {
  views: {
    label: "Page Views",
  },
  hours: {
    label: "Hours",
  },
} satisfies ChartConfig;
const chartData = [
  { date: "2024-04-01", hours: 222, mobile: 150 },
  { date: "2024-04-02", hours: 97, mobile: 180 },
  { date: "2024-04-03", hours: 167, mobile: 120 },
  { date: "2024-04-04", hours: 242, mobile: 260 },
  { date: "2024-04-05", hours: 373, mobile: 290 },
  { date: "2024-04-06", hours: 301, mobile: 340 },
  { date: "2024-04-07", hours: 245, mobile: 180 },
  { date: "2024-04-08", hours: 409, mobile: 320 },
  { date: "2024-04-09", hours: 59, mobile: 110 },
  { date: "2024-04-10", hours: 261, mobile: 190 },
  { date: "2024-04-11", hours: 327, mobile: 350 },
  { date: "2024-04-12", hours: 292, mobile: 210 },
  { date: "2024-04-13", hours: 342, mobile: 380 },
  { date: "2024-04-14", hours: 137, mobile: 220 },
  { date: "2024-04-15", hours: 120, mobile: 170 },
  { date: "2024-04-16", hours: 138, mobile: 190 },
  { date: "2024-04-17", hours: 446, mobile: 360 },
  { date: "2024-04-18", hours: 364, mobile: 410 },
  { date: "2024-04-19", hours: 243, mobile: 180 },
  { date: "2024-04-20", hours: 89, mobile: 150 },
  { date: "2024-04-21", hours: 137, mobile: 200 },
  { date: "2024-04-22", hours: 224, mobile: 170 },
  { date: "2024-04-23", hours: 138, mobile: 230 },
  { date: "2024-04-24", hours: 387, mobile: 290 },
  { date: "2024-04-25", hours: 215, mobile: 250 },
  { date: "2024-04-26", hours: 75, mobile: 130 },
  { date: "2024-04-27", hours: 383, mobile: 420 },
  { date: "2024-04-28", hours: 122, mobile: 180 },
  { date: "2024-04-29", hours: 315, mobile: 240 },
  { date: "2024-04-30", hours: 454, mobile: 380 },
  { date: "2024-05-01", hours: 165, mobile: 220 },
  { date: "2024-05-02", hours: 293, mobile: 310 },
  { date: "2024-05-03", hours: 247, mobile: 190 },
  { date: "2024-05-04", hours: 385, mobile: 420 },
  { date: "2024-05-05", hours: 481, mobile: 390 },
  { date: "2024-05-06", hours: 498, mobile: 520 },
  { date: "2024-05-07", hours: 388, mobile: 300 },
  { date: "2024-05-08", hours: 149, mobile: 210 },
  { date: "2024-05-09", hours: 227, mobile: 180 },
  { date: "2024-05-10", hours: 293, mobile: 330 },
  { date: "2024-05-11", hours: 335, mobile: 270 },
  { date: "2024-05-12", hours: 197, mobile: 240 },
  { date: "2024-05-13", hours: 197, mobile: 160 },
  { date: "2024-05-14", hours: 448, mobile: 490 },
  { date: "2024-05-15", hours: 473, mobile: 380 },
  { date: "2024-05-16", hours: 338, mobile: 400 },
  { date: "2024-05-17", hours: 499, mobile: 420 },
  { date: "2024-05-18", hours: 315, mobile: 350 },
  { date: "2024-05-19", hours: 235, mobile: 180 },
  { date: "2024-05-20", hours: 177, mobile: 230 },
  { date: "2024-05-21", hours: 82, mobile: 140 },
  { date: "2024-05-22", hours: 81, mobile: 120 },
  { date: "2024-05-23", hours: 252, mobile: 290 },
  { date: "2024-05-24", hours: 294, mobile: 220 },
  { date: "2024-05-25", hours: 201, mobile: 250 },
  { date: "2024-05-26", hours: 213, mobile: 170 },
  { date: "2024-05-27", hours: 420, mobile: 460 },
  { date: "2024-05-28", hours: 233, mobile: 190 },
  { date: "2024-05-29", hours: 78, mobile: 130 },
  { date: "2024-05-30", hours: 340, mobile: 280 },
  { date: "2024-05-31", hours: 178, mobile: 230 },
  { date: "2024-06-01", hours: 178, mobile: 200 },
  { date: "2024-06-02", hours: 470, mobile: 410 },
  { date: "2024-06-03", hours: 103, mobile: 160 },
  { date: "2024-06-04", hours: 439, mobile: 380 },
  { date: "2024-06-05", hours: 88, mobile: 140 },
  { date: "2024-06-06", hours: 294, mobile: 250 },
  { date: "2024-06-07", hours: 323, mobile: 370 },
  { date: "2024-06-08", hours: 385, mobile: 320 },
  { date: "2024-06-09", hours: 438, mobile: 480 },
  { date: "2024-06-10", hours: 155, mobile: 200 },
  { date: "2024-06-11", hours: 92, mobile: 150 },
  { date: "2024-06-12", hours: 492, mobile: 420 },
  { date: "2024-06-13", hours: 81, mobile: 130 },
  { date: "2024-06-14", hours: 426, mobile: 380 },
  { date: "2024-06-15", hours: 307, mobile: 350 },
  { date: "2024-06-16", hours: 371, mobile: 310 },
  { date: "2024-06-17", hours: 475, mobile: 520 },
  { date: "2024-06-18", hours: 107, mobile: 170 },
  { date: "2024-06-19", hours: 341, mobile: 290 },
  { date: "2024-06-20", hours: 408, mobile: 450 },
  { date: "2024-06-21", hours: 169, mobile: 210 },
  { date: "2024-06-22", hours: 317, mobile: 270 },
  { date: "2024-06-23", hours: 480, mobile: 530 },
  { date: "2024-06-24", hours: 132, mobile: 180 },
  { date: "2024-06-25", hours: 141, mobile: 190 },
  { date: "2024-06-26", hours: 434, mobile: 380 },
  { date: "2024-06-27", hours: 448, mobile: 490 },
  { date: "2024-06-28", hours: 149, mobile: 200 },
  { date: "2024-06-29", hours: 103, mobile: 160 },
  { date: "2024-06-30", hours: 446, mobile: 400 },
];
import { IconBook } from "@tabler/icons-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
export default function LearningTimeChart() {
  return (
    <Card className="rounded-3xl flex flex-col ">
      <CardHeader className="flex max-md:flex-col w-full flex-row justify-between items-center space-y-2 pb-4">
        <div>
          <CardTitle className="text-sm font-medium flex items-center text-slate-600 font-plus">
            <IconBook className="h-4 w-4  text-muted-foreground inline mr-2" />
            Hours Spent
          </CardTitle>

          <CardDescription className="text-2xl max-md:text-center mt-2 text-black flex flex-col font-bold">
            <>
              50hrs
              <span className={`text-xs text-slate-500 mt-1`}>
                +{25}% from yesterday
              </span>
            </>
          </CardDescription>
        </div>
        <Select>
          <SelectTrigger
            className="w-[160px] rounded-lg sm:ml-auto shadow-none "
            aria-label="Select a value"
          >
            <SelectValue placeholder="Daily" />
          </SelectTrigger>
          <SelectContent className="rounded-xl">
            <SelectItem value="1d" className="rounded-lg">
              Daily
            </SelectItem>
            <SelectItem value="90d" className="rounded-lg">
              Monthly
            </SelectItem>
            <SelectItem value="7d" className="rounded-lg">
              Last 7 days
            </SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>

      <CardContent className="px-2 sm:p-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid
              vertical={false}
              stroke="#64748b"
              strokeOpacity={0.2}
            />
            <XAxis
              tick={{ fill: "#64748b" }}
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                return new Date(value).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                });
              }}
            />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  style={{
                    background:
                      "linear-gradient(127deg, rgba(6, 11, 40, 0.74) 28.26%, rgba(10, 14, 35, 0.71) 91.2%)",
                  }}
                  className="w-[150px]"
                  nameKey="hours"
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    });
                  }}
                />
              }
            />
            <Line
              dataKey={"hours"}
              type="monotone"
              stroke={`#0075FF`}
              strokeWidth={2}
              dot={true}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
