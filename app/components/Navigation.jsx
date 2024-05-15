"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import logo from "@/public/logo.png";
import Link from "next/link";
import { useWidth } from "../utils/useWidth";

const Navigation = () => {
  const [isSecondScreen, setIsSecondScreen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const width = useWidth();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.pageYOffset;
      const screenHeight = window.innerHeight;
      const secondScreenPosition = screenHeight; // Adjust this value as needed

      if (scrollPosition >= secondScreenPosition) {
        setIsSecondScreen(true);
      } else {
        setIsSecondScreen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="bg-[#ffffff7e] w-screen flex  md:flex-row items-center justify-between px-14 py-4 fixed top-0 z-30">
      <div>
        <Image src={logo} alt="logo" className="max-w-32" />
      </div>

      {width > 840 ? (
        <>
          <div className="flex flex-wrap flex-row">
            <ul
              className={`flex justify-center space-x-8 ${
                isSecondScreen ? "text-black" : "text-white"
              }`}
            >
              <li className="cursor-pointer">
                <Link href="#" className="">
                  HOME
                </Link>
              </li>

              <li className="cursor-pointer">
                <Link href="#" className="">
                  <div className="flex items-center">
                    <p>ABOUT</p>
                    <svg
                      className="w-2.5 h-2.5 ms-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 10 6"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 1 4 4 4-4"
                      />
                    </svg>
                  </div>
                </Link>
              </li>

              <li className="cursor-pointer">
                <Link href="#" className="">
                  <div className="flex items-center">
                    <p>SERVICES</p>
                    <svg
                      className="w-2.5 h-2.5 ms-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 10 6"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 1 4 4 4-4"
                      />
                    </svg>
                  </div>
                </Link>
              </li>

              <li className="cursor-pointer">
                <Link href="#" className="">
                  <div className="flex items-center">
                    <p>INDUSTRIES</p>
                    <svg
                      className="w-2.5 h-2.5 ms-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 10 6"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 1 4 4 4-4"
                      />
                    </svg>
                  </div>
                </Link>
              </li>

              <li className="cursor-pointer">
                <Link href="#" className="">
                  CONTACT
                </Link>
              </li>
            </ul>
          </div>
        </>
      ) : (
        <>
          <div className="flex items-center justify-end lg:hidden">
            <button
              className="text-white focus:outline-none"
              onClick={() => toggleMenu()}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>

            {isOpen && (
              <div className="fixed top-0 right-0 h-screen w-screen bg-[#3f3f3f69] backdrop-blur-lg flex items-center justify-center z-50">
                <p
                  className="absolute top-0 right-0 text-3xl p-8 cursor-pointer hover:opacity-50"
                  onClick={() => setIsOpen(false)}
                >
                  X
                </p>
                <ul className="flex flex-col text-white text-2xl">
                  <li className="my-4 hover:opacity-50">
                    <a href="/">Home</a>
                  </li>
                  <li className="my-4 hover:opacity-50">
                    <a href="/about">About</a>
                  </li>
                  <li className="my-4 hover:opacity-50">
                    <a href="/services">Services</a>
                  </li>
                  <li className="my-4 hover:opacity-50">
                    <a href="/contact">Contact</a>
                  </li>
                  {/* Add more menu items as needed */}
                </ul>
              </div>
            )}
          </div>
        </>
      )}

      {/* Desktop View */}
    </div>
  );
};

export default Navigation;
