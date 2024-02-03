import React from "react";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import Link from "next/link";

const ExploreBanner = () => {
  return (
    <div className="px-24 py-20 ">
      <div className="flex flex-col justify-center items-center gap-2">
        <div className="text-3xl font-bold">Love Indian History?</div>
        <div className="text-center">
          Contribute to open source community project and help create
          encyclopedia of the Indian history.
        </div>
        <Separator className="my-4" />
        <div className="flex gap-10">
          <Link href="/library">
            <Button size="lg" className="font-bold p-8">Explore Articles</Button>
          </Link>
          <Link href="/create-article">
            <Button size="lg" className="font-bold p-8">Create New Article</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ExploreBanner;
