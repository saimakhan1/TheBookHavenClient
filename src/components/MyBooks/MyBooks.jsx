import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Contexts/AuthContext";
import { toast, Toaster } from "react-hot-toast";
import Swal from "sweetalert2";

const MyBooks = () => {
  const { user } = useContext(AuthContext);
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch user's books
  useEffect(() => {
    if (!user?.email) return;

    const fetchMyBooks = async () => {
      try {
        const res = await fetch("http://localhost:3000/all-books");
        const data = await res.json();
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
        const res = await fetch(`http://localhost:3000/all-books/${id}`, {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
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
        // Use React Router navigation instead of window.location
        window.location.href = `/update-book/${id}`;
      }
    });
  };

  if (loading) return <p className="text-center mt-10">Loading...</p>;

  if (books.length === 0)
    return (
      <p className="text-center mt-10 text-gray-700">
        You have not added any books yet.
      </p>
    );

  return (
    <div className="max-w-6xl mx-auto p-6">
      <Toaster />
      <h2 className="text-3xl font-bold text-center text-[#0abde3] mb-6">
        My Books
      </h2>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300 rounded-lg">
          <thead className="bg-[#0abde3] text-white">
            <tr>
              <th className="py-3 px-4 border-b">Title</th>
              <th className="py-3 px-4 border-b">Author</th>
              <th className="py-3 px-4 border-b">Genre</th>
              <th className="py-3 px-4 border-b">Rating</th>
              <th className="py-3 px-4 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book) => (
              <tr key={book._id} className="text-center hover:bg-gray-100">
                <td className="py-2 px-4 border-b">{book.title}</td>
                <td className="py-2 px-4 border-b">{book.author}</td>
                <td className="py-2 px-4 border-b">{book.genre}</td>
                <td className="py-2 px-4 border-b">{book.rating}</td>
                <td className="py-2 px-4 border-b space-x-2">
                  <button
                    onClick={() => handleUpdate(book._id)}
                    className="bg-[#74b9ff] hover:bg-blue-600 text-white py-1 px-4 rounded shadow"
                  >
                    Update
                  </button>
                  <button
                    onClick={() => handleDelete(book._id)}
                    className="bg-[#ff7675] hover:bg-red-600 text-white py-1 px-4 rounded shadow"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyBooks;
