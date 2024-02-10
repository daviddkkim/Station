"use client";

import { useEditor, EditorContent, BubbleMenu } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { Button } from "./ui/Button";

const Tiptap = () => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: "<p>Hello World! 🌎️</p>",
  });

  return (
    <>
      {editor && (
        <BubbleMenu editor={editor}>
          <Button onClick={() => editor.chain().focus().toggleBold().run()}>
            Bold
          </Button>
          <Button onClick={() => editor.chain().focus().toggleItalic().run()}>
            Italic
          </Button>
          <Button onClick={() => editor.chain().focus().toggleStrike().run()}>
            Strike
          </Button>
        </BubbleMenu>
      )}
      <EditorContent editor={editor} />
    </>
  );
};

export default Tiptap;
