import React, { useState, useEffect, useRef } from "react";
import { Avatar } from "../assets";
import ThemeSwitch from "./themeswitch";
import { FaBars } from "react-icons/fa";

const links = ["Dashboard", "Transactions", "Accounts", "Settings"];

const Navbar = () => {
  const [selected, setSelected] = useState(0);
  const [menuVisible, setMenuVisible] = useState(false);

  const menuRef = useRef(null); // Reference to the sliding menu

  const handleBackToDashboard = () => {
    setSelected(0);
    setMenuVisible(false);
  };

  const handleClickOutside = (e) => {
    // Check if the click is outside the menu
    if (menuRef.current && !menuRef.current.contains(e.target)) {
      setMenuVisible(false);
    }
  };

  useEffect(() => {
    if (menuVisible) {
      // Add event listener when the menu is visible
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      // Remove event listener when the menu is not visible
      document.removeEventListener("mousedown", handleClickOutside);
    }

    // Clean up the event listener on component unmount or when the menu visibility changes
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuVisible]);

  return (
    <nav className="w-full flex items-center justify-between py-4 px-4 md:px-8">
      {/* Hamburger Menu Icon, Logo, and Title on the left */}
      <div className="flex items-center gap-4">
        <div className="relative mr-6" onClick={() => setMenuVisible(!menuVisible)}> {/* THIS IS THE LOGO AND SAVEALOT MOVING LEFT OR RIGHT DESIGN!!! */}
          <FaBars className="text-xl text-gray-500 dark:text-gray-300 cursor-pointer" />
        </div>

        <div className="flex items-center gap-2 cursor-pointer">
          <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-md">
            <img
              className="hover:animate-spin"
              src="src/assets/savealotlogo.png"
              alt="Logo"
            />
          </div>
          <h1 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
            Save<b>Alot</b>
          </h1>
        </div>
      </div>

    {/* -------------------------------------------------- */}

      {/* Sliding Menu on the left */}
      <div
        ref={menuRef} // Reference to the sliding menu
        className={`${
          menuVisible ? "translate-x-0" : "-translate-x-full"
        } fixed left-0 top-0 h-screen w-64 bg-white dark:bg-gray-900 shadow-lg transform transition-transform duration-500 ease-in-out z-50`}
      >
        <div className="flex flex-col p-4 h-full justify-between">
          {/* Menu Top Section */}
          <div>
            {/* Avatar, Username and Manage Profile in the same div */}
            <div className="flex items-center mb-6">
              <img
                src={Avatar}
                alt="User"
                className="w-14 h-14 rounded-full object-cover"
              />
              <div className="ml-4">
                <span className="block text-gray-900 dark:text-white font-bold">
                  Selena Gomez
                </span>
                <button className="text-sm text-blue-600 dark:text-blue-400 hover:underline">
                  Manage Profile
                </button>
              </div>
            </div>

            {/* Menu Links */}
            {links.map((link, index) => (
              <button
                key={index}
                className={`${
                  index === selected
                    ? "bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white"
                    : "text-gray-700 dark:text-gray-300"
                } block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md w-full text-left transition-colors duration-300`}
                onClick={() => setSelected(index)}
              >
                {link}
              </button>
            ))}
          </div>

          {/* Toggle Section at the bottom */}
          <div className="pb-4"> 
            <ThemeSwitch /> 
          </div> 
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
