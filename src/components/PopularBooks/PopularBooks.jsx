import React, { use } from "react";
import Book from "../Book/Book";

const PopularBooks = ({ popularBooksPromise }) => {
  const books = use(popularBooksPromise);

  console.log(books);
  return (
    <div className="bg-gradient-to-r from-purple-100 to-blue-100 dark:from-gray-800 dark:to-gray-900 py-12 transition-colors duration-300">
      <h3 className="text-5xl text-center font-bold text-[#0a8bbf] mb-10">
        Latest Books
      </h3>
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-4 max-w-7xl mx-auto">
        {books
          .sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded)) // sort by latest date
          .slice(0, 6) // take the first 6
          .map((book) => (
            <div
              key={book._id}
              className="bg-white dark:bg-gray-600 rounded-2xl shadow-lg dark:shadow-gray-700 p-6 transform transition duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <Book book={book} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default PopularBooks;
