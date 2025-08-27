"use client";
import React from "react";
import { useQuery } from "@apollo/client";
import { ColumnDef } from "@tanstack/react-table";
import { DataTable } from "./DataTable";
import { Button } from "../../ui/button";
import { IconUserPlus } from "@tabler/icons-react";
import { ArrowUpDown } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { GET_ORGANIZATION_COURSES } from "@/lib/graphql";
import Cookies from "js-cookie";

type Course = {
  _id: string;
  title: string;
  category: string;
  createdAt: string;
  updatedAt: string;
  duration: string;
  description: string;
  displayImageUrl: string;
  introVideoUrl: string;
};

const CourseTable = () => {
  const organizationId = Cookies.get("organizationId") || "";
  const { loading, error, data } = useQuery(GET_ORGANIZATION_COURSES, {
    variables: { organizationId: organizationId }, // pass dynamic ID here
  });

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
      accessorKey: "course.title",
      header: ({ column }) => (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Course Name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      ),
    },
    {
      accessorKey: "course.category",
      header: "Category",
    },
    {
      accessorKey: "course.createdAt",
      header: "Start Date",
    },
    {
      accessorKey: "course.updatedAt",
      header: "End Date",
    },
    {
      accessorKey: "course.duration",
      header: "Duration",
    },
    // {
    //   id: "invite",
    //   header: "Invite Student",
    //   cell: () => (
    //     <IconUserPlus className="cursor-pointer w-5 h-5 text-black" />
    //   ),
    // },
  ];

  if (loading) return <p>Loading courses...</p>;
  if (error) return <p>Error loading courses 😢</p>;
  

  return (
    <div className="container mx-auto">
      <DataTable columns={columns} data={data.getOrganizationCourses} />
    </div>
  );
};

export default CourseTable;
