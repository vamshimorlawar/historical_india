"use client"
import { ObjectId } from "mongoose";
import { ColumnDef } from "@tanstack/react-table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { MoreHorizontal } from "lucide-react";
import Link from "next/link";

export type Article = {
  _id: ObjectId;
  title: string;
  tagline: string;
  content: string;
  category: string;
  tags: string[];
};

export const columns: ColumnDef<Article>[] = [
  {
    accessorKey: "title",
    header: () => <div className="font-bold">Title</div>,
  },
  {
    accessorKey: "tagline",
    header: () => <div className="font-bold">Tagline</div>,
  },
  {
    accessorKey: "tags",
    header: () => <div className="font-bold">Tags</div>,
  },
  {
    accessorKey: "category",
    header: () => <div className="font-bold">Category</div>,
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const article = row.original;
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>
              <Link href={`/article/view/${article._id}`}>View Article</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href={`/article/edit/${article._id}`}>Edit Article</Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
