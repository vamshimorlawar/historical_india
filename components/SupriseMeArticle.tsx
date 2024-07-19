"use client";
import React, { startTransition, useState } from "react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

export const SupriseMeArticle = () => {
  const router = useRouter();
  const fetchData = () => {
    startTransition(() => {
      fetch("http://localhost:3000/api/getRandomArticle", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }).then((response) => {
        response.json().then((data) => {
          const article = data.article;
          router.push(`/article/view/${article._id}`);
        });
      });
    });
  };
  return (
    <div className="w-full flex justify-center p-6">
      <Button onClick={fetchData}>Suprise Me with an Article</Button>
    </div>
  );
};
