import Link from "next/link";
import React from "react";

interface Contributor {
  _id: string;
  firstName: string;
  points: number;
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
    <div>
      <div>
        <div className="font-medium text-xl">{sectionTitle}</div>
        <div className="flex mt-2 gap-2">
          {contributors.length === 0 ? (
            <div>No {sectionTitle}</div>
          ) : (
            contributors.map((contributor) => (
              <Link
                href={`/profile/${contributor._id}`}
                key={contributor._id}
                className="p-5 border-gray-600 border-2 rounded-sm"
              >
                {contributor.firstName}, {contributor.points}
              </Link>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default ContibutorCard;
