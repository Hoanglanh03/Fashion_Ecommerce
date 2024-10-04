import React, { useState } from "react";
import Logo from "../asserts/images/logoHL.png";
import { Link } from "react-router-dom";
import { Search } from "lucide-react";
import { ShoppingCart } from "lucide-react";
import { CircleUserRound } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black dark:bg-black fixed  w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap md:flex-nowrap items-center justify-between mx-auto p-4 ">
        <Link
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img src={Logo} className="h-8" alt="Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
            Shawty
          </span>
        </Link>

        <div className="flex md:order-2 items-center space-x-3 md:space-x-0 rtl:space-x-reverse">
          <Link className="flex items-center justify-center ">
            <Search className="block py-2 px-1  text-white w-full h-full md:w-10 md:h-10 hover:bg-gray-100  md:hover:bg-transparent dark:text-white dark:hover:bg-gray-700 dark:hover:text-white justify-center " />
          </Link>
          <Link className="flex items-center justify-center">
            <ShoppingCart className="block py-2 px-1 text-white w-full h-full md:w-10 md:h-10 hover:bg-gray-100  md:hover:bg-transparent  dark:text-white dark:hover:bg-gray-700 dark:hover:text-white justify-center " />
          </Link>
          <Link className="flex items-center justify-center">
            <CircleUserRound className="block py-2 px-1 text-white w-full h-full md:w-10 md:h-10 hover:bg-gray-100  md:hover:bg-transparent  dark:text-white dark:hover:bg-gray-700 dark:hover:text-white justify-center " />
          </Link>

          <button
            onClick={toggleMenu}
            className="inline-flex items center p-2 w-10 h-10 justify-center text-sm rounded-lg text-white md:hidden bg:blue-100 hover:bg-blue-600"
            aria-controls="navbar-sticky"
            aria-expanded={isOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>

        <div
          className={`${
            isOpen ? "block" : "hidden"
          } w-full md:flex md:w-auto md:order-1`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-2 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50  md:space-x-1  rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  dark:bg-white-800 md:dark:bg-black dark:border-w-700">
            <li>
              <Link
                to="/"
                className="block py-3 px-2 text-black rounded md:text-white md:hover:bg-transparent hover:bg-gray-700 md:hover:text-gray-300 "
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/shop"
                className="block py-3 px-2 text-black rounded md:text-white md:hover:bg-transparent hover:bg-gray-700 md:hover:text-gray-300"
              >
                Women
              </Link>
            </li>
            <li>
              <Link
                to="/shop"
                className="block py-3 px-2 text-black rounded md:text-white md:hover:bg-transparent hover:bg-gray-700 md:hover:text-gray-300"
              >
                Men
              </Link>
            </li>
            <li>
              <Link
                to="/shop"
                className="block py-3 px-2 text-black rounded md:text-white md:hover:bg-transparent hover:bg-gray-700 md:hover:text-gray-300"
              >
                Jewelry
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="block py-3 px-2 text-black rounded md:text-white md:hover:bg-transparent hover:bg-gray-700 md:hover:text-gray-300"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="/login"
                className="block py-2 px-2 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:hover:text-blue-500 dark:text-black dark:hover:bg-gray-700 dark:hover:text-white"
              >
                Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
