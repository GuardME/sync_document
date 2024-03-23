"use client";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  LogoutLink,
  useKindeBrowserClient,
} from "@kinde-oss/kinde-auth-nextjs";
import { useConvex, useMutation, useQuery } from "convex/react";
import { api } from "../../../../convex/_generated/api";
import Header from "../dashboard/_components/Header";
import FileList from "../dashboard/_components/FileList"

function Dashboard() {
  const { user }: any = useKindeBrowserClient();
  const convex = useConvex();
  const createUser = useMutation(api.user.createUser);
  const [isCreatingUser, setIsCreatingUser] = useState(false);

  const checkUser = async () => {
    if (isCreatingUser) {
      return;
    }
    const result = await convex.query(api.user.getUser, { email: user?.email });

    if (!result?.length) {
      setIsCreatingUser(true);
      createUser({
        name: user.given_name,
        email: user.email,
        image: user.picture,
      }).then((resp) => {
        console.log(resp);
        setIsCreatingUser(false);
      });
    }
  };
  useEffect(() => {
    if (user) {
      checkUser();
    }
  }, [user]);

  return (
    <>
      <div className='p-8'>
        <Header />

        <FileList />
      </div>
    </>
  );
}

export default Dashboard;
