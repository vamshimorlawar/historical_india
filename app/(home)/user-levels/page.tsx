import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const UserLevels = () => {
  const levels = [
    {
      level: 0,
      title: "Amateur",
      tagline: "Getting comfortable",
      criteria: [
        { label: "Article edits", value: "2" },
        { label: "Account age", value: "1 Day" },
        { label: "Mudra", value: "110" },
      ],
    },
    {
      level: 1,
      title: "Learner",
      tagline: "Learning",
      criteria: [
        { label: "Article edits", value: "10" },
        { label: "Article created", value: "2" },
        { label: "Questions asked", value: "2" },
        { label: "Questions answered", value: "2" },
        { label: "Account age", value: "3 Days" },
        { label: "Mudra", value: "150" },
      ],
    },
    {
      level: 2,
      title: "Editor",
      tagline: "Focus: Editing articles",
      criteria: [
        { label: "Article edits", value: "100" },
        { label: "Article discussion comments", value: "5" },
        { label: "Articles created", value: "10" },
        { label: "Questions asked", value: "10" },
        { label: "Questions answered", value: "10" },
        { label: "Account age", value: "10 days" },
        { label: "Mudra", value: "650" },
      ],
      additionalPrivilege: "Can add articles and users to watchlist",
    },
    {
      level: 3,
      title: "Author",
      tagline: "Focus: Creating articles",
      criteria: [
        { label: "Article edits", value: "200" },
        { label: "Article discussion comments", value: "10" },
        { label: "Articles created", value: "30" },
        { label: "Article flags added", value: "10" },
        { label: "Questions asked", value: "20" },
        { label: "Questions answered", value: "20" },
        { label: "Account age", value: "30 days" },
        { label: "Mudra", value: "1300" },
      ],
    },
    {
      level: 4,
      title: "Contributor",
      tagline: "Focus: Maintaining articles",
      criteria: [
        { label: "Article edits", value: "300" },
        { label: "Article discussion comments", value: "25" },
        { label: "Article flags added", value: "100" },
        { label: "User flags added", value: "10" },
        { label: "Articles created", value: "40" },
        { label: "Questions asked", value: "30" },
        { label: "Questions answered", value: "30" },
        { label: "Account age", value: "60 days" },
        { label: "Mudra", value: "2000" },
      ],
    },
    {
      level: 5,
      title: "Reviewer",
      tagline: "Focus: User behavior",
      criteria: [
        { label: "Article edits", value: "500" },
        { label: "Article discussion comments", value: "50" },
        { label: "Article flags added", value: "150" },
        { label: "User flags added", value: "100" },
        { label: "Articles created", value: "50" },
        { label: "Articles moderated", value: "20" },
        { label: "Questions moderated", value: "20" },
        { label: "Questions asked", value: "40" },
        { label: "Questions answered", value: "40" },
        { label: "Account age", value: "100 days" },
        { label: "Mudra", value: "3000" },
      ],
    },

    {
      level: 6,
      title: "Expert",
      tagline: "Focus: Maintaining the site",
      criteria: [
        { label: "Article edits", value: "1000" },
        { label: "Article discussion comments", value: "100" },
        { label: "Article flags added", value: "500" },
        { label: "User flags added", value: "500" },
        { label: "Articles created", value: "100" },
        { label: "Articles moderated", value: "100" },
        { label: "Questions moderated", value: "100" },
        { label: "Questions asked", value: "100" },
        { label: "Questions answered", value: "100" },
        { label: "Account age", value: "200 days" },
        { label: "Mudra", value: "6000" },
      ],
    },
    {
      level: 7,
      title: "Pioneer",
      tagline: "Focus: Maintaining the site",
      criteria: [
        { label: "Article edits", value: "2000" },
        { label: "Article discussion comments", value: "200" },
        { label: "Article flags added", value: "1000" },
        { label: "User flags added", value: "1000" },
        { label: "Articles created", value: "200" },
        { label: "Articles moderated", value: "500" },
        { label: "Questions moderated", value: "500" },
        { label: "Questions asked", value: "150" },
        { label: "Questions answered", value: "150" },
        { label: "Account age", value: "365 days" },
        { label: "Mudra", value: "12000" },
      ],
    },
  ];
  return (
    <div className="max-w-screen-2xl mx-auto px-10 mb-20">
      <div className="mt-10">
        <div className="text-2xl font-bold">User Levels</div>
      </div>
      <Accordion type="single" collapsible className="mt-4 max-w-screen-sm">
        {levels.map((level, index) => {
          return (
            <AccordionItem value={index.toString()} key={index}>
              <AccordionTrigger className="">
                <div className="text-sm">{level.title}</div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="">{level.tagline}</div>
                <ul className="mt-2 text-muted-foreground">
                  {level.criteria.map((criterion, cindex) => {
                    return (
                      <li key={cindex}>
                        {criterion.label} : {criterion.value}
                      </li>
                    );
                  })}
                </ul>
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </div>
  );
};

export default UserLevels;
