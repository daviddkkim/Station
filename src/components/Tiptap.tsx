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
    <div className="h-screen w-full">
      {editor && (
        <BubbleMenu
          editor={editor}
          className="flex gap-2 rounded-lg border bg-neutral-900 p-2"
        >
          <Button
            onClick={() => editor.chain().focus().toggleBold().run()}
            size="sm"
            variant="outline"
          >
            Bold
          </Button>
          <Button
            onClick={() => editor.chain().focus().toggleItalic().run()}
            size="sm"
            variant="outline"
          >
            Italic
          </Button>
          <Button
            onClick={() => editor.chain().focus().toggleStrike().run()}
            size="sm"
            variant="outline"
          >
            Strike
          </Button>
        </BubbleMenu>
      )}
      <div
        className="m-4 min-h-screen rounded-2xl outline-none"
        onClick={() => {
          const editor = document.querySelector(".tiptap");
          const textbox: HTMLAreaElement | undefined | null =
            editor?.querySelector("[role=textbox]");
          textbox?.focus();
        }}
      >
        <EditorContent editor={editor} />
      </div>
    </div>
  );
};

export default Tiptap;
