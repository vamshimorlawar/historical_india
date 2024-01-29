import { Skeleton } from "@/components/ui/skeleton";
import { ObjectId } from "mongoose";
import Link from "next/link";

type Result = {
  _id: ObjectId;
  title: string;
  tagline: string;
  content: string;
  category: string;
};

const fetchData = async () => {
  // Perform the search logic here
  let articles: any = [];
  const response = await fetch(`http://localhost:3000/api/getArticles`, {
    next: { revalidate: 3600 },
    cache: "no-store",
  });
  if (response.status === 200) {
    const articlesData = await response.json();
    articles = articlesData;
  }

  return articles;
};

const Library = async () => {
  const data = await fetchData();
  const libraryResults = data.articles;

  return (
    <div className="px-24">
      <div className="mt-10">
        <div className="text-xl font-bold">Library</div>
        <div>{libraryResults.length} articles</div>

        {libraryResults.map((result:Result) => (
          <div
            key={result._id.toString()}
            className="p-4 border-2 rounded mt-2 mb-2"
          >
            <Link href={`/article/view/${result._id}`}>
              <div className="font-bold text-md">
                {result.title} | {result.category}
              </div>
              <div className="text-ellipsis text-sm">
                {result.content.slice(0, 100)}...
              </div>
              {/* You can display more information about the article */}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Library;
