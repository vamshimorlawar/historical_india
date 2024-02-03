import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import React from "react";

const loading = () => {
  return (
    <div className="px-24">
      <div className="mt-10">
        <div className="text-xl font-bold">Library</div>
        <div className="flex items-center py-4">
          <Input placeholder="Filter title..." />
        </div>
        <div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead>Category</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>
                  <Skeleton className="w-[100px] h-4 p-4 " />
                </TableCell>
                <TableCell>
                  <Skeleton className="w-[100px] h-4 p-4 " />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Skeleton className="w-[100px] h-4 p-4 " />
                </TableCell>
                <TableCell>
                  <Skeleton className="w-[100px] h-4 p-4 " />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Skeleton className="w-[100px] h-4 p-4 " />
                </TableCell>
                <TableCell>
                  <Skeleton className="w-[100px] h-4 p-4 " />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default loading;
