import { connectDB } from "@/utils/db";
import User from "@/model/user";
import UserStats from "@/model/userstats";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest, res: NextResponse) => {
  if (req.method !== "GET") {
    return new NextResponse("Method not allowed", { status: 405 });
  }

  const email = await req.nextUrl.searchParams.get("email");

  await connectDB();

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return new NextResponse("User Not Found", { status: 404 });
    }

    const userStats = await UserStats.findOne({ user });
    return NextResponse.json({ user, userStats }, { status: 200 });
  } catch (error: any) {
    return new NextResponse(error, { status: 500 });
  }
};
