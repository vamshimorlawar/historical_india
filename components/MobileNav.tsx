"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MenuIcon } from "lucide-react";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import { redirect, usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { UserNav } from "./UserNav";
import { ModeToggle } from "./ModeToggle";

const MobileNav = () => {
  const { data: session } = useSession();
  const user = { ...session?.user };
  const router = useRouter();
  const pathname = usePathname();
  return (
    <div className="p-4 sticky top-0 z-50 flex justify-between w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 md:hidden">
      <div className="flex gap-4">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">
              {" "}
              <MenuIcon />{" "}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56" align="start">
            <DropdownMenuGroup>
              <DropdownMenuItem
                onClick={() => {
                  router.push("/");
                }}
              >
                Home
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => {
                  router.push("/create-article");
                }}
              >
                Create Article
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => {
                  router.push("/search");
                }}
              >
                Search
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => {
                  router.push("/library");
                }}
              >
                Library
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => {
                  router.push("/about");
                }}
              >
                About
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            {!session ? (
              <DropdownMenuGroup>
                <DropdownMenuItem
                  onClick={() => {
                    router.push("/login");
                  }}
                >
                  Login
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => {
                    router.push("/register");
                  }}
                >
                  Register
                </DropdownMenuItem>
              </DropdownMenuGroup>
            ) : (
              <DropdownMenuGroup>
                <DropdownMenuItem
                  onClick={() => {
                    router.push(`/profile/${user.id}`);
                  }}
                >
                  Profile
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  onClick={() => {
                    signOut();
                  }}
                  className="text-muted-foreground"
                >
                  Log out
                </DropdownMenuItem>
              </DropdownMenuGroup>
            )}
          </DropdownMenuContent>
        </DropdownMenu>
        <Link href="/" className="font-bold flex gap-2 items-center">
          Historical India
        </Link>
      </div>
      <div>
        <ModeToggle />
      </div>
    </div>
  );
};

export default MobileNav;
