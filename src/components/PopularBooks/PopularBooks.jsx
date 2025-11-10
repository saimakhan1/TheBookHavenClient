// import React, { use } from "react";
// import Book from "../Book/Book";

// const PopularBooks = ({ popularBooksPromise }) => {
//   const books = use(popularBooksPromise);

//   console.log(books);
//   return (
//     <div>
//       <h3 className="text-5xl text-center">Latest Books</h3>
//       <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
//         {/* {books.map((book) => (
//           <Book key={book._id} book={book}></Book>
//         ))}{" "} */}
//         {books
//   .sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded)) // sort by latest date
//   .slice(0, 6) // take the first 6
//   .map((book) => (
//     <Book key={book._id} book={book} />
//   ))}
//       </div>
//     </div>
//   );
// };

// export default PopularBooks;

import React, { use } from "react";
import Book from "../Book/Book";

const PopularBooks = ({ popularBooksPromise }) => {
  const books = use(popularBooksPromise);

  console.log(books);
  return (
    <div className="bg-gradient-to-r from-purple-100 to-blue-100 py-12">
      <h3 className="text-5xl text-center font-bold text-purple-800 mb-10">
        Latest Books
      </h3>
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-4">
        {books
          .sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded)) // sort by latest date
          .slice(0, 19) // take the first 6
          .map((book) => (
            <div
              key={book._id}
              className="bg-white rounded-2xl shadow-lg p-6 transform transition duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <Book book={book} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default PopularBooks;
