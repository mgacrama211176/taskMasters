import Link from "next/link";
import React from "react";

interface MainButtonLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

const MainButtonLink = ({
  href,
  children,
  className = "",
}: MainButtonLinkProps) => {
  return (
    <Link
      href={href}
      className={`bg-[#1A80E5] text-white px-4 py-4 rounded-2xl font-bold hover:scale-105 transition-all duration-300 ${className}`}
    >
      {children}
    </Link>
  );
};

export default MainButtonLink;
