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
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { UserNav } from "./UserNav";
import { ModeToggle } from "./ModeToggle";

const MobileNav = () => {
  const { data: session } = useSession();
  const user = { ...session?.user };
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
        <DropdownMenuContent className="w-56 ml-4">
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <Link href="/" className="text-muted-foreground">Home</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link
                href="/create-article"
                className={cn(
                  "transition-colors hover:text-foreground/80",
                  pathname?.startsWith("/create-article")
                    ? "text-foreground"
                    : "text-foreground/60"
                )}
              >
                Create Article
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              {" "}
              <Link
                href="/search"
                className={cn(
                  "transition-colors hover:text-foreground/80",
                  pathname?.startsWith("/search")
                    ? "text-foreground"
                    : "text-foreground/60"
                )}
              >
                Search
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              {" "}
              <Link
                href="/library"
                className={cn(
                  "transition-colors hover:text-foreground/80",
                  pathname?.startsWith("/library")
                    ? "text-foreground"
                    : "text-foreground/60"
                )}
              >
                Library
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              {" "}
              <Link
                href="/about"
                className={cn(
                  "transition-colors hover:text-foreground/80",
                  pathname?.startsWith("/about")
                    ? "text-foreground"
                    : "text-foreground/60"
                )}
              >
                About
              </Link>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator/>
          {!session ? (
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <Link
                  href="/login"
                  className={cn(
                    "transition-colors hover:text-foreground/80",
                    pathname?.startsWith("/login")
                      ? "text-foreground"
                      : "text-foreground/60"
                  )}
                >
                  Login
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link
                  href="/register"
                  className={cn(
                    "transition-colors hover:text-foreground/80",
                    pathname?.startsWith("/register")
                      ? "text-foreground"
                      : "text-foreground/60"
                  )}
                >
                  Register
                </Link>
              </DropdownMenuItem>
            </DropdownMenuGroup>
          ) : (
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <Link
                  href={`/profile/${user.id}`}
                  className={cn(
                    "transition-colors hover:text-foreground/80",
                    pathname?.startsWith("/profile")
                      ? "text-foreground"
                      : "text-foreground/60"
                  )}
                >
                  Profile
                </Link>
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
      <ModeToggle/>
      </div>
    </div>
  );
};

export default MobileNav;
