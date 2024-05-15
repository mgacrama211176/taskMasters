import React from "react";
import Navigation from "./components/Navigation";
import Image from "next/image";
import logo from "@/public/logo.png";
import Hero from "./Hero";

const page = () => {
  return (
    <div className="relative">
      <div>
        <Navigation />
      </div>
      <div>
        <Hero />
      </div>
    </div>
  );
};

export default page;
