import React, { useEffect, useState } from "react";
import Image from "next/image";
import {
  ChevronDown,
  LayoutGrid,
  Flag,
  Settings,
  Users,
  LogOut,
} from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs";
import { useConvex } from "convex/react";
import { useRouter } from "next/navigation";
import { api } from "../../../../../convex/_generated/api";

export interface TEAM {
  createdBy: String;
  teamName: String;
  _id: String;
}

function SideNavTopSection({ user, setActiveTeamInfo }: any) {
  const menu = [
    {
      id: 1,
      name: "Create Team",
      path: "/teams/create",
      icon: Users,
    },
    {
      id: 2,
      name: "Settings",
      path: "",
      icon: Settings,
    },
  ];
  const router = useRouter();
  const convex = useConvex();
  const [activeTeam, setActiveTeam] = useState<TEAM>();
  const [teamList, setTeamList] = useState<TEAM[]>();

  useEffect(() => {
    user && getTeamList();
  }, [user]);

  useEffect(() => {
    activeTeam ? setActiveTeamInfo(activeTeam) : null;
  }, [activeTeam]);

  const getTeamList = async () => {
    const result = await convex.query(api.teams.getTeam, {
      email: user?.email,
    });
    setTeamList(result);
    setActiveTeam(result[0]);
  };

  const onMenuClick = (item: any) => {
    if (item.path) {
      router.push(item.path);
    }
  };

  return (
    <div>
      <Popover>
        <PopoverTrigger>
          <div className="flex items-center gap-3 hover:bg-slate-200 p-3 rounded-lg cursor-pointer">
            <Image src="/logo.png" alt="logo" width={30} height={30} />
            <h5 className="flex gap-2 items-center font-bold text-[17px]">
              Sync Document
              <ChevronDown />
            </h5>
          </div>
        </PopoverTrigger>
        <PopoverContent className="ml-7 p-4">
          {/* Team Section */}
          <div>
            {teamList?.map((team, index) => (
              <h2
                key={index}
                className={`p-2 hover:bg-blue-500 hover:text-white rounded-lg mb-1 cursor-pointer    ${
                  activeTeam?._id == team._id && "bg-blue-500 text-white"
                }`}
                onClick={() => setActiveTeam(team)}
              >
                {team.teamName}
              </h2>
            ))}
          </div>
          <Separator className="mt-2" />
          <div>
            {menu.map((item, index) => (
              <h2
                className="flex gap-2 items-center p-2 hover:bg-gray-100 rounded-lg cursor-pointer"
                onClick={() => onMenuClick(item)}
              >
                <item.icon size={20} />
                <span>{item.name}</span>
              </h2>
            ))}
            <Separator className="mt-2 bg-slate-100" />
            <LogoutLink>
              <h2 className="flex gap-2 items-center p-2 hover:bg-gray-100 rounded-lg cursor-pointer">
                <LogOut className="h-4 w-4" />
                Logout
              </h2>
            </LogoutLink>
            <Separator className="mt-2 bg-slate-100" />
            {/* User Info Sections */}
            {user && (
              <div className="mt-2 flex gap-2 items-center">
                <Image
                  src={user?.picture}
                  alt="user"
                  width={30}
                  height={30}
                  className="rounded-full"
                />
                <div>
                  <h2 className="text-[14px] font-bold">
                    {user?.given_name} {user?.family_name}
                  </h2>
                  <h2 className="text-[12px] text-gray-500">{user?.email}</h2>
                </div>
              </div>
            )}
          </div>
        </PopoverContent>
      </Popover>

      {/* All File Button */}
      <Button
        variant="outline"
        className="w-full justify-start gap-2 font-bold mt-8 bg-gray-100"
      >
        <LayoutGrid size={20} className="mr-2 h-5 w-5" />
        All Files
      </Button>
    </div>
  );
}

export default SideNavTopSection;
