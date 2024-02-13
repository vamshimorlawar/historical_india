import React, { useEffect, useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useSession } from "next-auth/react";
import { toast } from "react-toastify";
import { redirect } from "next/navigation";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { calculateTimeDifference } from "@/lib/utils";

interface CommentFormProps {
  articleId: string;
}

interface Comment {
  commentorId: string;
  commentedBy: string;
  comment: string;
  updatedAt: Date;
}

const CommentForm: React.FC<CommentFormProps> = ({ articleId }) => {
  const { data: session } = useSession();
  const [comments, setComments] = useState<Comment[]>([]);

  const getComments = async () => {
    const response = await fetch(
      `http://localhost:3000/api/getComments?articleId=${articleId}`,
      {
        cache: "no-cache",
      }
    );

    if (response.status == 200) {
      const data = await response.json();
      setComments(data.comments.reverse());
    } else {
      toast.error("Unable to get the comments", {
        position: "top-right",
      });
      return [];
    }
  };

  useEffect(() => {
    getComments();
  }, []);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      if (!session) {
        toast.info("Please login to comment", {
          position: "top-right",
        });
      } else {
        const comment = e.target[0].value;
        const userId = session.user.id;

        const response = await fetch("/api/postComments", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            comment,
            userId,
            articleId,
          }),
        });

        if (response.status === 200) {
          toast.success("Comment posted!", {
            position: "top-right",
          });
          getComments();
          e.target[0].value = "";
        } else {
          toast.error("Error posting comment", {
            position: "top-right",
          });
        }
      }
    } catch (error) {}
  };

  return (
    <div className="mt-4">
      <div className="font-bold mb-4">Comments ({comments.length})</div>
      <div className="mt-4 text-muted-foreground">
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

                      <div>{calculateTimeDifference(comment.updatedAt)}</div>
                    </div>
                  </div>
                </div>
              );
            })
          : "No comments"}
      </div>
      <div className="mt-6">
        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            name="comment"
            placeholder="Write your comment..."
            required
          />
          <Button type="submit" className="mt-2" size="sm">
            Comment
          </Button>
        </form>
      </div>
    </div>
  );
};

export default CommentForm;
