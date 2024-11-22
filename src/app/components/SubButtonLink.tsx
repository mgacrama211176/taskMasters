import Link from "next/link";
import React from "react";

const SubButtonLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  return (
    <Link
      href={href}
      className=" text-black-500 px-4 py-4 rounded-2xl border-2 border-black hover:scale-105 transition-all duration-300"
    >
      {children}
    </Link>
  );
};

export default SubButtonLink;
