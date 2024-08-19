import React from "react";
import { AiFillInstagram } from "react-icons/ai";
import { BsTwitterX } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa";
import { IoLogoTiktok } from "react-icons/io5";

const Footer = () => {
  return (
    <div className="mb-4 flex flex-col items-center justify-center">
      <div className="border border-text/30 mb-4 w-full" />


      <div className="container">
        <div className="flex items-center justify-between flex-col md:flex-row gap-4 ">
          <p className="text-text/60 text-lg md:text-xl">
            © 2024 Your Company, Inc. All rights reserved
          </p>
          <div className="flex items-center text-lg md:text-xl gap-6 text-text/60">
            <AiFillInstagram className=" cursor-pointer" />
            <BsTwitterX className=" cursor-pointer" />
            <FaYoutube className=" cursor-pointer" />
            <IoLogoTiktok className=" cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
