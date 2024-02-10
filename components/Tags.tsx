import React from "react";
import { Badge } from "./ui/badge";
import { cn } from "@/lib/utils";

interface TagsProps {
  tags: string[];
}

const Tags: React.FC<TagsProps> = ({ tags }) => {

  return (
    tags.length != 0 ? <div className="flex gap-3 mt-2">
      {tags.map((tag, index) => (
        <Badge key={index} className={cn("bg-background text-foreground hover:text-background border-b border-border/40 backdrop-blur supports-[backdrop-filter]:bg-background/60")}>#{tag}</Badge>
      ))}
    </div> : ""
  );
};

export default Tags;
