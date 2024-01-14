// components/TiptapEditor.tsx
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { Button } from "./ui/button";

interface TiptapEditorProps {
  setContent: (content: string) => void;
}

const TiptapEditor: React.FC<TiptapEditorProps> = ({ setContent }) => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: "<p>Hello World! 🌎️</p>",
    onUpdate({ editor }) {
      setContent(editor.getHTML());
    },
  });

  return (
    <>
      <div className="flex gap-2">
        <Button
          className="w-10"
          size="sm"
          onClick={() => editor?.chain().focus().toggleBold().run()}
        >
          B
        </Button>
        <Button
          className="w-10"
          size="sm"
          onClick={() => editor?.chain().focus().toggleItalic().run()}
        >
          I
        </Button>
        <EditorContent editor={editor} />
      </div>
    </>
  );
};

export default TiptapEditor;
