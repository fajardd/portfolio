import React, { useState } from "react";
import Link from "next/link";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 right-0 bg-blue-600 p-4 md:px-32 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">Fajardc</div>
        <nav className="hidden md:flex space-x-8">
          <li className="text-white hover:text-gray-200 list-none">
            <Link href="/#aboutme">About Me</Link>
          </li>
          <li className="text-white hover:text-gray-200 list-none">
            <Link href="/#education">Education</Link>
          </li>
          <li className="text-white hover:text-gray-200 list-none">
            <Link href="/#skills">Skills</Link>
          </li>
          <li className="text-white hover:text-gray-200 list-none">
            <Link href="/#project">Project</Link>
          </li>
          <li className="text-white hover:text-gray-200 list-none">
            <Link href="/#contact">Contact</Link>
          </li>
        </nav>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white">
            {isOpen ? (
              <XIcon className="w-6 h-6" />
            ) : (
              <MenuIcon className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>
      <div
        className={`md:hidden bg-blue-600 overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-40" : "max-h-0"
        }`}
      >
        <div className="p-4">
          <a href="#" className="block text-white hover:text-gray-200">
            Home
          </a>
          <a href="#" className="block text-white hover:text-gray-200">
            About
          </a>
          <a href="#" className="block text-white hover:text-gray-200">
            Contact
          </a>
          <a href="#" className="block text-white hover:text-gray-200">
            Login
          </a>
        </div>
      </div>
    </header>
  );
};
export default NavBar;
