import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import React from "react";
import { toast } from "react-toastify";
import { diffChars } from "diff";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { redirect } from "next/navigation";

interface Edit {
  editorId: string;
  editedBy: string;
  oldContent: string;
  newContent: string;
  message: string;
  updatedAt: Date;
}

const getHistory = async (articleId: string) => {
  const response = await fetch(
    `http://localhost:3000/api/getArticleHistory?articleId=${articleId}`,
    {
      cache: "no-cache",
    }
  );

  if (response.status == 200) {
    const data = await response.json();
    return data.edits.reverse();
  } else {
    toast.error("Unable to get the history", {
      position: "top-right",
    });
    return [];
  }
};

const ArticleHistory = async ({
  params,
}: {
  params: {
    articleId: string;
  };
}) => {
  const edits = await getHistory(params.articleId);
  const calculateTimeDifference = (updatedAt: Date) => {
    const now: any = new Date();
    const updated: any = new Date(updatedAt);

    const diffInMilliseconds: number = now - updated;

    const seconds = Math.floor(diffInMilliseconds / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const months = Math.floor(days / 30); // Note: This is a simple approximation
    const years = Math.floor(days / 365); // Note: This is a simple approximation

    if (years >= 1) {
      return years === 1 ? "1 year ago" : `${years} years ago`;
    } else if (months >= 1) {
      return months === 1 ? "1 month ago" : `${months} months ago`;
    } else if (days >= 1) {
      return days === 1 ? "1 day ago" : `${days} days ago`;
    } else if (hours >= 1) {
      return hours === 1 ? "1 hour ago" : `${hours} hours ago`;
    } else if (minutes >= 1) {
      return minutes === 1 ? "1 minute ago" : `${minutes} minutes ago`;
    } else {
      return seconds === 1 ? "1 second ago" : `${seconds} seconds ago`;
    }
  };

  const generateVisualDiff = (oldContent: string, newContent: string) => {
    const diff = diffChars(oldContent, newContent);

    return diff.map((part, index) => {
      const className = part.added
        ? "added bg-green-200 dark:bg-green-800"
        : part.removed
        ? "removed bg-red-200 dark:bg-red-800"
        : "unchanged";
      return (
        <span key={index} className={className}>
          {part.value}
        </span>
      );
    });
  };

  return (
    <div className="max-w-screen-2xl mx-auto mb-20 p-10">
      <div className="text-2xl font-bold">History</div>
      <div className="mt-4">
        {edits.map((edit: Edit, index: number) => (
          <div
            key={index}
            className="p-4 border border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
          >
            <div className="flex flex-wrap justify-between">
              <div>
                <div className="mb-2 text-sm md:text-md">{edit.message}</div>
                <div className="flex text-xs gap-6 text-muted-foreground">
                  <div className="flex">
                    <Button
                      variant="ghost"
                      className="relative h-3 w-3 rounded-full"
                    >
                      <Avatar className="h-3 w-3">
                        {/* <AvatarImage src="/avatars/01.png" alt="@shadcn" /> */}
                        <AvatarFallback>
                          {edit.editedBy.charAt(0).toUpperCase()}
                        </AvatarFallback>
                      </Avatar>
                    </Button>
                    <div>{edit.editedBy}</div>
                  </div>

                  <div>
                    Updated at {calculateTimeDifference(edit.updatedAt)}
                  </div>
                </div>
              </div>

              <div>
                <Dialog>
                  <DialogTrigger className="text-xs underline text-blue-400">
                    View Diff
                  </DialogTrigger>
                  <DialogContent className="min-w-[60%]">
                    <DialogHeader>
                      <DialogTitle className="text-md">
                        {edit.message}
                      </DialogTitle>
                      <DialogDescription>
                        <div className="flex-1 gap-10 justify-center text-xs mt-4">
                          <div>
                            <p className="font-bold">Prev Content</p>
                            <ScrollArea className="max-h-48">
                              <Separator className="my-2" />
                              <p
                                className=""
                                dangerouslySetInnerHTML={{
                                  __html: edit.oldContent,
                                }}
                              />
                            </ScrollArea>
                          </div>

                          <div className="mt-4">
                            <p className="font-bold">After Changes</p>
                            <ScrollArea className="max-h-48">
                              <Separator className="my-2" />
                              <p className="">
                                {generateVisualDiff(
                                  edit.oldContent,
                                  edit.newContent
                                )}
                              </p>
                            </ScrollArea>
                          </div>
                        </div>
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArticleHistory;
