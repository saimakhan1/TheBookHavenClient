import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router";

const AllBooks = () => {
  const [books, setBooks] = useState([]);
  const [sortOrder, setSortOrder] = useState("high-to-low");
  const [loading, setLoading] = useState(true);
//axios 4
useEffect(() => {
  const fetchBooks = async () => {
    try {
      const res = await axios.get("http://localhost:3000/all-books");
      const sortedData = sortBooks(res.data, sortOrder);
      setBooks(sortedData);
    } catch (error) {
      console.error("Error loading books:", error);
    } finally {
      setLoading(false);
    }
  };

  fetchBooks();
}, []);

  // Fetch books
  // useEffect(() => {
  //   fetch("http://localhost:3000/all-books")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       const sortedData = sortBooks(data, sortOrder);
  //       setBooks(sortedData);
  //     })
  //     .catch((error) => console.error("Error loading books:", error))
  //     .finally(() => setLoading(false));
  // }, []);

  // Sort books
  const sortBooks = (booksArray, order) => {
    const sorted = [...booksArray];
    if (order === "high-to-low") sorted.sort((a, b) => b.rating - a.rating);
    else sorted.sort((a, b) => a.rating - b.rating);
    return sorted;
  };

  // Handle sort change
  const handleSortChange = (e) => {
    const order = e.target.value;
    setSortOrder(order);
    const sorted = sortBooks(books, order);
    setBooks(sorted);
  };

  // Loader
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="w-16 h-16 border-4 border-t-[#0abde3] border-gray-300 rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-blue-100 py-12 px-4 md:px-10">
      <h2 className="text-4xl font-bold text-center text-purple-800 mb-6">
        📚 All Books Collection
      </h2>

      {/* Sort Dropdown */}
      <div className="flex flex-col sm:flex-row justify-end items-start sm:items-center mb-4 gap-2 sm:gap-4">
        <label className="font-semibold text-gray-700">Sort by Rating:</label>
        <select
          value={sortOrder}
          onChange={handleSortChange}
          className="border border-gray-300 rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-[#0abde3]"
        >
          <option value="high-to-low">High to Low</option>
          <option value="low-to-high">Low to High</option>
        </select>
      </div>

      {/* Desktop Table */}
      <div className="hidden md:block overflow-x-auto bg-white shadow-2xl rounded-2xl p-6 border border-gray-100">
        <table className="min-w-full table-auto text-center">
          <thead className="bg-[#0abde3] text-white text-lg">
            <tr>
              <th className="py-3 px-4 border-b">#</th>
              <th className="py-3 px-4 border-b">Book Name</th>
              <th className="py-3 px-4 border-b">Author</th>
              <th className="py-3 px-4 border-b">Genre</th>
              <th className="py-3 px-4 border-b">Rating</th>
              <th className="py-3 px-4 border-b">Action</th>
            </tr>
          </thead>
          <tbody>
            {books.length > 0 ? (
              books.map((book, index) => (
                <tr key={book._id} className="hover:bg-purple-50 transition duration-200">
                  <td className="py-2 px-4 border-b">{index + 1}</td>
                  <td className="py-2 px-4 border-b">{book.title}</td>
                  <td className="py-2 px-4 border-b">{book.author}</td>
                  <td className="py-2 px-4 border-b">{book.genre}</td>
                  <td className="py-2 px-4 border-b text-yellow-500 font-semibold">⭐ {book.rating}</td>
                  <td className="py-2 px-4 border-b">
                    <Link
                      to={`/book-details/${book._id}`}
                      className="bg-gradient-to-r from-blue-400 to-[#0abde3] text-white px-4 py-2 rounded-lg shadow-md hover:opacity-90 transition duration-200"
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

      {/* Mobile Card Layout */}
      <div className="md:hidden space-y-4">
        {books.length > 0 ? (
          books.map((book, index) => (
            <div key={book._id} className="bg-white shadow-2xl rounded-2xl p-4 border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{book.title}</h3>
              <p className="text-gray-700 mb-1">
                <span className="font-semibold">Author:</span> {book.author}
              </p>
              <p className="text-gray-700 mb-1">
                <span className="font-semibold">Genre:</span> {book.genre}
              </p>
              <p className="text-yellow-500 font-semibold mb-2">⭐ {book.rating}</p>
              <Link
                to={`/book-details/${book._id}`}
                className="block bg-gradient-to-r from-blue-400 to-[#0abde3] text-white px-4 py-2 rounded-lg shadow-md hover:opacity-90 transition duration-200 text-center"
              >
                View Details
              </Link>
            </div>
          ))
        ) : (
          <p className="py-10 text-center text-gray-500 text-lg">No books found 😔</p>
        )}
      </div>
    </div>
  );
};

export default AllBooks;
