

import React, { useState } from "react";
import { useLoaderData, useNavigate } from "react-router";
import Swal from "sweetalert2";
import { toast, Toaster } from "react-hot-toast";

const UpdateBook = () => {
  const book = useLoaderData();
  const navigate = useNavigate();
  const [updatedBook, setUpdatedBook] = useState(book);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedBook((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const confirm = await Swal.fire({
      title: "Confirm Update",
      text: "Are you sure you want to update this book?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#0abde3",
      cancelButtonColor: "#95a5a6",
      confirmButtonText: "Yes, update it!",
    });

    if (!confirm.isConfirmed) return;

    try {
      const res = await fetch(`https://the-book-haven-server-rose.vercel.app/books/${book._id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedBook),
      });

      const data = await res.json();
      if (res.ok) {
        toast.success("Book updated successfully!");
        setTimeout(() => navigate("/myBooks"), 1000);
      } else {
        toast.error(data.message || "Update failed!");
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to update book!");
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <Toaster />
      <h2 className="text-3xl font-bold text-center text-[#0abde3] mb-6 dark:text-[#74b9ff]">
        Update Book
      </h2>

      <form
        onSubmit={handleSubmit}
        className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 space-y-4 border border-gray-200 dark:border-gray-700"
      >
        <div>
          <label className="block mb-1 font-semibold text-gray-900 dark:text-gray-100">
            Title
          </label>
          <input
            type="text"
            name="title"
            value={updatedBook.title || ""}
            onChange={handleChange}
            className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 px-3 py-2 rounded"
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold text-gray-900 dark:text-gray-100">
            Author
          </label>
          <input
            type="text"
            name="author"
            value={updatedBook.author || ""}
            onChange={handleChange}
            className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 px-3 py-2 rounded"
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold text-gray-900 dark:text-gray-100">
            Genre
          </label>
          <input
            type="text"
            name="genre"
            value={updatedBook.genre || ""}
            onChange={handleChange}
            className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 px-3 py-2 rounded"
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold text-gray-900 dark:text-gray-100">
            Rating
          </label>
          <input
            type="number"
            name="rating"
            min="0"
            max="5"
            step="0.1"
            value={updatedBook.rating || ""}
            onChange={handleChange}
            className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 px-3 py-2 rounded"
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold text-gray-900 dark:text-gray-100">
            Summary
          </label>
          <textarea
            name="summary"
            value={updatedBook.summary || ""}
            onChange={handleChange}
            rows="4"
            className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 px-3 py-2 rounded"
          ></textarea>
        </div>

        <div>
          <label className="block mb-1 font-semibold text-gray-900 dark:text-gray-100">
            Cover Image URL
          </label>
          <input
            type="text"
            name="coverImage"
            value={updatedBook.coverImage || ""}
            onChange={handleChange}
            className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 px-3 py-2 rounded"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-[#0abde3] hover:bg-[#0984e3] text-white py-2 rounded-lg font-semibold transition"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default UpdateBook;
