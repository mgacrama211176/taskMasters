import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const MobileNavigation = ({
  isSecondScreen,
  isOpen,
  setIsOpen,
  toggleMenu,
}) => {
  return (
    <div className="flex items-center justify-end lg:hidden">
      <button
        className={`${
          isSecondScreen ? "text-black" : "text-white"
        } text-white focus:outline-none`}
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
        <motion.div
          className="fixed top-0 right-0 h-screen w-screen bg-[#3f3f3f69] backdrop-blur-lg flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
          exit={{ opacity: 0 }}
        >
          <p
            className="absolute top-0 right-0 text-3xl p-8 cursor-pointer hover:opacity-50 text-white"
            onClick={() => setIsOpen(false)}
          >
            X
          </p>
          <ul className="flex flex-col text-white text-2xl">
            <li className="my-4 hover:opacity-50">
              <Link href="/">Home</Link>
            </li>
            <li className="my-4 hover:opacity-50">
              <Link href="/about">About</Link>
            </li>
            <li className="my-4 hover:opacity-50">
              <Link href="/services">Services</Link>
            </li>
            <li className="my-4 hover:opacity-50">
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </motion.div>
      )}
    </div>
  );
};

export default MobileNavigation;
