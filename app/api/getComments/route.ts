import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/utils/db";
import ArticleComment from "@/model/ArticleComment";

export const GET = async(req: any, res: any) => {
    if (req.method !== "GET") {
        return new NextResponse("Method not allowed", { status: 405 });
      }
    
      const articleId = await req.nextUrl.searchParams.get("articleId");
    
      await connectDB();
    
      try {
        const articleComment = await ArticleComment.findOne({
          articleId: articleId,
        });
    
        if (!articleComment) {
          return new NextResponse("Article comments not found", { status: 404 });
        }
    
        const comments = articleComment.comments;
    
        return NextResponse.json({ comments: comments }, { status: 200 });
      } catch (error: any) {
        return new NextResponse(error.message, { status: 500 });
      }
}