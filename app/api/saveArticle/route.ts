import Article from "@/model/Article";
import UserStats from "@/model/UserStats";
import { connectDB } from "@/utils/db";
import pointsTo from "@/utils/points";
import { NextResponse } from "next/server";

export const POST = async (req: any, res: NextResponse) => {
  const { editorId: editorId, articleId, content } = await req.json();

  await connectDB();

  const article = await Article.findOne({ _id: articleId });
  

  if (article) {
    article.content = content;
    article.editCount += 1;
  } else {
    return new NextResponse("Article Not Found", { status: 404 });
  }

  const userStats = await UserStats.findOne({ user: editorId });
  let newUserPoints = 0;
  if (userStats) {
    newUserPoints = userStats.points + pointsTo.editArticle;
  }else{
    return new NextResponse("User Not Found", { status: 404 });
  }

  try {
    const savedArticle = await article.save();
    if (savedArticle && newUserPoints) {
      userStats.points += newUserPoints;
      userStats.articlesEdited += 1;
      await userStats.save();
    }

    return NextResponse.json(
      { message: "Article Saved and UserStats Updated" },
      { status: 200 }
    );
  } catch (error: any) {
    return new NextResponse(error, { status: 500 });
  }
};