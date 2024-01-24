import Article from "@/model/Article";
import { connectDB } from "@/utils/db";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest, res: NextResponse) => {
  if (req.method !== "GET") {
    return new NextResponse("Method not allowed", { status: 405 });
  }

  const options = await req.nextUrl.searchParams.get("options");

  await connectDB();

  try {
    const parsedOptions = options ? JSON.parse(options) : {};

    const typeValue = parsedOptions.type;
    const limitValue = parseInt(parsedOptions.limit);
    const skipValue = parseInt(parsedOptions.skip);

    let sortOptions = {};

    if (typeValue == "new") {
      sortOptions = { createdAt: -1 };
    } else if (typeValue == "top") {
      sortOptions = { editCount: -1 };
    }

    const articles = await Article.find()
      .sort(sortOptions)
      .skip(skipValue)
      .limit(limitValue);

    return NextResponse.json({ articles: articles }, { status: 200 });
  } catch (error: any) {
    return new NextResponse(error, { status: 500 });
  }
};
