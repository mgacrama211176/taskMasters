import React from "react";
import Image from "next/image";
import logo from "@/public/logo.png";
import Link from "next/link";

const Navigation = () => {
  return (
    <div className="bg-[#ffffff7e] w-screen flex flex-row items-center justify-between px-14 py-4 fixed top-0 z-20">
      <div>
        <Image src={logo} alt="logo" width={150} height={150} />
      </div>
      <div className="flex">
        <ul className="flex justify-center space-x-4">
          <li className="cursor-pointer">
            <Link href="#" className="text-white ">
              HOME
            </Link>
          </li>
          <li className="cursor-pointer">
            <Link href="#" className="text-white ">
              ABOUT
            </Link>
          </li>
          <li className="cursor-pointer">
            <Link href="#" className="text-white">
              CONTACT
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
