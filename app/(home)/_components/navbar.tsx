"use client";
import { Button } from "@/components/ui/button";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

const Navbar = () => {
  const { data: session } = useSession();
  return (
    <div className="flex items-center justify-between p-4 bg-orange-500 text-neutral-800 w-full">
      <div className="flex gap-4">
        <Link href="/">Home</Link>
        <Link href="/create-article">Create Article</Link>
        <Link href="/search">Search</Link>
        <Link href="/about">About</Link>
      </div>
      {!session ? (
        <>
          <div className="flex gap-4">
            <Link href="/login">Login</Link>
            <Link href="/sign-up">Signup</Link>
          </div>
        </>
      ) : (
        <>
           <div className="flex gap-4 items-center">
            <Link href="/profile">Profile</Link>
            <Button onClick={()=>{
              signOut();
            }}>Logout</Button>
          </div>
        </>
      )}
    </div>
  );
};

export default Navbar;
