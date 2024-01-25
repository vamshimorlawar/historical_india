import Article from "@/model/Article";
import User from "@/model/User";
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
      userStats.points += newUserPoints;
      userStats.articlesCreated += 1;
      await userStats.save();
    }

    return NextResponse.json(
      { message: "Article Created and UserStats Updated", articleId: savedArticle._id },
      { status: 200 }
    );
  } catch (error: any) {
    return new NextResponse(error, { status: 500 });
  }
};
