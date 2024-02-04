import { connectDB } from "@/utils/db";
import User from "@/model/User";
import UserStats from "@/model/UserStats";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";
import pointsTo from "@/utils/points";

export const POST = async (req: any) => {
  const { email, firstName, lastName, password } = await req.json();

  await connectDB();

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return new NextResponse("User already exits", { status: 400 });
  }
  const hashedPassword = await bcrypt.hash(password, 5);
  const newUser = new User({
    email,
    firstName,
    lastName,
    password: hashedPassword,
  });

  try {
    const savedUser = await newUser.save();
    const points = pointsTo.createAccount;
    const newUserStats = new UserStats({
      user: savedUser._id,
      points: points,
      articlesCreated: 0,
      articlesEdited: 0,
    });

    await newUserStats.save();

    return new NextResponse("User is registered", { status: 200 });
  } catch (error: any) {
    return new NextResponse(error, { status: 500 });
  }
};
