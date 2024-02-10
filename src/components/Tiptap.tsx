"use client";

import { useEditor, EditorContent, BubbleMenu } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { Button } from "./ui/button";

const Tiptap = () => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: "<p>Hello World! 🌎️</p>",
  });

  return (
    <>
      {editor && (
        <BubbleMenu
          editor={editor}
          className="bg-primary flex gap-1 rounded-lg border p-2"
        >
          <Button variant={"secondary"}> X </Button>
          <Button variant={"secondary"}> Y </Button>
          <Button variant={"secondary"}> Z </Button>
        </BubbleMenu>
      )}
      <EditorContent editor={editor} />
    </>
  );
};

export default Tiptap;
