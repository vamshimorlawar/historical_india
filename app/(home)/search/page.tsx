"use client";

import SearchInput from "@/components/SearchInput";
import { ObjectId } from "mongoose";
import Link from "next/link";
import { useState } from "react";

type Result = {
  _id: ObjectId;
  title: string;
  tagline: string;
  content: string;
  category: string;
};

const Search = () => {
  const [searchResults, setSearchResults] = useState<Result[]>([]);
  const handleSearch = async (query: string) => {
    // Perform the search logic here
    const response = await fetch(`/api/getArticles?query=${query}`);
    if (response.status === 200) {
      const data = await response.json();
      setSearchResults(data.articles);
    }
  };

  return (
    <div className="max-w-screen-2xl mx-auto px-10">
      <div className="mt-10">
        <div className="text-2xl font-bold">Search</div>
      </div>
      <div className="mt-4">
        <SearchInput onSearch={handleSearch} />
      </div>
      {searchResults.length == 0 ? (
        <div className="mt-10 text-muted-foreground text-sm">
          <div>
            No Search Results? Try{" "}
            <Link
              href="/create-article"
              className="link underline text-blue-400"
            >
              Create Article
            </Link>{" "}
            for the topic
          </div>
        </div>
      ) : (
        <div className="mt-10">
          <div>Showing Results from {searchResults.length} articles</div>
          {searchResults.map((result) => (
            <div
              key={result._id.toString()}
              className="p-4 border-2 rounded mt-2 mb-2"
            >
              <Link href={`/article/view/${result._id}`}>
                <div className="font-bold text-xl">
                  {result.title} | {result.category}
                </div>
                <div className="text-ellipsis">
                  {result.content.slice(0, 100)}...
                </div>
                {/* You can display more information about the article */}
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;
