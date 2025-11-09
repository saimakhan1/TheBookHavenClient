import React from "react";

import PopularBooks from "../PopularBooks/PopularBooks";

const popularBooksPromise = fetch("http://localhost:3000/all-books").then(
  (res) => res.json()
);

const Home = () => {
  return (
    <div>
      <PopularBooks popularBooksPromise={popularBooksPromise}></PopularBooks>
    </div>
  );
};

export default Home;
