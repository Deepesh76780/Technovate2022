import { Squash as Hamburger } from "hamburger-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [isOpen, setisOpen] = useState(false);
  return (
    <div>
      <div className="h-16 w-screen hidden sm:flex sm:flex-row justify-start items-center">
        <div className="w-[2px] md:w-10"></div>
        <Link className="cursor-pointer" to="/">
          <img
            className="h-16 lg:h-20 w-16 lg:w-20"
            src="../Images/Logo.svg"
            alt="Logo"
          />
        </Link>

        <div className="flex flex-row space-x-[1.5vw] md:space-x-[2vw] lg:space-x-[3vw] text-red-100 text-lg md:text-[20px] spaced px-[10vw] ">
          {/* <a
            rel="noreferrer"
            href="https://unstop.com/festival/technovate-2022-international-institute-of-information-technology-iiit-naya-raipur-54915"
            target="_blank"
            className="hover:text-[#E72D2D] transition-colors duration-300 cursor-pointer"
          >
            REGISTER
          </a> */}
          <Link
            className="hover:text-[#E72D2D] transition-colors duration-300 cursor-pointer"
            to="/"
          >
            Home
          </Link>
          <Link
            className="hover:text-[#E72D2D] transition-colors duration-300 cursor-pointer"
            to="/event"
          >
            EVENTS
          </Link>
          <Link to='/schedule' className="hover:text-[#E72D2D] transition-colors duration-300 cursor-pointer">
            SCHEDULE
          </Link>
          <Link className="hover:text-[#E72D2D] transition-colors duration-300 cursor-pointer"
            to="/sponsors"
          >
            SPONSORS
          </Link>
          <Link
            className="hover:text-[#E72D2D] transition-colors duration-300 cursor-pointer"
            to="/team"
          >
            TEAM
          </Link>
          <Link
            className="hover:text-[#E72D2D] transition-colors duration-300 cursor-pointer"
            to="/blog"
          >
            BLOGS
          </Link>
        </div>
        {/* <a
          className="hidden lg:block absolute right-12"
          rel="noreferrer"
          href="https://unstop.com/festival/technovate-2022-international-institute-of-information-technology-iiit-naya-raipur-54915"
          target="_blank"
        >
          <div className="glow-on-hover px-2 text-center text-xs flex justify-center items-center">
            Register
          </div>
        </a> */}
      </div>
      <div className="sm:hidden flex flex-row justify-between items-center mx-2">
        <Link to="/" className="mt-2">
          <img src="../Images/Logo.svg" className="h-20 w-20" alt="" />
        </Link>
        <div className={`z-30 ${isOpen ? "" : "translate-x-0"} mt-2`}>
          <Hamburger
            rounded
            size={40}
            duration={0.8}
            color="white"
            toggled={isOpen}
            toggle={setisOpen}
          />
        </div>
      </div>
      <div
        className={`z-20 sm:hidden pt-[2.5rem] px-2 text-white space-y-5 flex flex-col h-screen w-[260px] fixed top-0 right-0  bg-black bg-opacity-75 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition duration-[800ms] `}
      >
        <Link to="/" className="text-xl">
          Technovate 2022
        </Link>
        <div className="w-full h-0.5 bg-white -mx-2"></div>
        <div className="flex flex-col space-y-5">
          {/* <a
            rel="noreferrer"
            href="https://unstop.com/festival/technovate-2022-international-institute-of-information-technology-iiit-naya-raipur-54915"
            target="_blank"
            className="hover:text-[#E72D2D] transition-colors duration-300 cursor-pointer"
          >
            REGISTER
          </a> */}
          <Link
            className="hover:text-[#E72D2D] transition-colors duration-300 cursor-pointer"
            to="/"
          >
            HOME
          </Link>
          <Link
            className="hover:text-[#E72D2D] transition-colors duration-300 cursor-pointer"
            to="/event"
          >
            EVENTS
          </Link>
          <Link to="/schedule" className="hover:text-[#E72D2D] transition-colors duration-300 cursor-pointer">
            SCHEDULE
          </Link>
          <Link to="/sponsors" className="hover:text-[#E72D2D] transition-colors duration-300 cursor-pointer">
            SPONSORS
          </Link>
          <Link
            className="hover:text-[#E72D2D] transition-colors duration-300 cursor-pointer"
            to="/team"
          >
            TEAM
          </Link>
          <Link
            className="hover:text-[#E72D2D] transition-colors duration-300 cursor-pointer"
            to="/blog"
          >
            BLOGS
          </Link>
          {/* <a
            className="glow-on-hover px-2 text-center text-xs flex justify-center items-center"
            rel="noreferrer"
            href="https://unstop.com/festival/technovate-2022-international-institute-of-information-technology-iiit-naya-raipur-54915"
            target="_blank"
          >
            <span className="uppercase">Register</span>
          </a> */}
        </div>
      </div>
    </div>
  );
};
