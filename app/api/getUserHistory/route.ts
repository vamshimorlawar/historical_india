import UserHistory from "@/model/UserHistory";
import { connectDB } from "@/utils/db";
import { NextResponse } from "next/server";

export const GET = async (req: any, res: any) => {
  if (req.method !== "GET") {
    return new NextResponse("Method not allowed", { status: 405 });
  }

  const userId = await req.nextUrl.searchParams.get("userId");
  await connectDB();

  try {
    const userHistory = await UserHistory.findOne({ userId: userId });

    if (!userHistory) {
      return new NextResponse("User history not found", { status: 404 });
    }

    const createdArticleHistory = userHistory.articles.created;
    const editedArticleHistory = userHistory.articles.edited;

    return NextResponse.json(
      {
        createdArticles: createdArticleHistory,
        editedArticles: editedArticleHistory,
      },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json(error.message, { status: 500 });
  }
};
