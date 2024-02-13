import ArticleComment from "@/model/ArticleComment";
import User from "@/model/User";
import { connectDB } from "@/utils/db";
import { NextResponse } from "next/server";

export const POST = async (req: any, res: any) => {
  const { articleId, userId, comment } = await req.json();

  await connectDB();

  try {
    const user = await User.findOne({ _id: userId });

    const newComment = {
      commentorId: userId,
      commentedBy: user.firstName,
      comment: comment,
    };

    const articleComment = await ArticleComment.findOneAndUpdate(
      { articleId: articleId },
      { $push: { comments: newComment } },
      { new: true, upsert: true }
    );

    await articleComment.save();
    return new NextResponse("Comment updated", { status: 200 });
  } catch (error: any) {
    return new NextResponse("Error: " + error, { status: 500 });
  }
};
