import React from "react";

import PopularBooks from "../PopularBooks/PopularBooks";
import Banner from "../Banner/Banner";
import AboutBookHaven from "../AboutBookHaven/AboutBookHaven";
import TopGenres from "../TopGenres/TopGenres";

const popularBooksPromise = fetch("http://localhost:3000/all-books").then(
  (res) => res.json()
);

const Home = () => {
  return (
    
    <div>
      <Banner></Banner>
      <PopularBooks popularBooksPromise={popularBooksPromise}></PopularBooks>
      <AboutBookHaven></AboutBookHaven>
      <TopGenres></TopGenres>
    </div>
  );
};

export default Home;
