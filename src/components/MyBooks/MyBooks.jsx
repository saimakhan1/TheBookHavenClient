import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../../Contexts/AuthContext";
import { toast, Toaster } from "react-hot-toast";
import Swal from "sweetalert2";
import axios from "axios";

const MyBooks = () => {
  const { user } = useContext(AuthContext);
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // Fetch user's books

  //axios 6
  useEffect(() => {
  if (!user?.email) return;

  const fetchMyBooks = async () => {
    try {
      const res = await axios.get("http://localhost:3000/all-books");
      const data = res.data;
      const myBooks = data.filter((book) => book.userEmail === user.email);
      setBooks(myBooks);
    } catch (error) {
      console.error(error);
      toast.error("Failed to load your books");
    } finally {
      setLoading(false);
    }
  };

  fetchMyBooks();
}, [user]);
  

  // Delete book
  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#e74c3c",
      cancelButtonColor: "#95a5a6",
      confirmButtonText: "Yes, delete it!",
    });

    if (result.isConfirmed) {
      try {
        const res = await fetch(`http://localhost:3000/books/${id}`, {
          method: "DELETE",
        });
        if (res.ok) {
          setBooks(books.filter((book) => book._id !== id));
          toast.success("Book deleted successfully!");
        } else {
          toast.error("Failed to delete book");
        }
      } catch (error) {
        console.error(error);
        toast.error("Failed to delete book");
      }
    }
  };

  // Update book
  const handleUpdate = (id) => {
    Swal.fire({
      title: "Update Book?",
      text: "You will be redirected to the update page.",
      icon: "info",
      showCancelButton: true,
      confirmButtonColor: "#3498db",
      cancelButtonColor: "#95a5a6",
      confirmButtonText: "Yes, update it!",
    }).then((result) => {
      if (result.isConfirmed) {
        navigate(`/update-book/${id}`);
      }
    });
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="w-16 h-16 border-4 border-t-[#0abde3] border-gray-300 rounded-full animate-spin"></div>
      </div>
    );
  }

  if (books.length === 0) {
    return (
      <p className="text-center mt-10 text-gray-700">
        You have not added any books yet.
      </p>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-4 sm:p-6 md:p-8">
      <Toaster />
      <h2 className="text-3xl font-bold text-center text-[#0abde3] mb-6">
        My Books
      </h2>

      {/* Desktop Table */}
      <div className="hidden md:block overflow-x-auto rounded-lg shadow-lg">
        <table className="min-w-full border border-gray-300 table-auto">
          <thead className="bg-[#0abde3] text-white">
            <tr>
              <th className="py-3 px-4 border-b text-left">Title</th>
              <th className="py-3 px-4 border-b text-left">Author</th>
              <th className="py-3 px-4 border-b text-left">Genre</th>
              <th className="py-3 px-4 border-b text-left">Rating</th>
              <th className="py-3 px-4 border-b text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book) => (
              <tr
                key={book._id}
                className="hover:bg-gray-100 border-b border-gray-200"
              >
                <td className="py-2 px-4">{book.title}</td>
                <td className="py-2 px-4">{book.author}</td>
                <td className="py-2 px-4">{book.genre}</td>
                <td className="py-2 px-4">{book.rating}</td>
                <td className="py-2 px-4">
                  <div className="flex flex-col sm:flex-row justify-center items-center gap-2">
                    <button
                      onClick={() => handleUpdate(book._id)}
                      className="bg-[#74b9ff] hover:bg-blue-600 text-white py-1 px-4 rounded shadow w-full sm:w-auto"
                    >
                      Update
                    </button>
                    <button
                      onClick={() => handleDelete(book._id)}
                      className="bg-[#ff7675] hover:bg-red-600 text-white py-1 px-4 rounded shadow w-full sm:w-auto"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="md:hidden space-y-4">
        {books.map((book) => (
          <div
            key={book._id}
            className="bg-white rounded-lg shadow p-4 flex flex-col gap-2 border border-gray-200"
          >
            <h3 className="font-bold text-lg text-[#0abde3]">{book.title}</h3>
            <p>
              <span className="font-semibold">Author:</span> {book.author}
            </p>
            <p>
              <span className="font-semibold">Genre:</span> {book.genre}
            </p>
            <p>
              <span className="font-semibold">Rating:</span> ⭐ {book.rating}
            </p>
            <div className="flex flex-col sm:flex-row gap-2 mt-2">
              <button
                onClick={() => handleUpdate(book._id)}
                className="bg-[#74b9ff] hover:bg-blue-600 text-white py-1 px-4 rounded shadow w-full sm:w-auto"
              >
                Update
              </button>
              <button
                onClick={() => handleDelete(book._id)}
                className="bg-[#ff7675] hover:bg-red-600 text-white py-1 px-4 rounded shadow w-full sm:w-auto"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyBooks;
