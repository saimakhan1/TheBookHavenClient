// import React from "react";
// import { NavLink } from "react-router";

// const Book = ({ book }) => {
//   const { _id, title, author, genre, rating,dateAdded, coverImage } = book;
//   return (
//     <div className="card bg-base-100 w-96 shadow-sm">
//       <figure className="px-5 pt-5 ">
//         <img
//           src={coverImage}
//           alt="Books"
//           className="rounded-xl h-[300px] w-[270px]"
//         />
//       </figure>
//       <div className="card-body ">
//         <h2 className="card-title">{title}</h2>
//         <p>Author:{author}</p>
//         <p>Genre:{genre}</p>
//         <p>Rating:{rating}</p>
//         <p>Added on: {new Date(book.dateAdded).toLocaleDateString()}</p>
//         <div className="card-actions">
//           <NavLink
//             to={`/book-details/${_id}`}
//             className="btn btn-primary w-full"
//           >
//             View Book Details
//           </NavLink>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Book;
// import React from "react";
// import { NavLink } from "react-router";

// const Book = ({ book }) => {
//   const { _id, title, author, genre, rating, dateAdded, coverImage } = book;
//   return (
//     <div className="card bg-white w-80 shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
//       <figure className="overflow-hidden">
//         <img
//           src={coverImage}
//           alt={title}
//           className="h-72 w-full object-cover transition-transform duration-300 hover:scale-105"
//         />
//       </figure>
//       <div className="card-body p-5 bg-[#f0f8ff]">
//         <h2 className="card-title text-[#0abde3] font-bold text-lg">{title}</h2>
//         <p className="text-gray-700"><span className="font-semibold">Author:</span> {author}</p>
//         <p className="text-gray-700"><span className="font-semibold">Genre:</span> {genre}</p>
//         <p className="text-gray-700"><span className="font-semibold">Rating:</span> {rating}</p>
//         <p className="text-gray-500 text-sm mt-1">
//           Added on: {new Date(dateAdded).toLocaleDateString()}
//         </p>
//         <div className="card-actions mt-4">
//           <NavLink
//             to={`/book-details/${_id}`}
//             className="btn w-full bg-[#0abde3] hover:bg-[#0097c2] text-white border-none transition-colors duration-300"
//           >
//             View Book Details
//           </NavLink>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Book;
//_____________________________________________
import React from "react";
import { NavLink } from "react-router";

const Book = ({ book }) => {
  const { _id, title, author, genre, rating, dateAdded, coverImage } = book;
  function parseDate(dateStr) {
  const [day, month, year] = dateStr.split("-");
  return new Date(`${year}-${month}-${day}`);
}




  return (
    <div className="card bg-white w-full sm:max-w-xs md:max-w-sm lg:max-w-md shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 mx-auto">
      <figure className="overflow-hidden">
        <img
          src={coverImage}
          alt={title}
          className="w-full h-64 sm:h-72 md:h-80 object-cover transition-transform duration-300 hover:scale-105"
        />
      </figure>
      <div className="card-body p-4 sm:p-5 bg-[#f0f8ff]">
        <h2 className="card-title text-[#0abde3] font-bold text-lg sm:text-xl">{title}</h2>
        <p className="text-gray-700 text-sm sm:text-base">
          <span className="font-semibold">Author:</span> {author}
        </p>
        <p className="text-gray-700 text-sm sm:text-base">
          <span className="font-semibold">Genre:</span> {genre}
        </p>
        <p className="text-gray-700 text-sm sm:text-base">
          <span className="font-semibold">Rating:</span> {rating}
        </p>
        <p className="text-gray-500 text-xs sm:text-sm mt-1">
          Added on: {new Date(dateAdded).toLocaleDateString()}
        </p>
        <div className="card-actions mt-4">
          <NavLink
            to={`/book-details/${_id}`}
            className="btn w-full bg-[#0abde3] hover:bg-[#0097c2] text-white border-none transition-colors duration-300 text-sm sm:text-base"
          >
            View Book Details
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Book;


