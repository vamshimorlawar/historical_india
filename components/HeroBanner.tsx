import React from "react";

const HeroBanner = () => {
  return (
    <div>
      <div className="flex items-center justify-center flex-col w-100 h-[500px]">
        <div className="text-center text-xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1] md:block">
          Welcome to Historical India !
        </div>
        <span className="max-w-[500px] text-center text-md text-muted-foreground mt-2 md:text-xl">
          Contribute to open source community project and help create
          encyclopedia of the Indian history.
        </span>
      </div>
    </div>
  );
};

export default HeroBanner;
