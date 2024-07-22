import { Separator } from "@/components/ui/separator";
import { ThumbsDown, ThumbsUp } from "lucide-react";

const Guidelines = () => {
  return (
    <div className="md:w-[40%] shadow-sm rounded p-4">
      <div className="font-bold text-2xl">Guidelines</div>
      <div className="mt-4">
        <div className="flex items-center gap-2 mb-2">
          <ThumbsUp />
          <div>Do's</div>
        </div>

        <ul className="text-sm text-muted-foreground">
          <li>
           Before creating article, search first to make sure that an article does not already exist with that title.
          </li>
          <li>Add relevant tagline about the article.</li>
          <li>
            Choose a category which suits the content of the article.
          </li>
          <li>
            Add tags which are relevant to the content. Adding tags will make search efficient.
          </li>
          
        </ul>
      </div>
      <Separator className="mt-4" />
      <div className="mt-4">
        <div className="flex items-center gap-2 mb-2">
          <ThumbsDown />
          <div>Dont's</div>
        </div>
        <ul className="text-sm text-muted-foreground">
          <li>
            Article content and images inserted in the artciles should not be copied from other resources.
          </li>
          
        </ul>
      </div>
      <Separator className="mt-4" />
      <div className="mt-4 text-sm text-muted-foreground">
        Feel free to add as much information as possible on this platform. Your
        contribution will surely make the Indian Knowledge System more glorius.<br></br>
        Wish you happy editing!!
      </div>
    </div>
  );
};

export default Guidelines;
