import Article from "@/model/Article";
import ArticleHistory from "@/model/ArticleHistory";
import User from "@/model/User";
import UserHistory from "@/model/UserHistory";
import UserStats from "@/model/UserStats";
import { connectDB } from "@/utils/db";
import pointsTo from "@/utils/points";
import { NextResponse } from "next/server";

export const POST = async (req: any, res: NextResponse) => {
  const { email, title, tagline, category } = await req.json();

  await connectDB();

  const user = await User.findOne({ email });
  const creatorId = user._id;

  const userStats = await UserStats.findOne({ user: creatorId });
  const newUserPoints = userStats.points + pointsTo.createArticle;

  const newArticle = new Article({
    createdBy: user.firstName,
    creatorId: user._id,
    title,
    tagline,
    category,
    editCount: 0,
  });

  
  try {
    const savedArticle = await newArticle.save();
    if (savedArticle) {
      userStats.points = newUserPoints;
      userStats.articlesCreated += 1;
      await userStats.save();

      const newEdit = {
        editorId: user._id,
        editedBy: user.firstName,
        oldContent: "Init Content",
        newContent: "Init Content",
        message: "Article Initialized"
      }
      const savedArticleId = savedArticle._id;
      const articleHistory = await ArticleHistory.findOneAndUpdate(
        { articleId: savedArticleId },
        { $push: { edits: newEdit } },
        { new: true, upsert: true }
      );
      await articleHistory.save();

      const userHistory = await UserHistory.findOneAndUpdate(
        { userId: creatorId },
        {
          $push: {
            'articles.created': {
              articleId: savedArticleId,
              articleTitle: title,
              oldContent: "Init Content",
              newContent: "Init Content",
              message: "Article Initialized",
              updatedAt: new Date(),
            },
          },
        },
        { new: true, upsert: true }
      );
      await userHistory.save();
    }

    return NextResponse.json(
      { message: "Article Created and UserStats Updated", articleId: savedArticle._id },
      { status: 200 }
    );
  } catch (error: any) {
    return new NextResponse(error, { status: 500 });
  }
};
