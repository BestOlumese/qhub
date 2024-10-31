"use client";
import React from "react";
import { ColumnDef } from "@tanstack/react-table";
import { Employee } from "@/lib/types";
import { DataTable } from "./DataTable";
import { employees } from "@/lib/adminData";
import { Button } from "../../ui/button";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { IconCircleCheckFilled } from "@tabler/icons-react";

import { IconDots, IconTrash } from "@tabler/icons-react";
import { ArrowUpDown } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const EmployeeTable = () => {
  const columns: ColumnDef<Employee>[] = [
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
            Name & Email
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        );
      },
      cell: ({ row }) => {
        const email = row.original.email;
        const name = row.original.name;
        return (
          <div className="">
            <div className="text-lg font-semibold">{name}</div>
            <div className="text-gray-600 lowercase font-plus text-sm">
              {email}
            </div>
          </div>
        );
      },
    },
    {
      accessorKey: "role",
      header: "Role",
    },
    {
      accessorKey: "status",
      header: "Status",
      cell: ({ row }) => {
        const status = row.original.status;
        return status === "active" ? (
          <IconCircleCheckFilled className="text-green-500 cursor-pointer" />
        ) : (
          <IconCircleCheckFilled className="text-gray-300 cursor-pointer" />
        );
      },
    },
    {
      id: "actions",
      cell: ({ row }) => {
        return (
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
                <DropdownMenuItem
                  onClick={() => alert("Delete user")}
                  className="hover:!text-red-500"
                >
                  Deactivate
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => alert("Delete user")}
                  className="hover:!text-red-500"
                >
                  Delete
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <IconTrash className="w-4 h-4 text-gray-500 hidden group-hover:block cursor-pointer" />
          </div>
        );
      },
    },
  ];

  return (
    <div className="container mx-auto ">
      <DataTable columns={columns} data={employees} />
    </div>
  );
};

export default EmployeeTable;
