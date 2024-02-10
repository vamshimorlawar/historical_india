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
    <div className="max-w-screen-2xl mx-auto px-10 mb-20">
      <div className="mt-10">
        <div className="text-2xl font-bold">Library</div>
        <div className="flex items-center py-4 w-[300px]">
          <Input placeholder="Filter title..." />
        </div>
        <div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead>Tagline</TableHead>
                <TableHead>Tags</TableHead>
                <TableHead>Category</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {Array.from({ length: 3 }).map((_, index) => {
                return (
                  <TableRow key={index}>
                    <TableCell>
                      <Skeleton className="w-[80%] h-4 p-4 " />
                    </TableCell>
                    <TableCell>
                      <Skeleton className="w-[80%] h-4 p-4 " />
                    </TableCell>
                    <TableCell>
                      <Skeleton className="w-[80%] h-4 p-4 " />
                    </TableCell>
                    <TableCell>
                      <Skeleton className="w-[80%] h-4 p-4 " />
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default loading;
