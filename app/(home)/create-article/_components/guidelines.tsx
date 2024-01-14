import { ThumbsUp } from "lucide-react"

const Guidelines = () => {
  return (
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
  )
}

export default Guidelines