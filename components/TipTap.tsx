"use client";
import { Editor, EditorContent, generateHTML, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import {
  BoldIcon,
  ItalicIcon,
  Redo2Icon,
  StrikethroughIcon,
  UnderlineIcon,
  Undo2Icon,
} from "lucide-react";
import React, { useEffect, useMemo } from "react";
import DOMPurify from 'dompurify';

type MenuProps = {
  editor: Editor | null;
};

const Menu: React.FC<MenuProps> = ({ editor }) => {
  if (!editor) {
    return null;
  }

  return (
    <div className="flex flex-wrap gap-2 mb-4">
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={
          editor.isActive("bold")
            ? "is-active border-2 border-black"
            : "border-none"
        }
      >
        <BoldIcon />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={
          editor.isActive("italic")
            ? "is-active border-2 border-black"
            : "border-none"
        }
      >
        <ItalicIcon />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleStrike().run()}
        className={
          editor.isActive("strike")
            ? "is-active border-2 border-black"
            : "border-none"
        }
      >
        <StrikethroughIcon />
      </button>
      <button onClick={() => editor.chain().focus().setHorizontalRule().run()}>
        HR
      </button>
      <button onClick={() => editor.chain().focus().setHardBreak().run()}>
        BR
      </button>
      <button onClick={() => editor.chain().focus().undo().run()}>
        <Undo2Icon />
      </button>
      <button onClick={() => editor.chain().focus().redo().run()}>
        <Redo2Icon />
      </button>
    </div>
  );
};

type TipTapProps = {
  setContent: (content: string) => void;
  content: string;
}

const TipTap: React.FC<TipTapProps> = ({setContent, content}) => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: content || "",
    editorProps: {
      attributes: {
        spellcheck: "false",
      },
    },
  });

  
  const tiptapHTML = editor?.getHTML() || "";
  
  useEffect(()=>{
    const sanitizedTipTapHTML = DOMPurify.sanitize(tiptapHTML);
    setContent(sanitizedTipTapHTML);
  }, [tiptapHTML]);
  

  return (
    <div>
      <Menu editor={editor} />
      <EditorContent editor={editor} />
    </div>
  );
};

export default TipTap;
