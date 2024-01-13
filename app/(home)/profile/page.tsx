"use client";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

const ProfilePage = () => {
  const { data: session } = useSession();
  if (!session) {
    redirect("/");
  }
  return (
    <div className="pt-20">
      {session?.user?.email}
      ProfilePage
    </div>
  );
};

export default ProfilePage;
