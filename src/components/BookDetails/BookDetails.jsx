import React, { use } from "react";
import { useLoaderData } from "react-router";

const BookDetails = () => {
  const book = useLoaderData();
  console.log(book);
  return <div>Book Details Page</div>;
};

export default BookDetails;
