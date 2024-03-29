import Link from "next/link";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import Tags from "./Tags";

interface Article {
  _id: string;
  title: string;
  tagline: string;
  content: string;
  category: string;
  tags: string[];
  // Add other properties as needed
}

interface ArticleCardProps {
  articles: Article[];
  sectionTitle: string;
}

const ArticleCard: React.FC<ArticleCardProps> = ({
  articles,
  sectionTitle,
}) => {
  return (
    <div className="max-w-screen-2xl mx-auto px-10 mb-20">
      <div className="mt-10">
        <div className="text-2xl font-bold">{sectionTitle}</div>
      </div>
      <div className="mt-6">
        {articles.length === 0 ? (
          <div>No {sectionTitle}</div>
        ) : (
          articles.map((article) => (
            <div
              key={article._id}
              className="transition hover:ease-in p-4 border border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 hover:shadow-lg hover:shadow-foreground/40"
            >
              <Link href={`/article/view/${article._id.toString()}`}>
                <div className="flex gap-4">
                  <Avatar className="rounded-none hidden md:block">
                    {/* <AvatarImage src="https://github.com/shadcn.png"/> */}
                    <AvatarFallback className="rounded-none">{article.title.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="flex flex-wrap gap-1">
                      <div className="font-bold">{article.title}</div>
                      <div>| {article.category}</div>
                    </div>
                    <div>{article.tagline}</div>
                    <Tags tags={article.tags}/>
                  </div>
                </div>
              </Link>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ArticleCard;
