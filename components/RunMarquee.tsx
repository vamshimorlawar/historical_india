import React from "react";
import Marquee from "react-fast-marquee";

export const RunMarquee = () => {
  return (
    <div>
      <Marquee pauseOnHover={true} className="bg-orange-400 text-white p-2">
        Why Yakshaprashna? Explore insightful questions and answers across
        diverse topics. Join Yakshaprashna to engage, learn, and share knowledge
        in a community of curious minds!
      </Marquee>
    </div>
  );
};
