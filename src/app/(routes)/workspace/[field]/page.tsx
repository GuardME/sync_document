import React from 'react'
import WorkSpaceHeader from "../_components/WorkspaceHeader"
import Editor from "../_components/Editor"

function Workspace() {
  return (
    <div>
        <WorkSpaceHeader />

        {/* WorkSpace Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2">
         {/* Document */}
         <div className="h-screen">
           <Editor className='p-5' />
         </div>
         {/* Whiteboard Canvas */}
         <div className="bg-red-500 h-screen">
            Canvas
         </div>
        </div>
    </div>
  )
}

export default Workspace