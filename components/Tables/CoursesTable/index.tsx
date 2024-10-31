"use client";
import React from "react";
import { ColumnDef } from "@tanstack/react-table";
import { Course } from "@/lib/types";
import { DataTable } from "./DataTable";
import { courses } from "@/lib/adminData";
import { Button } from "../../ui/button";

import { IconUserPlus } from "@tabler/icons-react";

import { ArrowUpDown } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";

const CourseTable = () => {
  const columns: ColumnDef<Course>[] = [
    {
      id: "select",
      header: ({ table }) => (
        <Checkbox
          checked={
            table.getIsAllPageRowsSelected() ||
            (table.getIsSomePageRowsSelected() && "indeterminate")
          }
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label="Select all"
        />
      ),
      cell: ({ row }) => (
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label="Select row"
        />
      ),
      enableSorting: false,
      enableHiding: false,
    },
    {
      accessorKey: "name",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Course Name
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        );
      },
    },
    {
      accessorKey: "category",
      header: "Category",
    },
    {
      accessorKey: "startDate",

      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Start Date
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        );
      },
    },
    {
      accessorKey: "endDate",

      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            End Date
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        );
      },
    },
    {
      accessorKey: "duration",
      header: "Duration",
    },
    {
      accessorKey: "students",
      header: "Enrolled Students",
    },
    {
      id: "invite",
      header: "Invite Student",
      cell: ({ row }) => {
        return <IconUserPlus className="cursor-pointer  w-5 h-5 text-black" />;
      },
    },
  ];

  return (
    <div className="container mx-auto ">
      <DataTable columns={columns} data={courses} />
    </div>
  );
};

export default CourseTable;
