import { ObjectId } from "mongoose";
import Link from "next/link";
import React from "react";

type ArticleHeaderProps = {
  _id: ObjectId;
  createdBy: string;
  creatorId: string;
  title: string;
  tagline: string;
  content: string;
  category: string;
  editCount: string;
  createdAt: string;
  updatedAt: string;
};

const ArticleHeader: React.FC<ArticleHeaderProps> = (article) => {
  const formatTimestamp = (timestamp: string) => {
    const options: Intl.DateTimeFormatOptions = {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    };
    return new Date(timestamp).toLocaleString("en-UK", options);
  };
  return (
    <div>
      <div className="mt-10">
        <div className="font-bold text-2xl">
          {article.title}
          <span className="font-light">: {article.tagline}</span>
        </div>
        <div className="flex gap-2 text-xs items-center mt-4 flex-wrap text-muted-foreground">
          <div className="">
            Category:{" "}
            <Link href="#" className="text-blue-500 underline">
              {article.category}
            </Link>
          </div>
          <div>|</div>
          <div className="">
            Author:{" "}
            <Link href="#" className="text-blue-500 underline">
              {article.createdBy}
            </Link>
          </div>
          <div>|</div>
          <div className="">
            Edits:{" "}
            <span>
              {article.editCount}{" "}
              <Link
                href={`/article/edit/${article._id.toString()}`}
                className="text-blue-500 underline"
              >
                (Edit Article)
              </Link>
            </span>
          </div>
          <div>|</div>
          <div>
            Created At: <span>{formatTimestamp(article.createdAt)}</span>
          </div>
          <div>|</div>
          <div>
            Updated At: <span>{formatTimestamp(article.updatedAt)}</span>
          </div>
          <div>|</div>
          <div>
            <Link href="#" className="text-blue-500 underline">
              View History
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleHeader;
