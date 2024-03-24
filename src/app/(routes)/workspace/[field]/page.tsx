"use client";
import React, { useEffect, useState } from "react";
import WorkSpaceHeader from "../_components/WorkspaceHeader";
import Editor from "../_components/Editor";
import { useConvex } from "convex/react";
import { FILE } from "../../dashboard/_components/FileList";

function Workspace({ params }: any) {
  const [triggerSave, setTriggerSave] = useState(false);
  const convex = useConvex();
  const [fileData, setFileData] = useState<FILE | any>();
  useEffect(() => {
    console.log("FILEID",params)
    params.field;
  }, []);

  return (
    <div>
      <WorkSpaceHeader onSave={() => setTriggerSave(!triggerSave)} />

      {/* WorkSpace Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Document */}
        <div className="h-screen">
          <Editor
            className="p-5"
            onSaveTrigger={triggerSave}
            fileId={params.field}
          />
        </div>
        {/* Whiteboard Canvas */}
        <div className="bg-red-500 h-screen">Canvas</div>
      </div>
    </div>
  );
}

export default Workspace;
