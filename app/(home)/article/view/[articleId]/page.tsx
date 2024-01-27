"use client";
import { Separator } from "@/components/ui/separator";
import { ObjectId } from "mongoose";
import Link from "next/link";
import React, { useEffect, useState } from "react";

interface Article {
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
}

const ArticleViewer = ({
  params,
}: {
  params: {
    articleId: string;
  };
}) => {
  const [article, setArticle] = useState<Article | null>(null);

  useEffect(() => {
    const fetchArticle = async () => {
      const response = await fetch(`/api/getArticle?id=${params.articleId}`);
      const data = await response.json();

      if (response.status == 200) {
        setArticle(data.article);
      }
    };
    fetchArticle();
  }, []);

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
    article && (
      <div className="p-10 md:p-20">
        <div>
          <div className="font-bold text-2xl md:text-[36px]">
            {article.title}
            <span className="font-light">: {article.tagline}</span>
          </div>
          <div className="flex gap-2 text-xs items-center mt-4 flex-wrap">
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
          </div>
        </div>
        <Separator className="mt-4" />
        <div className="mt-4 tiptap" dangerouslySetInnerHTML={{__html: article.content}}/>
      </div>
    )
  );
};

export default ArticleViewer;
