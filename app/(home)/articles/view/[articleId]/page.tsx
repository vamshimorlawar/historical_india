"use client";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import React, { useEffect, useState } from "react";

interface Article {
  id: string;
  createdBy: string;
  creatorId: string;
  title: string;
  tagline: string;
  category: string;
  editCount: string;
  createdAt: string;
  updatedAt: string;
}

const ArticleEditor = ({
  params,
}: {
  params: {
    articleId: string;
  };
}) => {
  const [article, setArticle] = useState<Article | null>(null);

  useEffect(() => {
    const fetchArticle = async () => {
      const response = await fetch(`/api/getArticle?id=${params.articleId}`);
      const data = await response.json();

      if (response.status == 200) {
        setArticle(data.article);
      }
    };
    fetchArticle();
  }, []);

  const formatTimestamp = (timestamp: string) => {
    const options: Intl.DateTimeFormatOptions = {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    };
    return new Date(timestamp).toLocaleString("en-UK", options);
  };

  return (
    article && (
      <div className="p-10 md:p-20">
        <div>
          <div className="font-bold text-2xl md:text-[36px]">
            {article.title}
            <span className="font-light">: {article.tagline}</span>
          </div>
          <div className="flex gap-2 text-xs items-center mt-4 flex-wrap">
            <div className="">
              Category:{" "}
              <Link href="#" className="text-blue-500 underline">
                {article.category}
              </Link>
            </div>
            <div>|</div>
            <div className="">
              Author:{" "}
              <Link href="#" className="text-blue-500 underline">
                {article.createdBy}
              </Link>
            </div>
            <div>|</div>
            <div className="">
              Edits:{" "}
              <span>
                {article.editCount}{" "}
                <Link href="#" className="text-blue-500 underline">
                  (Edit Article)
                </Link>
              </span>
            </div>
            <div>|</div>
            <div>
              Created At: <span>{formatTimestamp(article.createdAt)}</span>
            </div>
            <div>|</div>
            <div>
              Updated At: <span>{formatTimestamp(article.updatedAt)}</span>
            </div>
          </div>
        </div>
        <Separator className="mt-4"/>
        <div className="mt-4">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste quisquam reiciendis natus modi sed magni at harum et illo ea, quasi aspernatur eum qui quibusdam mollitia, placeat quae. Est saepe quisquam excepturi, officia incidunt nihil? Autem, cum. Rem harum debitis voluptatum voluptatibus! Praesentium ad, distinctio consequuntur quaerat facilis, aperiam aliquam perspiciatis recusandae earum possimus voluptatum dolorem atque, eum quam ut saepe molestiae unde repellendus repellat! Ad error deserunt eveniet eligendi cum mollitia animi debitis unde id voluptates tempora officia corporis, ex temporibus modi. Facilis cumque nemo quasi eos incidunt, quos itaque tempora perferendis iste maiores totam in quis quibusdam excepturi?<br></br><br></br>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi expedita perspiciatis sunt, vel error mollitia dolore modi culpa doloremque fugiat in ratione architecto fugit deserunt dolorum velit ducimus impedit. Minus exercitationem ut quae a? Maiores, magni consequuntur debitis, veniam aliquam necessitatibus ullam sequi fugit sint quos doloribus similique natus accusamus. Explicabo doloribus possimus assumenda modi animi nulla, delectus error minus perspiciatis nemo. Ea quibusdam nostrum omnis nulla nemo iure placeat corrupti blanditiis voluptates qui? Dolores reprehenderit impedit molestiae? Ea porro voluptatibus reprehenderit non in quidem est delectus eum sapiente pariatur alias cupiditate quia praesentium commodi aliquid, sint maxime fugit iusto?<br></br><br></br>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi expedita perspiciatis sunt, vel error mollitia dolore modi culpa doloremque fugiat in ratione architecto fugit deserunt dolorum velit ducimus impedit. Minus exercitationem ut quae a? Maiores, magni consequuntur debitis, veniam aliquam necessitatibus ullam sequi fugit sint quos doloribus similique natus accusamus. Explicabo doloribus possimus assumenda modi animi nulla, delectus error minus perspiciatis nemo. Ea quibusdam nostrum omnis nulla nemo iure placeat corrupti blanditiis voluptates qui? Dolores reprehenderit impedit molestiae? Ea porro voluptatibus reprehenderit non in quidem est delectus eum sapiente pariatur alias cupiditate quia praesentium commodi aliquid, sint maxime fugit iusto?<br></br><br></br>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi expedita perspiciatis sunt, vel error mollitia dolore modi culpa doloremque fugiat in ratione architecto fugit deserunt dolorum velit ducimus impedit. Minus exercitationem ut quae a? Maiores, magni consequuntur debitis, veniam aliquam necessitatibus ullam sequi fugit sint quos doloribus similique natus accusamus. Explicabo doloribus possimus assumenda modi animi nulla, delectus error minus perspiciatis nemo. Ea quibusdam nostrum omnis nulla nemo iure placeat corrupti blanditiis voluptates qui? Dolores reprehenderit impedit molestiae? Ea porro voluptatibus reprehenderit non in quidem est delectus eum sapiente pariatur alias cupiditate quia praesentium commodi aliquid, sint maxime fugit iusto?<br></br><br></br>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi expedita perspiciatis sunt, vel error mollitia dolore modi culpa doloremque fugiat in ratione architecto fugit deserunt dolorum velit ducimus impedit. Minus exercitationem ut quae a? Maiores, magni consequuntur debitis, veniam aliquam necessitatibus ullam sequi fugit sint quos doloribus similique natus accusamus. Explicabo doloribus possimus assumenda modi animi nulla, delectus error minus perspiciatis nemo. Ea quibusdam nostrum omnis nulla nemo iure placeat corrupti blanditiis voluptates qui? Dolores reprehenderit impedit molestiae? Ea porro voluptatibus reprehenderit non in quidem est delectus eum sapiente pariatur alias cupiditate quia praesentium commodi aliquid, sint maxime fugit iusto?
        </div>
      </div>
    )
  );
};

export default ArticleEditor;
