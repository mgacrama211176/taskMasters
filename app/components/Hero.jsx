import React from "react";
import logo from "@/public/logo.png";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="h-screen relative flex flex-col gap-8">
      <div className="bg-[#000000be] opacity-60 h-full w-full absolute top-0 left-0 z-10" />
      <video
        src="/gaming.webm"
        autoPlay
        loop
        muted
        className="w-full h-full object-cover absolute top-0 left-0 z-0"
      />
      <div className="z-20 flex flex-col justify-center items-center h-full absolute top-0 left-0 w-full text-white">
        <h1 className="text-5xl text-center md:text-6xl">
          Streamline Your Success with Our Expert Virtual Assistants
        </h1>
        {/* <h1 className="text-7xl font-light ">The Task Masters</h1>
        <p className="text-2xl mt-10">Built by the Virtual Workforce</p>
        <p className="text-2xl">For the Virtual Workforce</p> */}
        <div className="mt-10 z-30">
          <button className="bg-transparent border-white border text-white hover:bg-white hover:text-black px-12 py-4 rounded-lg font-bold text-xl transition-all ease-in-out duration-300">
            Learn more
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
