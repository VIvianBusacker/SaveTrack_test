import React, { useState } from "react";
import useStore from "../store";
import { IoMoon, IoSunny } from 'react-icons/io5'; // Icons for dark/light mode

const ThemeSwitch = () => {
  const { theme, setTheme } = useStore((state) => state);
  const [isDarkMode, setIsDarkMode] = useState(theme === "dark");

 // Toggle the dark-mode class on the body element
 document.body.classList.toggle('dark-mode', !isDarkMode);

  const toggleTheme = () => {
    const newTheme = isDarkMode ? "light" : "dark";
    setIsDarkMode(!isDarkMode);

    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
     <div className="flex items-center space-x-4">
      {/* Toggle button container */}
      <div className="flex items-center justify-center">
        <button
          onClick={toggleTheme}
          className={`relative inline-flex h-8 w-16 rounded-full focus:outline-none transition-all duration-300 ${
            isDarkMode ? 'bg-blue-600' : 'bg-gray-300'
          }`}
        >
          {/* Circle inside the toggle */}
          <span
            className={`absolute left-1 top-1 h-6 w-6 rounded-full bg-white shadow-lg transform transition-transform duration-300 ${
              isDarkMode ? 'translate-x-8' : 'translate-x-0'
            }`}
          />

          {/* Icons on opposite sides */}
          <div className="absolute inset-0 flex items-center justify-between px-2">
            <IoSunny
              className={`text-yellow-500 transition-opacity duration-300 ${
                isDarkMode ? 'opacity-0' : 'opacity-100'
              } mr-[2px]`} // Move sun 2px to the right
              size={18}
            />
            <IoMoon
              className={`text-gray-400 transition-opacity duration-300 ${
                isDarkMode ? 'opacity-100' : 'opacity-0'
              } ml-[-3px]`} // Move moon 2px to the left
              size={18}
            />
          </div>
        </button>
      </div>
    </div>
  );
};

export default ThemeSwitch;
