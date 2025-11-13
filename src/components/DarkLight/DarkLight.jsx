import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

import useTheme from "../../theme/useTheme";

import ToggleButton from '../../theme/ToggleButton';

const DarkLight = () => {
    const [theme, setTheme] = useState("light");

  // Load saved theme on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme || "light");
  }, []);

  // Toggle theme
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };
  const today = new Date();
    return (
        <div>
             {/* Toggle Button */}
      <div className="flex justify-end p-4">
        <span className="bg-[#0a8bbf] px-5 py-2 border-blue-400 border-1 rounded-xl mr-4" data-tooltip-id="my-tooltip"
        data-tooltip-content="Today's Date">{format(today, 'yyyy-MM-dd')}</span>
         <Tooltip id="my-tooltip" place="top" effect="solid" />
         <ToggleButton theme={theme} toggleTheme={toggleTheme} />
        {/* <button
          onClick={toggleTheme}
          className={`btn btn-outline flex items-center gap-2 px-5 py-2 rounded-full font-semibold shadow-lg transform transition-transform duration-300 hover:scale-105 ${
            theme === "light" ? "bg-white text-gray-800 border-gray-400 hover:bg-gray-100" : "bg-gray-800 text-white border-gray-600 hover:bg-gray-700"
          }`}
        >
          {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
        </button> */}
      </div>
      {/* new addition */}
        <nav>
      {/* Option 1: Use the ToggleButton component */}
      {/* <ToggleButton theme={theme} toggleTheme={toggleTheme} /> */}

      {/* Option 2: Or use this DaisyUI toggle input */}
      {/* <input
        type="checkbox"
        value="dark"
        className="toggle theme-controller mr-6 text-white"
        checked={theme === "dark"}
        onChange={(e) => toggleTheme(e.target.checked)}
      /> */}
    </nav>
        </div>
    );
};

export default DarkLight;