"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import logo from "@/public/logo.png";
import Link from "next/link";
import { useWidth } from "../utils/useWidth";
import MobileNavigation from "./MobileNavigation";

const Navigation = () => {
  const [isSecondScreen, setIsSecondScreen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isArrowUpAbout, setIsArrowUpAbout] = useState(false);
  const [isArrowUpServices, setIsArrowUpServices] = useState(false);
  const [isArrowUpIndustries, setIsArrowUpIndustries] = useState(false);
  const width = useWidth();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleArrowClick = (menuName) => {
    if (menuName === "ABOUT") {
      setIsArrowUpAbout(!isArrowUpAbout);
    } else if (menuName === "SERVICES") {
      setIsArrowUpServices(!isArrowUpServices);
    } else if (menuName === "INDUSTRIES") {
      setIsArrowUpIndustries(!isArrowUpIndustries);
    }
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

  const navigationMenuwithSub = [
    {
      name: "ABOUT",
      isArrowUp: isArrowUpAbout,
      subNavigation: [
        { title: "What defines us?", link: "#" },
        { title: "What do we stand for?", link: "#" },
        { title: "How it works", link: "#" },
      ],
    },
    {
      name: "SERVICES",
      isArrowUp: isArrowUpServices,
      subNavigation: [
        { title: "Customer Service - VA", link: "#" },
        { title: "Operations - VA", link: "#" },
        { title: "Sales - VA", link: "#" },
        { title: "Personal - VA", link: "#" },
      ],
    },
    {
      name: "INDUSTRIES",
      isArrowUp: isArrowUpIndustries,
      subNavigation: [
        { title: "Logistics and Transportation", link: "#" },
        { title: "Real Estate", link: "#" },
        { title: "Social Media Management", link: "#" },
        { title: "General", link: "#" },
      ],
    },
  ];

  return (
    <div className="bg-[#ffffff7e] w-screen flex  md:flex-row items-center justify-between px-14 py-4 fixed top-0 z-30">
      <div>
        <Image src={logo} alt="logo" className="max-w-32" />
      </div>

      {width > 840 ? (
        <div>
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

            {navigationMenuwithSub.map((menu) => (
              <li
                key={menu.name}
                className="cursor-pointer"
                onClick={() => handleArrowClick(menu.name)}
                onMouseEnter={() => handleArrowClick(menu.name)}
                onMouseLeave={() => handleArrowClick(menu.name)}
              >
                <div className="flex items-center">
                  <p>{menu.name}</p>
                  <svg
                    className={`w-2.5 h-2.5 ms-3 transition-transform transform ${
                      menu.isArrowUp ? "-rotate-180" : ""
                    }`}
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

                {menu.isArrowUp && (
                  <ul className="absolute bg-white text-black text-lg py-2 px-4 mt-2">
                    {menu.subNavigation.map((sub) => (
                      <li key={sub.title} className="cursor-pointer">
                        <Link href={sub.link}>{sub.title}</Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}

            <li className="cursor-pointer">
              <Link href="#" className="">
                CONTACT
              </Link>
            </li>
          </ul>
        </div>
      ) : (
        <MobileNavigation
          isSecondScreen={isSecondScreen}
          isOpen={isOpen}
          toggleMenu={toggleMenu}
          setIsOpen={setIsOpen}
        />
      )}

      {/* Desktop View */}
    </div>
  );
};

export default Navigation;
