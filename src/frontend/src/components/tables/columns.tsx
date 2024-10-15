import { User } from "@/types/model";
import { ColumnDef } from "@tanstack/react-table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { MoreHorizontal } from "lucide-react";
import { Button } from "../ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";

export const providersColumns: ColumnDef<User>[] = [
  {
    accessorKey: "id",
    header: "Account",
    cell: ({ row }) => (
      <div className="flex flex-row items-center gap-2 sm:gap-3">
        <Avatar className="h-8 w-8 sm:h-10 sm:w-10">
          <AvatarImage src={row.original.avatarUrl} />
          <AvatarFallback>P</AvatarFallback>
        </Avatar>
        <p className="text-sm sm:text-base">{row.original.organizationName}</p>
      </div>
    ),
  },
  {
    accessorKey: "email",
    header: "Email",
    cell: ({ row }) => (
      <p className="text-sm sm:text-base truncate max-w-[150px] sm:max-w-none">
        {row.original.email}
      </p>
    ),
  },
  {
    accessorKey: "validIdUrl",
    header: "Valid Id",
    cell: ({ row }) => (
      <Dialog>
        <DialogTrigger className="text-sm sm:text-base underline text-blue-600">
          View ID
        </DialogTrigger>
        <DialogContent className="w-full max-w-lg">
          <img className="w-full" src={row.original.validIdUrl} alt="id" />
        </DialogContent>
      </Dialog>
    ),
  },
  {
    id: "actions",
    cell: ({ row }) => (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-8 w-8 p-0">
            <span className="sr-only">Open menu</span>
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Actions</DropdownMenuLabel>
          <DropdownMenuItem>Suspend</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Delete</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    ),
  },
];

export const studentsColumns: ColumnDef<User>[] = [
  {
    accessorKey: "id",
    header: "Account",
    cell: ({ row }) => (
      <div className="flex flex-row items-center gap-2 sm:gap-3">
        <Avatar className="h-8 w-8 sm:h-10 sm:w-10">
          <AvatarImage src={row.original.avatarUrl} />
          <AvatarFallback>S</AvatarFallback>
        </Avatar>
        <p className="text-sm sm:text-base">{row.original.organizationName}</p>
      </div>
    ),
  },
  {
    accessorKey: "email",
    header: "Email",
    cell: ({ row }) => (
      <p className="text-sm sm:text-base truncate max-w-[150px] sm:max-w-none">
        {row.original.email}
      </p>
    ),
  },
  {
    id: "actions",
    cell: ({ row }) => (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-8 w-8 p-0">
            <span className="sr-only">Open menu</span>
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Actions</DropdownMenuLabel>
          <DropdownMenuItem>Suspend</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Delete</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    ),
  },
];