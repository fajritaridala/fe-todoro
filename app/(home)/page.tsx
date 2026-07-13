"use client";

import Link from "next/link";
import { Button } from "@/src/components/ui/button";
import Oauth from "@/src/lib/supabase/oauth";

export default function Home() {
  return (
    <>
      <Link href="/login">Login</Link>
      <Button onClick={Oauth.signOut}>logout</Button>
    </>
  );
}
