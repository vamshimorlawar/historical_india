"use client";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { calculateTimeDifference } from "@/lib/utils";

interface CommentSectionProps {
  articleId: string;
}

interface Comment {
  commentorId: string;
  commentedBy: string;
  comment: string;
  updatedAt: Date;
}

const CommentSection: React.FC<CommentSectionProps> = ({ articleId }) => {
  const [comments, setComments] = useState<Comment[]>([]);
  useEffect(() => {
    const getComments = async (articleId: string) => {
      const response = await fetch(
        `http://localhost:3000/api/getComments?articleId=${articleId}`,
        {
          cache: "no-cache",
        }
      );

      if (response.status == 200) {
        const data = await response.json();

        setComments(data.comments);
      } else {
        toast.error("Unable to get the comments", {
          position: "top-right",
        });
        return [];
      }
    };
    getComments(articleId);
  }, []);
  return (
    <div className="mt-10">
      Comments
      <div className="mt-4">
        {comments.length > 0
          ? comments.map((comment: Comment, index: number) => {
              return (
                <div
                  key={index}
                  className="p-4 border border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 hover:shadow-lg hover:shadow-foreground/40"
                >
                  <div>
                    <div className="mb-2 text-sm md:text-md">
                      {comment.comment}
                    </div>
                    <div className="flex text-xs gap-6 text-muted-foreground">
                      <div className="flex">
                        <Button
                          variant="ghost"
                          className="relative h-3 w-3 rounded-full"
                        >
                          <Avatar className="h-3 w-3">
                            {/* <AvatarImage src="/avatars/01.png" alt="@shadcn" /> */}
                            <AvatarFallback>
                              {comment.commentedBy.charAt(0).toUpperCase()}
                            </AvatarFallback>
                          </Avatar>
                        </Button>
                        <div>{comment.commentedBy}</div>
                      </div>

                      <div>
                        Updated at {calculateTimeDifference(comment.updatedAt)}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          : "No comments"}
      </div>
    </div>
  );
};

export default CommentSection;
