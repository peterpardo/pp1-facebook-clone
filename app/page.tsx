"use client";

import { redirect } from "next/navigation";

import Nav from "@/components/Nav";
import { useSession } from "next-auth/react";
import Feed from "@/components/Feed";

export default function Home() {
  const { data: session } = useSession();

  if (!session) redirect("/login");

  return (
    <main className="bg-gray-100 h-screen">
      <Nav />
      <Feed />
    </main>
  );
}
