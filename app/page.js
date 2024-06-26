import React from "react";
import Navigation from "./components/Navigation";
import Image from "next/image";
import logo from "@/public/logo.png";
import Hero from "./components/Hero";
import Services from "./components/Services";

const page = () => {
  return (
    <div>
      <div>
        <Navigation />
      </div>
      <div>
        <Hero />
      </div>
      <div>
        <Services />
      </div>
    </div>
  );
};

export default page;
