// import React from 'react';
// import { useLoaderData, useParams } from 'react-router';

// const BookDetails = () => {
//   const book=useLoaderData();
//   console.log(book);
//   const {_id}=useParams();
//   const {title,author,genre,rating,coverImage,userEmail,}=book
//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#f0f8ff] to-white p-6">
//       <div className="max-w-4xl w-full bg-white rounded-2xl shadow-lg overflow-hidden grid grid-cols-1 md:grid-cols-2">
//         {/* Book Cover */}
//         <div className="flex justify-center items-center bg-[#e8f9ff] p-6">
//           <img
//             src={coverImage}
//             alt={title}
//             className="rounded-xl w-64 h-80 object-cover shadow-md hover:scale-105 transition-transform duration-300"
//           />
//         </div>

//         {/* Book Info */}
//         <div className="p-8 space-y-4">
//           <h2 className="text-3xl font-bold text-[#0abde3]">{title}</h2>
//           <p className="text-gray-700 text-lg">
//             <span className="font-semibold text-[#0abde3]">Author:</span> {author}
//           </p>
//           <p className="text-gray-700 text-lg">
//             <span className="font-semibold text-[#0abde3]">Genre:</span> {genre}
//           </p>
//           <p className="text-gray-700 text-lg">
//             <span className="font-semibold text-[#0abde3]">Rating:</span> ⭐ {rating}
//           </p>
//           <p className="text-gray-700 text-lg">
//             <span className="font-semibold text-[#0abde3]">Added By:</span> {userEmail}
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BookDetails;



// import React, { useContext } from "react";
// import { useLoaderData } from "react-router";
// import { AuthContext } from "../../Contexts/AuthContext"; // ✅ make sure this exists

// const BookDetails = () => {
//   const book = useLoaderData();
//   const { user } = useContext(AuthContext); // logged-in user
//   const { title, author, genre, rating, coverImage } = book;

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#f0f8ff] to-white p-6">
//       <div className="max-w-4xl w-full bg-white rounded-2xl shadow-lg overflow-hidden grid grid-cols-1 md:grid-cols-2">
//         <div className="flex justify-center items-center bg-[#e8f9ff] p-6">
//           <img
//             src={coverImage}
//             alt={title}
//             className="rounded-xl w-64 h-80 object-cover shadow-md hover:scale-105 transition-transform duration-300"
//           />
//         </div>

//         <div className="p-8 space-y-4">
//           <h2 className="text-3xl font-bold text-[#0abde3]">{title}</h2>
//           <p className="text-gray-700 text-lg">
//             <span className="font-semibold text-[#0abde3]">Author:</span> {author}
//           </p>
//           <p className="text-gray-700 text-lg">
//             <span className="font-semibold text-[#0abde3]">Genre:</span> {genre}
//           </p>
//           <p className="text-gray-700 text-lg">
//             <span className="font-semibold text-[#0abde3]">Rating:</span> ⭐ {rating}
//           </p>
//           <p className="text-gray-700 text-lg">
//             <span className="font-semibold text-[#0abde3]">Added By:</span>{" "}
//             {user?.email || "Unknown"} {/* ✅ use logged-in user */}
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default BookDetails;

import React, { useContext } from "react";
import { useLoaderData } from "react-router";
import { AuthContext } from "../../Contexts/AuthContext"; // ✅ make sure this exists

const BookDetails = () => {
  const book = useLoaderData();
  const { user } = useContext(AuthContext); // logged-in user
  const { title, author, genre, rating, coverImage,summary } = book;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#f0f8ff] to-white p-4 sm:p-6">
      <div className="max-w-4xl w-full bg-white rounded-2xl shadow-lg overflow-hidden grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Book Cover */}
        <div className="flex justify-center items-center bg-[#e8f9ff] p-4 md:p-6">
          <img
            src={coverImage}
            alt={title}
            className="rounded-xl w-48 h-64 sm:w-56 sm:h-72 md:w-64 md:h-80 object-cover shadow-md hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Book Info */}
        <div className="p-4 sm:p-6 flex flex-col justify-center space-y-3 sm:space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0abde3]">{title}</h2>
          <p className="text-gray-700 text-base sm:text-lg">
            <span className="font-semibold text-[#0abde3]">Author:</span> {author}
          </p>
          <p className="text-gray-700 text-base sm:text-lg">
            <span className="font-semibold text-[#0abde3]">Genre:</span> {genre}
          </p>
          <p className="text-gray-700 text-base sm:text-lg">
            <span className="font-semibold text-[#0abde3]">Rating:</span> ⭐ {rating}
          </p>
         <p className="text-gray-700 text-base sm:text-lg">
            <span className="font-semibold text-[#0abde3]">Summary:</span>  {summary}
          </p>
          <p className="text-gray-700 text-base sm:text-lg">
            <span className="font-semibold text-[#0abde3]">Added By:</span> {user?.email || "Unknown"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
