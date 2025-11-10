import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Contexts/AuthContext";
import { toast, Toaster } from "react-hot-toast";
import Book from "../Book/Book";

const MyBooks = () => {
  const { user } = useContext(AuthContext);
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user?.email) return; // wait for user context to be ready

    const fetchMyBooks = async () => {
      try {
        const res = await fetch("http://localhost:3000/all-books");
        const data = await res.json();
        // Filter books added by the logged-in user
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
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {books.map((book) => (
          <Book key={book._id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default MyBooks;
