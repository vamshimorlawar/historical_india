import ArticleForm from "@/components/ArticleForm";
import { ThumbsUp } from "lucide-react";
import Image from "next/image";
import Guidelines from "./_components/guidelines";

const CreateArticlePage = () => {
  return (
    <div className="mt-10 mb-20">
      <div className="flex justify-center">
        <Image
          src="/historical_india.png"
          alt="historical india"
          width={500}
          height={500}
          objectFit="cover"
        />
      </div>
      <div className="flex justify-center gap-6 mt-10">
        <Guidelines/>
        <div className="w-[50%]">
          <div className="font-bold text-xl mt-4 mb-4">
            Create New Article
          </div>
          <ArticleForm/>
        </div>
      </div>
    </div>
  );
};

export default CreateArticlePage;
