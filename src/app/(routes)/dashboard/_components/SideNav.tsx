import React, { useState, useEffect, useContext } from "react";
import SideNavTopSection, { TEAM } from "./SideNavTopSection";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { useConvex, useMutation } from "convex/react";
import SideNavBottomSection from "./SideNavBottomSection";
import { api } from "../../../../../convex/_generated/api";
import { toast } from "sonner";
import { FileListContext } from '@/app/_context/FilesListContext'
function SideNav() {
  const convex = useConvex();
  const { user } = useKindeBrowserClient();
  const createFile = useMutation(api.files.createFile);
  const [activeTeam, setActiveTeam] = useState<TEAM | any>();
  const [totalFiles, setTotalFiles] = useState<Number>();
  const {fileList_,setFileList_}=useContext(FileListContext);


  useEffect(() => {
    activeTeam&&getFiles();
  }, [activeTeam]);
  const onFileCreate = (fileName: string) => {
    createFile({
      fileName: fileName,
      teamId: activeTeam?._id,
      createdBy: user?.email,
      archive: false,
      document: "",
      whiteboard: "",
    }).then(
      (res) => {
        if (res) {
          getFiles();
          toast("File Created Successfully");
        }
      },
      (e) => {
        toast("Error Creating File");
      }
    );
  };

  const getFiles = async () => {
    const result = await convex.query(api.files.getFiles, {
      teamId: activeTeam?._id,
    });
    console.log('result', result);
    setFileList_(result);
    setTotalFiles(result?.length);
  }
  return (
    <div
      className=" h-screen 
    fixed w-72 borde-r border-[1px] p-6
    flex flex-col"
    >
      <div className="flex-1">
        <SideNavTopSection
          user={user}
          setActiveTeamInfo={(activeTeam: TEAM) => setActiveTeam(activeTeam)}
        />
      </div>
      <div>
        <SideNavBottomSection totalFiles={totalFiles} onFileCreate={onFileCreate} />
      </div>
    </div>
  );
}

export default SideNav;
