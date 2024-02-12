"use client";
import { Separator } from "@/components/ui/separator";
import { ObjectId } from "mongoose";
import React, { useEffect, useState } from "react";
import ArticleHeader from "../../_components/ArticleHeader";
import CommentSection from "@/components/CommentSection";

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
  tags: string[];
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

  return (
    article && (
      <div className="max-w-screen-2xl mx-auto px-10 mb-20">
        <ArticleHeader {...article}/>
        <Separator className="mt-4" />
        <div className="mt-4 tiptap text-muted-foreground" dangerouslySetInnerHTML={{__html: article.content}}/>
        <CommentSection articleId={params.articleId}/>
      </div>
    )
  );
};

export default ArticleViewer;
