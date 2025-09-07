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
import { Skeleton } from "@/components/ui/skeleton";

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

  if (loading) {
    return (
      <div className="container mx-auto mt-5">
        <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow">
          {/* Table Header Skeleton */}
          <div className="grid grid-cols-6 px-6 py-3 bg-gray-50 text-sm font-medium text-gray-500">
            <Skeleton className="h-4 w-5 rounded animate-pulse" />
            <Skeleton className="h-4 w-32 rounded animate-pulse" />
            <Skeleton className="h-4 w-24 rounded animate-pulse" />
            <Skeleton className="h-4 w-16 rounded animate-pulse" />
            <Skeleton className="h-4 w-12 rounded animate-pulse" />
            <Skeleton className="h-4 w-10 rounded animate-pulse" />
          </div>

          {/* Table Body Skeleton */}
          <div className="divide-y divide-gray-100">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="grid grid-cols-6 items-center px-6 py-4 animate-pulse"
              >
                <Skeleton className="h-5 w-5 rounded" />
                <div className="flex flex-col gap-2">
                  <Skeleton className="h-4 w-28 rounded" />
                  <Skeleton className="h-3 w-40 rounded" />
                </div>
                <Skeleton className="h-4 w-20 rounded" />
                <Skeleton className="h-4 w-16 rounded" />
                <Skeleton className="h-5 w-5 rounded-full" />
                <Skeleton className="h-4 w-8 rounded" />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  if (error) return <p>Error loading courses 😢</p>;

  return (
    <div className="container mx-auto">
      <DataTable columns={columns} data={data.getOrganizationCourses} />
    </div>
  );
};

export default CourseTable;
