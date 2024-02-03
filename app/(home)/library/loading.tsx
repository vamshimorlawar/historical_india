import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const loading = () => {
  return (
    <div className="px-24">
      <div className="mt-10">
        <div className="text-xl font-bold">Library</div>
        <Skeleton className="p-10 border-2 rounded mt-2 mb-2"/>
      </div>
    </div>
  );
};

export default loading;
