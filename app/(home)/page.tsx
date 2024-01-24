"use client";
import { Separator } from "@/components/ui/separator";
import { useEffect, useState } from "react";

interface Article {
  _id: string;
  title: string;
  // Add other properties as needed
}

interface Contributor {
  _id: string;
  firstName: string;
  points: number;
  // Add other properties as needed
}

const HomePage = () => {
  const [newArticles, setNewArticles] = useState<Article[]>([]);
  const [topArticles, setTopArticles] = useState<Article[]>([]);
  const [topContributors, setTopContributors] = useState<Contributor[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const newArticleOptions = { type: "new", limit: 5, skip: 0 };
      const topArticleOptions = { type: "top", limit: 5, skip: 0 };
      const topContributorOptions = { type: "top", limit: 5, skip: 0 };

      try {
        const [
          newArticlesResponse,
          topArticlesResponse,
          topContributorsResponse,
        ] = await Promise.all([
          fetch(`api/getArticles?options=${JSON.stringify(newArticleOptions)}`),
          fetch(`api/getArticles?options=${JSON.stringify(topArticleOptions)}`),
          fetch(
            `api/getContributors?options=${JSON.stringify(
              topContributorOptions
            )}`
          ),
        ]);

        const [newArticlesData, topArticlesData, topContributorsData] =
          await Promise.all([
            newArticlesResponse.json(),
            topArticlesResponse.json(),
            topContributorsResponse.json(),
          ]);

        setNewArticles(newArticlesData.articles);
        setTopArticles(topArticlesData.articles);
        setTopContributors(topContributorsData.contributors);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="mb-20">
      <div className="flex items-center justify-center flex-col p-24">
        <div className="text-3xl">Welcome to Historical India</div>
        <div className="text-neutral-400">Encyclopedia of Indian History!</div>
      </div>
      <div>
        <div>
          <div className="font-medium text-xl">Top Articles</div>
          <div className="flex mt-2">
            {topArticles.length === 0 ? (
              <div>No Top Articles</div>
            ) : (
              topArticles.map((article) => (
                <div
                  key={article._id}
                  className="p-5 border-gray-600 border-2 rounded-sm"
                >
                  {article.title}
                </div>
              ))
            )}
          </div>
        </div>
        <Separator className="my-4" />
        <div>
          <div className="font-medium text-xl">New Articles</div>
          <div className="flex mt-2">
            {newArticles.length === 0 ? (
              <div>No New Articles</div>
            ) : (
              newArticles.map((article) => (
                <div
                  key={article._id}
                  className="p-5 border-gray-600 border-2 rounded-sm"
                >
                  {article.title}
                </div>
              ))
            )}
          </div>
        </div>
        <Separator className="my-4" />
        <div>
          <div className="font-medium text-xl">Top Contributor</div>
          <div className="flex mt-2">
            {topContributors.length === 0 ? (
              <div>No Contributors</div>
            ) : (
              topContributors.map((contributor) => (
                <div
                  key={contributor._id}
                  className="p-5 border-gray-600 border-2 rounded-sm"
                >
                  {contributor.firstName}, {contributor.points}
                </div>
              ))
            )}
          </div>
        </div>
        <Separator className="my-4" />
      </div>

      <div className="flex items-center justify-center p-4 border-2 w-fit border-orange-300 mx-auto mt-10">
        Contact: historicalindia@xyz.com
      </div>
    </div>
  );
};

export default HomePage;
