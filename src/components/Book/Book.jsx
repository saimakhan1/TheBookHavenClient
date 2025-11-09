import React from "react";
import { NavLink } from "react-router";

const Book = ({ book }) => {
  const { _id, title, author, genre, rating,dateAdded, coverImage } = book;
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <figure className="px-5 pt-5 ">
        <img
          src={coverImage}
          alt="Books"
          className="rounded-xl h-[300px] w-[270px]"
        />
      </figure>
      <div className="card-body ">
        <h2 className="card-title">{title}</h2>
        <p>Author:{author}</p>
        <p>Genre:{genre}</p>
        <p>Rating:{rating}</p>
        <p>Added on: {new Date(book.dateAdded).toLocaleDateString()}</p>
        <div className="card-actions">
          <NavLink
            to={`/book-details/${_id}`}
            className="btn btn-primary w-full"
          >
            View Book Details
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Book;
