import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

const HeroBanner = () => {
  return (
    <div>
      <div className="mx-auto flex max-w-[980px] flex-col items-center justify-center gap-2 py-8 md:py-12 md:pb-8 lg:py-24 lg:pb-20">
        <div className="text-center text-3xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1] hidden md:block">
          Welcome to Yaksha Prashna !
        </div>
        <div className="text-center text-3xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1] md:hidden">
          Welcome!
        </div>
        <span className="max-w-[300px] md:max-w-[700px] text-center text-md text-muted-foreground mt-2 md:text-xl">
          Contribute to open source community project and help create
          encyclopedia of the Indian history.
        </span>
        <div className="flex flex-wrap gap-8 mt-4">
          <Link href="/create-article">
            <Button>Get Started</Button>
          </Link>
          <Link href="/about">
            <Button variant="outline">Learn More</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
