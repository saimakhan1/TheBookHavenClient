import React, { use } from "react";
import Book from "../Book/Book";

const PopularBooks = ({ popularBooksPromise }) => {
  const books = use(popularBooksPromise);

  console.log(books);
  return (
    <div>
      <h3 className="text-5xl text-center">Latest Books</h3>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {/* {books.map((book) => (
          <Book key={book._id} book={book}></Book>
        ))}{" "} */}
        {books
  .sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded)) // sort by latest date
  .slice(0, 6) // take the first 6
  .map((book) => (
    <Book key={book._id} book={book} />
  ))}
      </div>
    </div>
  );
};

export default PopularBooks;
