"use client";
import { Button } from "@/components/ui/button";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { ModeToggle } from "./ModeToggle";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { PenIcon, Rocket } from "lucide-react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { UserNav } from "./UserNav";

const Navbar = () => {
  const { data: session } = useSession();
  const user = {...session?.user}
  const pathname = usePathname();
  return (
    <div className="p-4 sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex flex-wrap gap-2 items-center justify-between max-w-screen-2xl mx-auto">
        <nav className="flex flex-wrap items-center gap-6 text-sm">
          <Link href="/" className="font-bold flex gap-2 items-center">
            Historical India
          </Link>

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
        </nav>
        {!session ? (
          <>
            <div className="flex gap-4 items-center flex-wrap text-sm">
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
              <Link
                href="/sign-up"
                className={cn(
                  "transition-colors hover:text-foreground/80",
                  pathname?.startsWith("/sign-up")
                    ? "text-foreground"
                    : "text-foreground/60"
                )}
              >
                Signup
              </Link>
              <ModeToggle />
            </div>
          </>
        ) : (
          <div className="flex items-center gap-6">
            <UserNav {...user}/>
            <ModeToggle />
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
