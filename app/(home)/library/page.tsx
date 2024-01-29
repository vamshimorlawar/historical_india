"use client";
import { Skeleton } from "@/components/ui/skeleton";
import { ObjectId } from "mongoose";
import Link from "next/link";
import { useEffect, useState } from "react";

type Result = {
  _id: ObjectId;
  title: string;
  tagline: string;
  content: string;
  category: string;
};

const Library = () => {
  const [searchResults, setSearchResults] = useState<Result[]>([]);

  useEffect(() => {
    const handleSearch = async () => {
      // Perform the search logic here
      const response = await fetch(`/api/getArticles`, { next: { revalidate: 3600 } });
      if (response.status === 200) {
        const data = await response.json();
        setSearchResults(data.articles);
      }
    };
    handleSearch();
  }, []);

  return (
    <div className="px-24">
      <div className="mt-10">
        <div className="text-xl font-bold">Library</div>
        <div>{searchResults.length} articles</div>
        
        {searchResults.map((result) => (
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
