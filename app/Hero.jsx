import React from "react";

const Hero = () => {
  return (
    <div className="h-screen relative">
      <div className="bg-[#1d1d1dbe] opacity-60 h-full w-full absolute top-0 left-0 z-10" />
      <video
        src="/gaming.webm"
        autoPlay
        loop
        muted
        className="w-full h-full object-cover absolute top-0 left-0 z-0"
      />
    </div>
  );
};

export default Hero;
