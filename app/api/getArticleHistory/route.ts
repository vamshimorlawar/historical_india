import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/utils/db";
import ArticleHistory from "@/model/ArticleHistory";
import { ObjectId } from "mongoose";

type ArticleHistoryType = {
    articleId: ObjectId,
    edits: []
}

export const GET = async (req:any, res:any) => {
  if (req.method !== "GET") {
    return new NextResponse("Method not allowed", { status: 405 });
  }

  const articleId = await req.nextUrl.searchParams.get("articleId");
  console.log(articleId);
  

  await connectDB();

  try {
    const articleHistory = await ArticleHistory.findOne({
      articleId: articleId,
    });

    if (!articleHistory) {
      return new NextResponse("Article history not found", { status: 404 });
    }

    const edits = articleHistory.edits;
    console.log("Ye hai edits ka array ", edits);
    

    return NextResponse.json({ edits: edits }, { status: 200 });
  } catch (error: any) {
    return new NextResponse(error.message, { status: 500 });
  }
};
