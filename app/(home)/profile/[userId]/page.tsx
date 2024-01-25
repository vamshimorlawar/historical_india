"use client";
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

  if (!userData && session) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex justify-center flex-col items-center p-24">
      <div className="border-slate-200 rounded border-2 p-20">
        <div>Name: {userData?.user.firstName}</div>
        <div>Email: {userData?.user.email}</div>

        <div className="mt-4">Points: {userData?.userStats.points}</div>
        <div className="mt-4">
          <div>Article Stats</div>
          <div>
            <div>Created: {userData?.userStats.articlesCreated}</div>
            <div>Edited: {userData?.userStats.articlesEdited}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
