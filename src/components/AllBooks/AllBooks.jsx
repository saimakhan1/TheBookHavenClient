// import React from "react";

// const AllBooks = () => {
//   return <div>all books</div>;
// };

// export default AllBooks;

import React, { useEffect, useState } from "react";
import { Link } from "react-router";

const AllBooks = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/all-books")
      .then((res) => res.json())
      .then((data) => setBooks(data))
      .catch((error) => console.error("Error loading books:", error));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-blue-100 py-12 px-4 md:px-10">
      <h2 className="text-4xl font-bold text-center text-purple-800 mb-10">
        📚 All Books Collection
      </h2>

      <div className="overflow-x-auto bg-white shadow-2xl rounded-2xl p-6 border border-gray-100">
        <table className="table w-full text-center">
          <thead className="bg-gradient-to-r from-purple-600 to-blue-400 text-white text-lg">
            <tr>
              <th className="py-3">#</th>
              <th className="py-3">Book Name</th>
              <th className="py-3">Author</th>
              <th className="py-3">Genre</th>
              <th className="py-3">Rating</th>
              <th className="py-3">Action</th>
            </tr>
          </thead>

          <tbody>
            {books.length > 0 ? (
              books.map((book, index) => (
                <tr
                  key={book._id}
                  className="hover:bg-purple-50 transition duration-200"
                >
                  <td className="font-semibold text-gray-600">{index + 1}</td>
                  <td className="font-medium text-gray-800">{book.title}</td>
                  <td className="text-gray-700">{book.author}</td>
                  <td className="text-gray-700">{book.genre}</td>
                  <td className="text-yellow-500 font-semibold">
                    ⭐ {book.rating}
                  </td>
                  <td>
                    <Link
                      to={`/book-details/${book._id}`}
                      className="bg-gradient-to-r from-blue-500 to-[#0abde3] text-white px-4 py-2 rounded-lg shadow-md hover:opacity-90 transition duration-200"
                    >
                      View Details
                    </Link>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="py-10 text-gray-500 text-lg">
                  No books found 😔
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllBooks;
