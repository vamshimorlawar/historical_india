"use client";
import { Editor, EditorContent, generateHTML, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Link from "@tiptap/extension-link";
import {
  BoldIcon,
  ItalicIcon,
  Link2Icon,
  Redo2Icon,
  StrikethroughIcon,
  UnderlineIcon,
  Undo2Icon,
} from "lucide-react";
import React, { useCallback, useEffect, useMemo } from "react";
import DOMPurify from "dompurify";
import { Button } from "./ui/button";

type MenuProps = {
  editor: Editor | null;
};

const Menu: React.FC<MenuProps> = ({ editor }) => {
  if (!editor) {
    return null;
  }

  const setLink = useCallback(() => {
    const previousUrl = editor.getAttributes("link").href;
    const url = window.prompt("URL", previousUrl);

    // cancelled
    if (url === null) {
      return;
    }

    // empty
    if (url === "") {
      editor.chain().focus().extendMarkRange("link").unsetLink().run();

      return;
    }

    // update link
    editor.chain().focus().extendMarkRange("link").setLink({ href: url }).run();
  }, [editor]);

  return (
    <div className="flex flex-wrap gap-2 mb-4">
      <Button variant="ghost"
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={
          editor.isActive("bold")
            ? "is-active border-2 border-black dark:border-white"
            : "border-none"
        }
      >
        <BoldIcon />
      </Button>
      <Button variant="ghost"
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={
          editor.isActive("italic")
            ? "is-active border-2 border-black dark:border-white"
            : "border-none"
        }
      >
        <ItalicIcon />
      </Button>
      <Button variant="ghost"
        onClick={() => editor.chain().focus().toggleStrike().run()}
        className={
          editor.isActive("strike")
            ? "is-active border-2 border-black dark:border-white"
            : "border-none"
        }
      >
        <StrikethroughIcon />
      </Button>
      <Button variant="ghost"
        onClick={setLink}
        className={
          editor.isActive("link")
            ? "is-active border-2 border-black dark:border-white"
            : "border-none"
        }
      >
        <Link2Icon />
      </Button>
      <Button variant="ghost" onClick={() => editor.chain().focus().setHorizontalRule().run()}>
        HR
      </Button>
      <Button variant="ghost" onClick={() => editor.chain().focus().setHardBreak().run()}>
        BR
      </Button>
      <Button variant="ghost" onClick={() => editor.chain().focus().undo().run()}>
        <Undo2Icon />
      </Button>
      <Button variant="ghost" onClick={() => editor.chain().focus().redo().run()}>
        <Redo2Icon />
      </Button>
    </div>
  );
};

type TipTapProps = {
  setContent: (content: string) => void;
  content: string;
};

const TipTap: React.FC<TipTapProps> = ({ setContent, content }) => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Link.configure({
        openOnClick: false,
        autolink: true,
      }),
    ],
    content: content || "",
    editorProps: {
      attributes: {
        spellcheck: "false",
      },
    },
  });

  const tiptapHTML = editor?.getHTML() || "";

  useEffect(() => {
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
