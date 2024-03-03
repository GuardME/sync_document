"use client";

import { Button } from "@/components/ui/button";
import Header from "@/app/_components/header";
import Hero from "@/app/_components/hero";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { useEffect } from "react";

export default function Home() {
  const { user } = useKindeBrowserClient();

  useEffect(() => {
    console.log("--", user);
  }, [user]);

  return (
    <div>
      <Header />
      <Hero />
    </div>
  );
}
