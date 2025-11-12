
import React, { useContext, useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import { AuthContext } from "../../Contexts/AuthContext";
import axios from "axios";

const AddBook = () => {
  const { user: loggedInUser } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);

  const handleAddBook = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;
    const title = form.title.value;
    const author = form.author.value;
    const genre = form.genre.value;
    const rating = form.rating.value;
    const summary = form.summary.value;
    const coverImage = form.coverImage.value;

    const newBook = {
      title,
      author,
      genre,
      rating,
      summary,
      coverImage,
      userEmail: loggedInUser?.email || "Unknown",
      userName: loggedInUser?.displayName || loggedInUser?.email || "Unknown",
      dateAdded: new Date().toISOString(),
    };

    try {
      console.log("📦 newBook data before POST:", newBook);
      const response = await axios.post("https://the-book-haven-server-rose.vercel.app/books", newBook, {
        headers: { "Content-Type": "application/json" },
      });
      const result = response.data;

      if (result.insertedId) {
        toast.success("Book added successfully!");
        form.reset();
      } else {
        toast.error("Failed to add book!");
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50 dark:bg-gray-900 py-6 px-4 sm:px-6 md:px-8 transition-colors duration-300">
      <Toaster />
      <div className="w-full max-w-3xl bg-blue-50 dark:bg-gray-800 shadow-md rounded-lg p-6 sm:p-8 border border-gray-200 dark:border-gray-700">
        <h2 className="text-3xl font-bold text-center text-[#0abde3] dark:text-[#4fd1c5] mb-6">
          Add a New Book
        </h2>

        <form onSubmit={handleAddBook} className="space-y-4">
          <div>
            <label className="block font-semibold mb-1 text-gray-800 dark:text-gray-200">
              Title
            </label>
            <input
              type="text"
              name="title"
              required
              placeholder="Book Title"
              className="w-full border border-gray-300 dark:border-gray-600 rounded px-3 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          <div>
            <label className="block font-semibold mb-1 text-gray-800 dark:text-gray-200">
              Author
            </label>
            <input
              type="text"
              name="author"
              required
              placeholder="Author Name"
              className="w-full border border-gray-300 dark:border-gray-600 rounded px-3 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          <div>
            <label className="block font-semibold mb-1 text-gray-800 dark:text-gray-200">
              Genre
            </label>
            <input
              type="text"
              name="genre"
              required
              placeholder="Fantasy / Mystery / Non-Fiction"
              className="w-full border border-gray-300 dark:border-gray-600 rounded px-3 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          <div>
            <label className="block font-semibold mb-1 text-gray-800 dark:text-gray-200">
              Rating (1–5)
            </label>
            <input
              type="number"
              name="rating"
              min="1"
              max="5"
              required
              placeholder="5"
              className="w-full border border-gray-300 dark:border-gray-600 rounded px-3 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          <div>
            <label className="block font-semibold mb-1 text-gray-800 dark:text-gray-200">
              Summary
            </label>
            <textarea
              name="summary"
              rows="4"
              required
              placeholder="Short description of the book"
              className="w-full border border-gray-300 dark:border-gray-600 rounded px-3 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            ></textarea>
          </div>

          <div>
            <label className="block font-semibold mb-1 text-gray-800 dark:text-gray-200">
              Cover Image URL (imgbb)
            </label>
            <input
              type="url"
              name="coverImage"
              required
              placeholder="https://i.ibb.co/yourimage.jpg"
              className="w-full border border-gray-300 dark:border-gray-600 rounded px-3 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          <div>
            <label className="block font-semibold mb-1 text-gray-800 dark:text-gray-200">
              Your Email
            </label>
            <input
              type="email"
              value={loggedInUser?.email || ""}
              readOnly
              className="w-full border border-gray-300 dark:border-gray-600 rounded px-3 py-2 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-200"
            />
          </div>

          <div>
            <label className="block font-semibold mb-1 text-gray-800 dark:text-gray-200">
              Your Name
            </label>
            <input
              type="text"
              value={loggedInUser?.displayName || ""}
              readOnly
              className="w-full border border-gray-300 dark:border-gray-600 rounded px-3 py-2 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-200"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#0abde3] text-white font-semibold py-2 rounded hover:bg-indigo-500 transition"
          >
            {loading ? "Adding..." : "Add Book"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddBook;
