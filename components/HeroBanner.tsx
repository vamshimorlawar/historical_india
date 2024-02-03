import React from "react";

const HeroBanner = () => {
  return (
    <div>
      <div className="flex items-center justify-center flex-col w-100 h-[500px]">
        <div className="text-center text-3xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1] hidden md:block">
          Welcome to Historical India !
        </div>
        <span className="max-w-[700px] text-center text-lg text-muted-foreground mt-2 sm:text-xl">
          Contribute to open source community project and help create
          encyclopedia of the Indian history.
        </span>
      </div>
    </div>
  );
};

export default HeroBanner;
