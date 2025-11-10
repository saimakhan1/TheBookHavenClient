// import React from "react";

// const AddBook = () => {
//   return <div>add book</div>;
// };

// export default AddBook;
import React, { useContext, useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import { AuthContext } from "../../Contexts/AuthContext";

const AddBook = ({ user }) => {
  const { user: loggedInUser } = useContext(AuthContext); // now user will be defined
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
    const coverImage = form.coverImage.value; // user provides imgbb URL

    const newBook = {
      title,
      author,
      genre,
      rating,
      summary,
      coverImage,
      userEmail: user?.email || "Unknown",
      userName: user?.displayName || "Unknown",
    };

    try {
      const response = await fetch("http://localhost:3000/books", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newBook),
      });

      const result = await response.json();
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
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
      <Toaster />
      <h2 className="text-3xl font-bold text-center text-[#0abde3] mb-6">
        Add a New Book
      </h2>

      <form onSubmit={handleAddBook} className="space-y-4">
        <div>
          <label className="block font-semibold mb-1">Title</label>
          <input
            type="text"
            name="title"
            required
            placeholder="Book Title"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">Author</label>
          <input
            type="text"
            name="author"
            required
            placeholder="Author Name"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">Genre</label>
          <input
            type="text"
            name="genre"
            required
            placeholder="Fantasy / Mystery / Non-Fiction"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">Rating (1–5)</label>
          <input
            type="number"
            name="rating"
            min="1"
            max="5"
            required
            placeholder="5"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">Summary</label>
          <textarea
            name="summary"
            rows="4"
            required
            placeholder="Short description of the book"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          ></textarea>
        </div>

        <div>
          <label className="block font-semibold mb-1">Cover Image URL (imgbb)</label>
          <input
            type="url"
            name="coverImage"
            required
            placeholder="https://i.ibb.co/yourimage.jpg"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">Your Email</label>
          <input
            type="email"
            value={loggedInUser?.email || ""}
            readOnly
            className="w-full border border-gray-300 rounded px-3 py-2 bg-gray-100"
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">Your Name</label>
          <input
            type="text"
            value={loggedInUser?.displayName || ""}
            
            readOnly
            className="w-full border text-gray-900 border-gray-300 rounded px-3 py-2 bg-gray-100 opacity-100"
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
  );
};

export default AddBook;



