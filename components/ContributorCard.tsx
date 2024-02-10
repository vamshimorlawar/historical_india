import Link from "next/link";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

interface Contributor {
  _id: string;
  firstName: string;
  lastName: string;
  points: number;
  email: string;
  // Add other properties as needed
}

interface ContributorCardProps {
  contributors: Contributor[];
  sectionTitle: string;
}

const ContibutorCard: React.FC<ContributorCardProps> = ({
  contributors,
  sectionTitle,
}) => {
  return (
    <div className="max-w-screen-2xl mx-auto px-10 mb-20">
      <div className="mt-10">
        <div className="text-2xl font-bold">{sectionTitle}</div>
      </div>
      <div className="mt-6">
        {contributors.length === 0 ? (
          <div>No {sectionTitle}</div>
        ) : (
          contributors.map((contributor) => (
            <div
              key={contributor._id}
              className="transition hover:ease-in p-4 border border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 hover:shadow-lg hover:shadow-foreground/40"
            >
              <Link href="#">
                <div className="flex items-center gap-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-bold">{contributor.email}</div>
                    <div className="text-muted-foreground">
                      <div>
                        {contributor.firstName} {contributor.lastName}
                      </div>
                      <div>Points: {contributor.points}</div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ContibutorCard;
