import Image from "next/image";
import Link from "next/link";
import React from "react";

export const SocialMediaLink = () => {
  return (
    <div className="max-w-screen-2xl mx-auto px-10 mb-20">
      <div className="mb-2 text-xl font-bold">
        Visit us on our social media platforms:
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4">
        <Link
          href="https://www.facebook.com/IKSmedia.MoE"
          className="hover:scale-105"
        >
          <div className="col-span-1 font-bold p-4">
            <div className="flex items-center gap-1">
              <Image
                src="/social_icons/fb.svg"
                width={30}
                height={30}
                alt="fb"
              />
              <div>Facebook</div>
            </div>
          </div>
        </Link>
        <Link href="https://x.com/IKS_Media" className="hover:scale-105 transition-all">
          <div className="col-span-1 font-bold p-4">
            <div className="flex items-center gap-1">
              <Image
                src="/social_icons/x.svg"
                width={30}
                height={30}
                alt="fb"
              />
              <div>Twitter</div>
            </div>
          </div>
        </Link>
        <Link
          href="https://www.youtube.com/@IKS_Media_MoE"
          className="hover:scale-105"
        >
          <div className="col-span-1 font-bold p-4">
            <div className="flex items-center gap-1">
              <Image
                src="/social_icons/yt.svg"
                width={30}
                height={30}
                alt="fb"
              />
              <div>YouTube</div>
            </div>
          </div>
        </Link>
        <Link
          href="https://www.instagram.com/iks_media.moe"
          className="hover:scale-105"
        >
          <div className="col-span-1 font-bold p-4">
            <div className="flex items-center gap-1">
              <Image
                src="/social_icons/ig.svg"
                width={30}
                height={30}
                alt="fb"
              />
              <div>Instagram</div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};
