import { ThumbsUp } from "lucide-react";
import Image from "next/image";

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
      <div className="flex items-center justify-center gap-6 mt-10">
        <div className="w-[40%] bg-orange-200 shadow-sm rounded p-4">
          <div className="font-bold text-xl">Guidelines</div>
          <div className="mt-2">
            Do's
            <ul className="text-sm">
              <li>
                Before creating article, we highly recommend searching whether
                article already exits on search
              </li>
              <li>Add good tagline about the article</li>
              <li>
                Add good content Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Laboriosam vero fugit nulla architecto nisi
              </li>
              <li>
                Add good content Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Laboriosam vero fugit nulla architecto nisi
              </li>
              <li>
                Add good content Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Laboriosam vero fugit nulla architecto nisi
              </li>
            </ul>
          </div>
          <div className="mt-5">
            Dont's
            <ul className="text-sm">
              <li>
                Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Laboriosam vero fugit nulla architecto nisi
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Laboriosam vero fugit nulla architecto nisi
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Laboriosam vero fugit nulla architecto nisi
              </li>
            </ul>
          </div>
          <div className="text-sm">
            Feel free to add as much information as possible on this platform. Your contribution will surely make the Indian History more glorius!<br>
            </br>
            Wish you happy editing <ThumbsUp className="mt-2"/>
          </div>
        </div>
        <div className="w-[50%]">Form</div>
      </div>
    </div>
  );
};

export default CreateArticlePage;
