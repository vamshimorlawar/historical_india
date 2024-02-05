import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AwardIcon, Flag, PenIcon, PlusIcon } from "lucide-react";

interface OverviewProps  {
        points: number,
        articlesCreated: number,
        articlesEdited: number,
}

const Overview: React.FC<OverviewProps> = (userStats) => {
  return (
    <div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Mudras</CardTitle>
            <AwardIcon className="h-4 w-4" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {userStats.points}
            </div>
            <p className="text-xs text-muted-foreground">
              Contribute more to gain mudras
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Articles Created
            </CardTitle>
            <PlusIcon className="h-4 w-4" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {userStats.articlesCreated}
            </div>
            <p className="text-xs text-muted-foreground">
              We encourage you to create articles
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Articles Edited
            </CardTitle>
            <PenIcon className="h-4 w-4" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {userStats.articlesEdited}
            </div>
            <p className="text-xs text-muted-foreground">
              Edit articles to improve content
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Reports</CardTitle>
            <Flag className="h-4 w-4" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2</div>
            <p className="text-xs text-muted-foreground">
              Please follow the rules
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Overview;
