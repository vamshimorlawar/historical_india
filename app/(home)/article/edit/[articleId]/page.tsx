"use client";
import TipTap from "@/components/TipTap";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ObjectId } from "mongoose";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { redirect, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import ArticleHeader from "../../_components/ArticleHeader";
import { Input } from "@/components/ui/input";
import { toast } from 'react-toastify';

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

const ArticleEditor = ({
  params,
}: {
  params: {
    articleId: string;
  };
}) => {
  const [article, setArticle] = useState<Article | null>(null);
  const [content, setContent] = useState("");
  const router = useRouter();
  const { data: session, status: sessionStatus } = useSession();
  

  useEffect(() => {
    if (!session) {
      toast.info("Please login to edit article", {
         position: 'top-right'
       })
     redirect("/login");
   }
    const fetchArticle = async () => {
      const response = await fetch(`/api/getArticle?id=${params.articleId}`);
      const data = await response.json();

      if (response.status == 200) {
        setArticle(data.article);
      }
    };
    fetchArticle();
  }, []);

  const saveArticle = async (event: any) => {
    event?.preventDefault();
    if (sessionStatus == "authenticated") {
      const user = session.user;
      const userId = user?.id;

      const response = await fetch("/api/saveArticle", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          editorId: userId,
          articleId: article?._id,
          // title: article?.title,
          // tagline: article?.tagline,
          content: content,
          // category: article?.category,
        }),
      });

      if (response.status == 200) {
        router.push("/article/view/" + params.articleId);
        toast.success("Success!", {
          position: 'top-right'
        })
      } else {
        toast.error("Error saving article", {
          position: 'top-right'
        })
      }
    } else {
      toast.info("Please login to edit article", {
        position: 'top-right'
      })
    }
  };
  return (
    article && (
      <div className="max-w-screen-2xl mx-auto px-10">
        <ArticleHeader {...article} />
        <Separator className="mt-4" />
        <div className="mt-4 text-muted-foreground">
          <TipTap setContent={setContent} content={article.content} />
        </div>
        <div className="mt-6">
          <Input
            className="mt-2 max-w-[300px] md:max-w-[500px]"
            placeholder="Tell us what you edited..."
            required
          />
          <Button className="mt-4" size="sm" onClick={saveArticle}>
            Save Article
          </Button>
        </div>
      </div>
    )
  );
};

export default ArticleEditor;
