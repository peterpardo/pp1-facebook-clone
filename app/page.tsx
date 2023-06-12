"use client";

import { redirect, useRouter } from "next/navigation";

import Nav from "@/components/Nav";
import { useEffect, useState } from "react";

export default function Home() {
  const isLoggedIn = true;

  if (!isLoggedIn) redirect("/login");

  return <main>{!isLoggedIn ? <p>Loading...</p> : <Nav />}</main>;
}
