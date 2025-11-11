import axios from "axios";
import React, { useEffect, useState } from "react";

const TopBooks = () => {
  const [topBooks, setTopBooks] = useState([]);

  //axios 9
  useEffect(() => {
  const fetchTopBooks = async () => {
    try {
      const res = await axios.get("http://localhost:3000/top-books");
      setTopBooks(res.data); // Axios automatically parses JSON
    } catch (err) {
      console.error(err);
    }
  };

  fetchTopBooks();
}, []);

 

  return (
    <div className="max-w-6xl mx-auto p-4 sm:p-6 mt-8">
      <h2 className="text-2xl sm:text-3xl font-bold text-[#0abde3] mb-6 text-center">
        🌟 Top 3 Books by Rating
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {topBooks.map((book) => (
          <div
            key={book._id}
            className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
          >
            <img
              src={book.coverImage}
              alt={book.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-[#0abde3] mb-1">
                {book.title}
              </h3>
              <p className="text-gray-700">
                <span className="font-medium text-[#0abde3]">Author:</span>{" "}
                {book.author}
              </p>
              <p className="text-gray-700">
                <span className="font-medium text-[#0abde3]">Genre:</span>{" "}
                {book.genre}
              </p>
              <p className="text-gray-700">
                <span className="font-medium text-[#0abde3]">Rating:</span> ⭐{" "}
                {book.rating}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopBooks;
