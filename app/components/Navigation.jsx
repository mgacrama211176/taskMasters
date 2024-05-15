import React from "react";
import Image from "next/image";
import logo from "@/public/logo.png";

const Navigation = () => {
  return (
    <div className="bg-[#969696] w-screen flex flex-row items-center justify-between px-14 py-4">
      <div>
        <Image src={logo} alt="logo" width={150} height={150} />
      </div>
      <div className="flex">
        <ul className="flex justify-center space-x-4">
          <li>
            <a href="#" className="text-white">
              HOME
            </a>
          </li>
          <li>
            <a href="#" className="text-white">
              ABOUT
            </a>
          </li>
          <li>
            <a href="#" className="text-white">
              CONTACT
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
