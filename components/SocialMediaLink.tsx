import Link from "next/link";
import React from "react";

export const SocialMediaLink = () => {
  return (
    <div className="px-24 py-20">
      <div className="mb-4 text-xl font-bold">
        Visit us on our social media platforms:
      </div>
      <div className="grid grid-cols-4">
        <Link href="https://www.facebook.com/IKSmedia.MoE" className="hover:scale-105">
          <div className="col-span-1 bg-blue-600 text-white font-bold p-10">Facebook</div>
        </Link>
        <Link href="https://x.com/IKS_Media" className="hover:scale-105">
          <div className="col-span-1 bg-black text-white font-bold p-10">Twitter / X</div>
        </Link>
        <Link href="https://www.youtube.com/@IKS_Media_MoE" className="hover:scale-105">
          <div className="col-span-1 bg-red-600 font-bold text-white p-10">YouTube</div>
        </Link>
        <Link href="https://www.instagram.com/iks_media.moe" className="hover:scale-105">
          <div className="col-span-1 bg-fuchsia-600 text-white font-bold p-10">Instagram</div>
        </Link>
      </div>
    </div>
  );
};
