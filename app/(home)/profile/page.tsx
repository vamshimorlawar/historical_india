"use client";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

const ProfilePage = () => {
  const { data: session } = useSession();
  if (!session) {
    redirect("/");
  }
  return (
    <div className="flex mt-20 ml-20">
      <div className="flex justify-center flex-col">
        <div>
          <div>Name: Vamshikiran</div>
          <div>Email: vamshimorlawar@gmail.com</div>
        </div>
        <div className="mt-4">Mudras: 2038</div>
        <div className="mt-4">
          <div>Article Stats</div>
          <div>
            <div>Created: 20</div>
            <div>Edited: 73</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
