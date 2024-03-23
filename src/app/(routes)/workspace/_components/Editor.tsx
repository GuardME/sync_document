"use client";
import React, { useEffect } from "react";
import EditorJS from "@editorjs/editorjs";
// // @ts-ignore
import Header from "@editorjs/header";
// // @ts-ignore
// import List from "@editorjs/list";
// // @ts-ignore
import Checklist from "@editorjs/checklist";
// // @ts-ignore
// import Paragraph from '@editorjs/paragraph';
// // @ts-ignore
// import Warning from '@editorjs/warning';
// // @ts-ignore
import Table from "@editorjs/table";

function Editor() {
  useEffect(() => {
    initEditor();
  });
  const initEditor = () => {
    const editor = new EditorJS({
      // for detect id element
      tools: {
        header: {
          class: Header,
          shortcut: "CMD+SHIFT+H",
          config: {
            placeholder: "Enter a Header",
          },
        },
      
        //   list: {
        //     class: List,
        //     inlineToolbar: true,
        //     config: {
        //       defaultStyle: 'unordered'
        //     }
        //   },
        checklist: {
          class: Checklist,
          inlineToolbar: true,
        },
        table: {
            class: Table,
            inlineToolbar: true,
            config: {
              rows: 2,
              cols: 3,
            },
          },
        //   paragraph: Paragraph,
        //   warning: Warning,
      },
      holder: "editorjs",
    });
  };

  return (
    <div>
      <div id="editorjs" className="ml-6 "></div>
    </div>
  );
}

export default Editor;
