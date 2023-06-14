"use client";

import { redirect } from "next/navigation";

import Nav from "@/components/Nav";
import { useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();

  if (!session) redirect("/login");

  return (
    <main>
      <Nav />
    </main>
  );
}
