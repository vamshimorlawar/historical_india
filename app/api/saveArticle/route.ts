import Article from "@/model/Article";
import ArticleHistory from "@/model/ArticleHistory";
import User from "@/model/User";
import UserHistory from "@/model/UserHistory";
import UserStats from "@/model/UserStats";
import { connectDB } from "@/utils/db";
import pointsTo from "@/utils/points";
import { NextResponse } from "next/server";

export const POST = async (req: any, res: NextResponse) => {
  const { editorId: editorId, articleId, content, message } = await req.json();

  await connectDB();

  const article = await Article.findOne({ _id: articleId });
  
  const oldContent = article.content;

  if (article) {
    article.content = content;
    article.editCount += 1;
  } else {
    return new NextResponse("Article Not Found", { status: 404 });
  }

  const userStats = await UserStats.findOne({ user: editorId });
  const user = await User.findOne({_id: editorId});

  const articleHistory = await ArticleHistory.findOne({articleId: articleId});

  if(articleHistory){
    articleHistory.articleId = articleId;
    articleHistory.edits.push({
      editorId: editorId,
      editedBy: user.firstName,
      oldContent: oldContent,
      newContent: content,
      message: message
    })
  }else{
    console.log("Article History Not Found");
  }

  const userHistory = await UserHistory.findOneAndUpdate({userId: editorId});

  if(userHistory){
    userHistory.articles.edited.push({
      articleId: articleId,
      articleTitle: article.title,
      oldContent: oldContent,
      newContent: content,
      message: message,
      updatedAt: new Date(),
    })
  }else{
    console.log("User History not found");
  }
  
  try {
    const savedArticle = await article.save();
    if (savedArticle && userStats) {
      userStats.points += pointsTo.editArticle;
      
      userStats.articlesEdited += 1;
      await userStats.save();
      await articleHistory.save();
      await userHistory.save();
    }

    return NextResponse.json(
      { message: "Article Saved and UserStats Updated" },
      { status: 200 }
    );
  } catch (error: any) {
    return new NextResponse(error, { status: 500 });
  }
};
