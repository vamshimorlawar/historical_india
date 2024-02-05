import React from "react";
import { toast } from "react-toastify";
import { calculateTimeDifference } from "@/lib/utils";
import { generateVisualDiff } from "@/components/ViewDiff";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";

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
                            <ScrollArea className="h-48">
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
                            <ScrollArea className="h-48">
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
