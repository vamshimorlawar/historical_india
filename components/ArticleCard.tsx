import Link from 'next/link';
import React from 'react'

interface Article {
    _id: string;
    title: string;
    // Add other properties as needed
}

interface ArticleCardProps {
    articles: Article[];
    sectionTitle: string;
}

const ArticleCard: React.FC<ArticleCardProps> = ({articles, sectionTitle}) => {
  return (
    <div>
          <div className="font-medium text-xl">{sectionTitle}</div>
          <div className="flex mt-2 gap-2">
            {articles.length === 0 ? (
              <div>No {sectionTitle}</div>
            ) : (
              articles.map((article) => (
                <div
                  key={article._id}
                  className="p-5 border-gray-600 border-2 rounded-sm"
                >
                  <Link href={`/article/view/${article._id.toString()}`}>
                    {article.title}
                  </Link>
                </div>
              ))
            )}
          </div>
        </div>
  )
}

export default ArticleCard