import { connectDB } from "@/utils/db";
import { NextRequest, NextResponse } from "next/server";
import Article from "@/model/Article";

export const GET = async (req: NextRequest, res: NextResponse) => {
  if (req.method !== "GET") {
    return new NextResponse("Method not allowed", { status: 405 });
  }

  const id  = await req.nextUrl.searchParams.get("id");

  await connectDB();

  try {
    const article = await Article.findOne({ _id: id });
    
    if (!article) {
      return new NextResponse("Article Not Found", { status: 404 });
    }

    return NextResponse.json({article: article}, { status: 200 });
  } catch (error: any) {
    return new NextResponse(error, { status: 500 });
  }
};
