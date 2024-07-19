import { connectDB } from "@/utils/db";
import { NextRequest, NextResponse } from "next/server";
import Article from "@/model/Article";

export const GET = async (req: NextRequest, res: NextResponse) => {
  if (req.method !== "GET") {
    return new NextResponse("Method not allowed", { status: 405 });
  }

  await connectDB();

  try {
    // Aggregate pipeline to fetch a random document
    const [article] = await Article.aggregate([{ $sample: { size: 1 } }]);

    if (!article) {
      return new NextResponse("Article Not Found", { status: 404 });
    }

    return NextResponse.json({ article: article }, { status: 200 });
  } catch (error: any) {
    return new NextResponse(error.toString(), { status: 500 });
  }
};
