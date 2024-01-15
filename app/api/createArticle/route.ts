import Article from "@/model/article";
import User from "@/model/user";
import UserStats from "@/model/userstats";
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
  console.log("NewUserPoints", newUserPoints);
  

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
      { message: "Article Created and UserStats Updated" },
      { status: 200 }
    );
  } catch (error: any) {
    return new NextResponse(error, { status: 500 });
  }
};
