import Link from "next/link";
import React from "react";
import {
  AiFillBehanceCircle,
  AiFillGithub,
  AiFillLinkedin,
} from "react-icons/ai";

const Footer = () => {
  return (
    <div className="mb-4 flex flex-col items-center justify-center">
      <div className="border border-text/30 mb-4 w-full" />

      <div className="container">
        <div className="flex items-center justify-between flex-col md:flex-row gap-4 ">
          <p className="text-text/60 text-lg md:text-xl">
            © 2024. All rights reserved
          </p>
          <div className="flex items-center text-lg md:text-xl gap-6 text-text/60">
            <Link target="_blank" href={"https://github.com/Rabil-Ibraiel"}>
              <AiFillGithub className=" cursor-pointer size-6" />
            </Link>
            <Link target="_blank" href={"https://www.linkedin.com/in/rabil-ibraiel/"}>
              <AiFillLinkedin className=" cursor-pointer size-6" />
            </Link>
            <Link target="_blank" href={"https://www.behance.net/rabilabrail"}>
              <AiFillBehanceCircle className=" cursor-pointer size-6" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
