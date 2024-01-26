import Tiptap from "@/components/TipTap";
import React from "react";

const ArticleEditor = ({
  params,
}: {
  params: {
    id: string;
  };
}) => {
  return (
    <div className="p-24">
      <div className="flex">
        <div>

        </div>
        <div>
          <Tiptap />
        </div>
      </div>
    </div>
  );
};

export default ArticleEditor;
