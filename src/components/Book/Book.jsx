import React from "react";
import { NavLink } from "react-router";

const Book = ({ book }) => {
  const { _id, title, author, genre, rating, dateAdded, coverImage } = book;
  function parseDate(dateStr) {
    const [day, month, year] = dateStr.split("-");
    return new Date(`${year}-${month}-${day}`);
  }

  return (
    <div className="card bg-white dark:bg-gray-800 w-full sm:max-w-xs md:max-w-sm lg:max-w-md shadow-lg dark:shadow-gray-700 rounded-2xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 mx-auto">
      <figure className="overflow-hidden">
        <img
          src={coverImage}
          alt={title}
          className="w-full h-64 sm:h-72 md:h-80 object-cover transition-transform duration-300 hover:scale-105"
        />
      </figure>
      <div className="card-body p-4 sm:p-5 bg-[#f0f8ff] dark:bg-gray-900 transition-colors duration-300">
        <h2 className="card-title text-[#0abde3] dark:text-[#38d3f8] font-bold text-lg sm:text-xl">{title}</h2>
        <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">
          <span className="font-semibold">Author:</span> {author}
        </p>
        <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">
          <span className="font-semibold">Genre:</span> {genre}
        </p>
        <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">
          <span className="font-semibold">Rating:</span> {rating}
        </p>
        <p className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm mt-1">
          Added on: {new Date(dateAdded).toLocaleDateString()}
        </p>
        <div className="card-actions mt-4">
          <NavLink
            to={`/book-details/${_id}`}
            className="btn w-full bg-[#0abde3] dark:bg-[#0a8bbf] hover:bg-[#0097c2] dark:hover:bg-[#096c99] text-white border-none transition-colors duration-300 text-sm sm:text-base"
          >
            View Book Details
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Book;
