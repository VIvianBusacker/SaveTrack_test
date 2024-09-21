import React, { useState } from "react";
import { Avatar } from "../assets";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import ThemeSwitch from "./themeswitch";

const links = ["Dashboard", "Transactions", "Accounts", "Settings"];

const Navbar = () => {
  const [selected, setSelected] = useState(0);

  return (
    <nav className="w-full flex items-center justify-between py-4 px-4 md:px-8">
{/* Logo Section */}
      <div className="flex items-center gap-2 cursor-pointer">
      <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-xl">
        <img
            className="3xl hover:animate-spin"
            src="src/assets/savealotlogo.png"
            alt="Logo"
          />
        </div>
        <h1 className="text-xl font-semibold text-black dark:text-white">SaveAlot</h1>
      </div>
{/* Navigation Links and User Info */}
      <div className="hidden md:flex items-center gap-6">
{/* Navigation Links */}
        {links.map((link, index) => (
          <button
            key={index}
            className={`${
              index === selected
                ? "bg-black text-white dark:bg-gray-700"
                : "text-gray-600 dark:text-gray-400"
            } px-4 py-2 rounded-md transition-colors duration-300`}
            onClick={() => setSelected(index)}
          >
            {link}
          </button>
        ))}
      </div>

{/* User Profile Section */}
      <div className="flex items-center gap-4">
        <ThemeSwitch />
        <div className="flex items-center gap-2 cursor-pointer">
{/* Avatar */}
          <img
            src={Avatar}
            alt="User"
            className="w-9 h-9 rounded-full object-cover"
          />
{/* User Info */}
          <div className="hidden md:flex flex-col">
            <span className="text-sm font-semibold text-black dark:text-white">
              Selena Gomez
            </span>
            <span className="text-xs text-gray-500">sgomaz123@gmail.com</span>
          </div>
{/* Dropdown Arrow */}
          <MdOutlineKeyboardArrowDown className="text-xl text-gray-500 dark:text-gray-300" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
