import React from "react";

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
import { ScrollArea } from "@/components/ui/scroll-area";
import { calculateTimeDifference } from "@/lib/utils";
import { generateVisualDiff } from "@/components/ViewDiff";
import Link from "next/link";

interface ArticleActivityProps {
  articles: {
    articleId: string;
    articleTitle: string,
    message: string;
    editedBy: string;
    updatedAt: Date;
  }[];
  type: "Created" | "Edited";
}

const ArticleActivity: React.FC<ArticleActivityProps> = ({
  articles,
  type,
}) => {
  return (
    <div>
      <div className="mt-4">
        {articles.length == 0 ? <div className="p-4">No Articles <Link href="/create-article" className="underline text-blue-400">Create Article</Link></div> : articles.map((activity: any, index: number) => (
          <div
            key={index}
            className="p-4 border border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
          >
            <div className="flex flex-wrap justify-between">
              <div>
                <Link href={`/article/view/${activity.articleId}`} className="mb-2 text-sm md:text-md">
                  {activity.articleTitle}
                </Link>
                <div className="flex text-xs gap-4 text-muted-foreground">
                  <div>
                    {activity.message}
                  </div>
                  <div>
                    {type + " " + calculateTimeDifference(activity.updatedAt)}
                  </div>
                </div>
              </div>

              <div>
                <Dialog>
                  <DialogTrigger className="text-xs underline text-blue-400">
                    View Changes
                  </DialogTrigger>
                  <DialogContent className="min-w-[60%]">
                    <DialogHeader>
                      <DialogTitle className="text-md">
                        {activity.message}
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
                                  __html: activity.oldContent,
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
                                  activity.oldContent,
                                  activity.newContent
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

export default ArticleActivity;
