"use client";
import { Skeleton } from "@/components/ui/skeleton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import Overview from "../_components/Overview";
import ArticleActivity from "../_components/ArticleActivity";

const ProfilePage = ({ params }: { params: { userId: string } }) => {
  const { data: session } = useSession();
  if (!session) {
    redirect("/");
  }

  const [userData, setUserData] = useState<any>();
  const [createdArticles, setCreatedArticles] = useState([]);
  const [editedArticles, setEditedArticles] = useState([]);

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

    const fetchArticleActivity = async () => {
      try {
        const response = await fetch(
          `/api/getUserHistory?userId=${params.userId}`
        );
        const data = await response.json();
        setCreatedArticles(data.createdArticles.reverse());
        setEditedArticles(data.editedArticles.reverse());        
      } catch (error) {
        // it is created when article is created;
        console.log("Error fetching article activity", error);
      }
    };
    fetchArticleActivity();
  }, []);

  return (
    <div className="flex-1 space-y-4 p-8 pt-6 max-w-screen-2xl mx-auto">
      <div className="flex items-center justify-between space-y-2">
        {userData?.user.firstName ? (
          <h2 className="text-2xl font-bold tracking-tight">
            {userData?.user.firstName} {userData?.user.lastName}
          </h2>
        ) : (
          <Skeleton className="h-5 w-[120px]" />
        )}
      </div>
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="created">Articles Created</TabsTrigger>
          <TabsTrigger value="edited">Articles Edited</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="space-y-4">
          <Overview {...userData?.userStats} />
        </TabsContent>
        <TabsContent value="created" className="space-y-4">
          <ArticleActivity articles={createdArticles} type={"Created"}/>
        </TabsContent>
        <TabsContent value="edited" className="space-y-4">
          <ArticleActivity articles={editedArticles} type={"Edited"}/>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ProfilePage;
