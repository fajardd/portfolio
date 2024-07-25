import React, { useState, useEffect } from "react";
import Link from "next/link";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasShadow, setHasShadow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setHasShadow(true);
      } else {
        setHasShadow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header
      className={`fixed top-0 left-0 right-0 bg-white py-4  z-50 transition-shadow duration-300 ${
        hasShadow ? "shadow" : ""
      }`}
    >
      <div className="container mx-auto px-4 lg:px-24 flex justify-between items-center">
        <div className=" text-lg font-bold flex">
          <div className="w-8 h-8 rounded-md bg-[#0079FF] text-white flex justify-center items-center mr-3">
            F
          </div>
          <p className="text-[#0079FF]">Fajardc</p>
        </div>
        <nav className="hidden md:flex space-x-8">
          <li className="text-[#2F3645] hover:text-[#0079FF] active:text-[#0079FF] list-none">
            <Link href="/#aboutme">About Me</Link>
          </li>
          <li className="text-[#2F3645] hover:text-[#0079FF] list-none">
            <Link href="/#skills">Skills</Link>
          </li>
          <li className="text-[#2F3645] hover:text-[#0079FF] list-none">
            <Link href="/#project">Projects</Link>
          </li>
          <li className="text-[#2F3645] hover:text-[#0079FF] list-none">
            <Link
              target="_blank"
              href="https://drive.google.com/file/d/1HUxKkA1miYr6JCKVU1r4VopCYnQmbY6L/view?usp=sharing"
            >
              CV
            </Link>
          </li>
        </nav>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white">
            {isOpen ? (
              <XIcon className="w-6 h-6 stroke-[#0079FF]" />
            ) : (
              <MenuIcon className="w-6 h-6 stroke-[#0079FF]" />
            )}
          </button>
        </div>
      </div>
      <div
        className={`md:hidden container mx-auto px-4 lg:px-32 bg-white overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-40" : "max-h-0"
        }`}
      >
        <div>
          <li className="block text-[#2F3645] hover:text-[#0079FF] py-2 mt-2 ">
            <Link href="/#aboutme">About Me</Link>
          </li>
          <li className="block text-[#2F3645] hover:text-[#0079FF] py-2">
            <Link href="/#skills">Skills</Link>
          </li>
          <li className="block text-[#2F3645] hover:text-[#0079FF] py-2">
            <Link href="/#project">Projects</Link>
          </li>
          <li className="block text-[#2F3645] hover:text-[#0079FF] py-2">
            <Link
              target="_blank"
              href="https://drive.google.com/file/d/1HUxKkA1miYr6JCKVU1r4VopCYnQmbY6L/view?usp=sharing"
            >
              CV
            </Link>
          </li>
        </div>
      </div>
    </header>
  );
};
export default NavBar;
