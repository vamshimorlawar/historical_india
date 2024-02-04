import ArticleForm from "@/components/ArticleForm";
import Image from "next/image";
import Guidelines from "./_components/guidelines";

const CreateArticlePage = () => {
  return (
    <div className="max-w-screen-2xl mx-auto px-10 mb-20">
      <div className="flex flex-wrap justify-center gap-6 mt-10">
        <Guidelines/>
        <div className="w-full md:w-[50%]">
          <div className="font-bold text-2xl mt-4 mb-4">
            Create New Article
          </div>
          <ArticleForm/>
        </div>
      </div>
    </div>
  );
};

export default CreateArticlePage;
