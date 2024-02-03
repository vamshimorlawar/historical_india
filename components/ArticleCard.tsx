import Link from 'next/link';
import React from 'react'
import { Separator } from './ui/separator';

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
          <Separator className='mt-2'/>
          <div className="flex flex-col mt-2 gap-2">
            {articles.length === 0 ? (
              <div>No {sectionTitle}</div>
            ) : (
              articles.map((article) => (
                <div
                  key={article._id}
                  className="p-2"
                >
                  <Link href={`/article/view/${article._id.toString()}`}>
                    {article.title}
                  </Link>
                  <Separator className='mt-2'/>
                </div>
              ))
            )}
          </div>
        </div>
  )
}

export default ArticleCard