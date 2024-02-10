"use client";
import React, { useState } from "react";
import { Input } from "./ui/input";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "./ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const ArticleForm = () => {
  const router = useRouter();

  const articleCategories = [
    {
      value: "politics",
      label: "Politics",
    },
    {
      value: "empire",
      label: "Empire",
    },
    {
      value: "kingdom",
      label: "Kingdom",
    },
    {
      value: "arts",
      label: "Arts",
    },
    {
      value: "economy",
      label: "Economy",
    },
    {
      value: "event",
      label: "Event",
    },
    {
      value: "other",
      label: "Other",
    },
  ];

  const [value, setValue] = useState(""); //< category
  const [open, setOpen] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { data: session } = useSession();

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!session) {
      router.push("/login");
    } else {
      setLoading(true);
      const title = e.target[0].value;
      const tagline = e.target[1].value;
      const category = value;
      const email = session.user?.email;
      const tag_1 = e.target[3].value;
      const tag_2 = e.target[4].value;
      const tag_3 = e.target[5].value;

      const tags = [tag_1, tag_2, tag_3];

      // validation for article form data here;

      const articleData = {
        email,
        title,
        tagline,
        category,
        tags,
      };

      try {
        const response = await fetch("/api/createArticle", {
          method: "POST",
          headers: {
            ContentType: "application/json",
          },
          body: JSON.stringify(articleData),
        });
        const data = await response.json();
        if (response.status == 200) {
          router.push(`/article/edit/${data.articleId}`);
          toast.success("Success!", {
            position: "top-right",
          });
          setLoading(false);
        } else {
          setError("Error in Creating Article");
        }
      } catch (error) {
        setError("Internal Server Error");
      }
    }
  };

  return (
    <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
      <Input type="text" name="title" placeholder="Title" required />
      <Input type="text" name="tagline" placeholder="Tagline" required />
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="justify-between"
          >
            {value
              ? articleCategories.find((category) => category.value === value)
                  ?.label
              : "Select category..."}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="p-0">
          <Command>
            <CommandInput placeholder="Search category..." />
            <CommandEmpty>No categories found.</CommandEmpty>
            <CommandGroup>
              {articleCategories.map((category) => (
                <CommandItem
                  key={category.value}
                  value={category.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    setOpen(false);
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === category.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {category.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </Command>
        </PopoverContent>
      </Popover>
      <div className="text-xs text-muted-foreground mt-4">
        Please enter three tags relevant to your article &gt;
      </div>
      <div className="flex gap-2">
        <Input type="text" name="tag_1" placeholder="Tag 1" required />
        <Input type="text" name="tag_2" placeholder="Tag 2" required />
        <Input type="text" name="tag_3" placeholder="Tag 3" required />
      </div>
      <Button type="submit" disabled={loading}>
        {!loading ? "Create Article" : "Creating..."}
      </Button>
    </form>
  );
};

export default ArticleForm;
