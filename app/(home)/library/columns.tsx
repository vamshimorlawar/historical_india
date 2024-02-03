import { ObjectId } from "mongoose";
import { ColumnDef } from "@tanstack/react-table";

export type Result = {
  _id: ObjectId;
  title: string;
  tagline: string;
  content: string;
  category: string;
};

export const columns: ColumnDef<Result>[] = [
    {
        accessorKey: "title",
        header: () => <div className="font-bold">Title</div>,
    }, 
    {
        accessorKey: "category",
        header: () => <div className="font-bold">Category</div>,
    }
];
