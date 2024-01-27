import Article from "@/model/Article";
import { connectDB } from "@/utils/db";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest, res: NextResponse) => {
  if (req.method !== "GET") {
    return new NextResponse("Method not allowed", { status: 405 });
  }

  const options = await req.nextUrl.searchParams.get("options");
  const query = await req.nextUrl.searchParams.get("query"); 

  await connectDB();

  try {
    const parsedOptions = options ? JSON.parse(options) : {};

    const typeValue = parsedOptions.type;
    const limitValue = parseInt(parsedOptions.limit) || 0;
    const skipValue = parseInt(parsedOptions.skip) || 0;

    let sortOptions = {};

    if (typeValue == "new") {
      sortOptions = { createdAt: -1 };
    } else if (typeValue == "top") {
      sortOptions = { editCount: -1 };
    } else {
      sortOptions = {};
    }

    let searchQuery = {};
    if (query) {
      // Customize the search query based on your requirements
      searchQuery = {
        $or: [
          { title: { $regex: new RegExp(query, "i") } },
          { tagline: { $regex: new RegExp(query, "i") } },
          { content: { $regex: new RegExp(query, "i") } },
        ],
      };
    }

    const articles = await Article.find(searchQuery)
      .sort(sortOptions)
      .skip(skipValue)
      .limit(limitValue);

    return NextResponse.json({ articles: articles }, { status: 200 });
  } catch (error: any) {
    return new NextResponse(error, { status: 500 });
  }
};
