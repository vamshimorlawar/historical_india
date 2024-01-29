"use client";
import { Button } from "@/components/ui/button";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { ModeToggle } from "./ModeToggle";
import { Avatar, AvatarFallback } from "./ui/avatar";

const Navbar = () => {
  const { data: session } = useSession();
  return (
    <div className="p-4 w-full bg-orange-800">
      <div className="flex flex-wrap gap-2 items-center justify-between px-24">
        <div className="flex gap-4 flex-wrap text-white">
          <Link href="/">Home</Link>
          <Link href="/create-article">Create Article</Link>
          <Link href="/search">Search</Link>
          <Link href="/library">Library</Link>
          <Link href="/about">About</Link>
        </div>
        {!session ? (
          <>
            <div className="flex gap-4 items-center flex-wrap">
              <Link href="/login">Login</Link>
              <Link href="/sign-up">Signup</Link>
              <ModeToggle />
            </div>
          </>
        ) : (
          <>
            <div className="flex gap-4 items-center">
              <Link href={`/profile/${session.user?.id}`}>
                <Avatar>
                  <AvatarFallback>
                    {session.user?.email.charAt(0).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
              </Link>
              <Button
                onClick={() => {
                  signOut();
                }}
              >
                Logout
              </Button>
              <ModeToggle />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
