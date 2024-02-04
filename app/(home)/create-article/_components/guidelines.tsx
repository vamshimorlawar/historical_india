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
            Before creating article, we highly recommend searching whether
            article already exits on search
          </li>
          <li>Add good tagline about the article</li>
          <li>
            Add good content Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Laboriosam vero fugit nulla architecto nisi
          </li>
          <li>
            Add good content Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Laboriosam vero fugit nulla architecto nisi
          </li>
          <li>
            Add good content Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Laboriosam vero fugit nulla architecto nisi
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            vero fugit nulla architecto nisi
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            vero fugit nulla architecto nisi
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            vero fugit nulla architecto nisi
          </li>
        </ul>
      </div>
      <div className="mt-4 text-sm text-muted-foreground">
        Feel free to add as much information as possible on this platform. Your
        contribution will surely make the Indian History more glorius!<br></br>
        Wish you happy editing
      </div>
    </div>
  );
};

export default Guidelines;
