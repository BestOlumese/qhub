"use client";
import React from "react";
import { ColumnDef } from "@tanstack/react-table";
import { DataTable } from "./DataTable";
import { Button } from "../../ui/button";
import { gql, useQuery } from "@apollo/client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { IconCircleCheckFilled, IconDots, IconTrash } from "@tabler/icons-react";
import { ArrowUpDown } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { GET_ORGANIZATION_USERS } from "@/lib/graphql";

interface LmsUserType {
  _id: string;
  email: string;
  firstName: string;
  lastName: string;
  onboarded: boolean;
  role: string;
  createdAt: string;
}

const EmployeeTable = ({ organizationId }: { organizationId: string }) => {
  const { data, loading, error } = useQuery(GET_ORGANIZATION_USERS, {
    variables: { organizationId },
  });

  const columns: ColumnDef<LmsUserType>[] = [
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
      accessorKey: "firstName",
      header: ({ column }) => (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Name & Email
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      ),
      cell: ({ row }) => {
        const { email, firstName, lastName } = row.original;
        return (
          <div>
            <div className="text-lg font-semibold">
              {firstName} {lastName}
            </div>
            <div className="text-gray-600 lowercase text-sm">{email}</div>
          </div>
        );
      },
    },
    {
      accessorKey: "createdAt",
      header: "Start Date",
      cell: ({ getValue }) => new Date(getValue() as string).toLocaleDateString(),
    },
    {
      accessorKey: "role",
      header: "Role",
    },
    {
      accessorKey: "onboarded",
      header: "Status",
      cell: ({ getValue }) =>
        getValue() ? (
          <IconCircleCheckFilled className="text-green-500" />
        ) : (
          <IconCircleCheckFilled className="text-gray-300" />
        ),
    },
    {
      id: "actions",
      cell: () => (
        <div className="flex gap-6 w-[65px] items-center group">
          <DropdownMenu>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="h-8 w-8 p-0">
                      <span className="sr-only">Open menu</span>
                      <IconDots className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                </TooltipTrigger>
                <TooltipContent>
                  <p>More actions</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Change role</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="hover:!text-red-500">
                Deactivate
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:!text-red-500">
                Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <IconTrash className="w-4 h-4 text-gray-500 hidden group-hover:block cursor-pointer" />
        </div>
      ),
    },
  ];

  if (loading) return <p>Loading users...</p>;
  if (error) return <p className="text-red-500">Error: {error.message}</p>;

  return (
    <div className="container mx-auto">
      <DataTable columns={columns} data={data?.getOrganizationUsers || []} />
    </div>
  );
};

export default EmployeeTable;
