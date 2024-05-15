import React from "react";
import Navigation from "./components/Navigation";
import Image from "next/image";
import logo from "@/public/logo.png";

const page = () => {
  return (
    <div className="relative">
      <div>
        <Navigation />
      </div>
    </div>
  );
};

export default page;
