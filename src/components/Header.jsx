"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { IoMenu } from "react-icons/io5";
import { IoCloseOutline } from "react-icons/io5";

const Header = () => {
  const links = [
    { name: "about", link: "/#about" },
    { name: "features", link: "/#features" },
    { name: "FAQ", link: "/#FAQ" },
    { name: "generate", link: "/generate" },
  ];
  const [open, setOpen] = useState(false);

  const pathName = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathName]);

  return (
    <header className="h-20 py-4 md:py-0 w-full fixed top-0 z-50  bg-gradient-to-t from-transparent to-black/60 backdrop-blur-sm ">
      <div className="flex items-center justify-between mx-12 lg:mx-24 h-full">
        <Link href={"/"} prefetch={false}>
          <h2 className="text-4xl lg:text-6xl font-extrabold select-none">
            IIPC
          </h2>
        </Link>
        <div className="relative">
          {!open ? (
            <IoMenu
              className="text-5xl block md:hidden cursor-pointer"
              onClick={() => setOpen(!open)}
            />
          ) : (
            <IoCloseOutline
              className="text-5xl block md:hidden cursor-pointer"
              onClick={() => setOpen(!open)}
            />
          )}

          <div
            className={`${
              open ? "flex" : "hidden"
            } md:flex items-center gap-6 text-xl absolute md:static top-12 right-8 rounded-s-lg rounded-ee-lg  flex-col md:flex-row justify-center w-48 py-12 md:w-full md:bg-transparent bg-black overflow-hidden select-none`}
          >
            {links.map((item) => (
              <Link key={item.name} href={item.link} className="text-text/60 capitalize">
                {item.name}
              </Link>
            ))}
            <Link href="/generate" className="button">Get for free</Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
