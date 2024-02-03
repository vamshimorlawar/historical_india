"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AwardIcon, FactoryIcon, Flag, PenIcon, PlusIcon } from "lucide-react";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";

const ProfilePage = () => {
  const { data: session } = useSession();
  if (!session) {
    redirect("/");
  }
  const [userData, setUserData] = useState<any>();
  const email = session.user?.email;

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(`/api/getUserData?email=${email}`);
        const data = await response.json();
        setUserData(data);
      } catch (error) {
        console.log("Error fetching user data", error);
      }
    };
    fetchUserData();
  }, []);

  return (
    <div className="flex-1 space-y-4 p-8 pt-6 max-w-screen-2xl mx-auto">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-2xl font-bold tracking-tight">{userData?.user.firstName} {userData?.user.lastName}</h2>
      </div>
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="created" disabled>
            Articles Created
          </TabsTrigger>
          <TabsTrigger value="edited" disabled>
            Articles Edited
          </TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Mudras</CardTitle>
                <AwardIcon className="h-4 w-4" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {userData?.userStats.points}
                </div>
                <p className="text-xs text-muted-foreground">
                  +Contribute more to gain mudras
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
                  {userData?.userStats.articlesCreated}
                </div>
                <p className="text-xs text-muted-foreground">
                  +We encourage you to create articles
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
                  {userData?.userStats.articlesEdited}
                </div>
                <p className="text-xs text-muted-foreground">
                  +Edit articles to improve content
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Reports</CardTitle>
                <Flag className="h-4 w-4"/>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">2</div>
                <p className="text-xs text-muted-foreground">
                  +Please follow the rules
                </p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ProfilePage;
