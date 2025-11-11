

import React, { useEffect, useState } from "react";

import PopularBooks from "../PopularBooks/PopularBooks";
import Banner from "../Banner/Banner";
import AboutBookHaven from "../AboutBookHaven/AboutBookHaven";
import TopGenres from "../TopGenres/TopGenres";
import { format } from 'date-fns';
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import TopBooks from "../TopRatedBooks/TopBooks";
import axios from "axios";

//axios 5
const popularBooksPromise = axios
  .get("http://localhost:3000/all-books")
  .then((res) => res.data);

// const popularBooksPromise = fetch("http://localhost:3000/all-books").then(
//   (res) => res.json()
// );

const Home = () => {
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
    <div className="transition-colors duration-500 min-h-screen">
      {/* Toggle Button */}
      <div className="flex justify-end p-4">
        <span className="bg-blue-200 px-5 py-2 border-blue-400 border-1 rounded-xl mr-4" data-tooltip-id="my-tooltip"
        data-tooltip-content="Today's Date">{format(today, 'yyyy-MM-dd')}</span>
         <Tooltip id="my-tooltip" place="top" effect="solid" />
        <button
          onClick={toggleTheme}
          className={`btn btn-outline flex items-center gap-2 px-5 py-2 rounded-full font-semibold shadow-lg transform transition-transform duration-300 hover:scale-105 ${
            theme === "light" ? "bg-white text-gray-800 border-gray-400 hover:bg-gray-100" : "bg-gray-800 text-white border-gray-600 hover:bg-gray-700"
          }`}
        >
          {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
        </button>
      </div>

      {/* Main Sections */}
      <Banner />
      <PopularBooks popularBooksPromise={popularBooksPromise} />
      <AboutBookHaven />
      <TopGenres />
      <TopBooks></TopBooks>
    </div>
  );
};

export default Home;

