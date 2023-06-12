"use client";

import { useRouter } from "next/navigation";

import Nav from "@/components/Nav";
import { useEffect, useState } from "react";

export default function Home() {
  const router = useRouter();
  const isLoggedIn = false;

  useEffect(() => {
    if (!isLoggedIn) {
      router.push("/login");
    }
  }, []);

  return <main>{!isLoggedIn ? <p>Loading...</p> : <Nav />}</main>;
}
