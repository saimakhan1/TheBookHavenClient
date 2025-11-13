import PopularBooks from "../PopularBooks/PopularBooks";
import Banner from "../Banner/Banner";
import AboutBookHaven from "../AboutBookHaven/AboutBookHaven";
import TopGenres from "../TopGenres/TopGenres";


import TopBooks from "../TopRatedBooks/TopBooks";
import axios from "axios";
import DarkLight from "../DarkLight/DarkLight";

//axios 5
const popularBooksPromise = axios
  .get("https://the-book-haven-server-rose.vercel.app/all-books")
  .then((res) => res.data);



const Home = () => {
  return (
    <div className="transition-colors duration-500 min-h-screen">
     <DarkLight></DarkLight>

      {/* Main Sections */}
      <Banner />
      <PopularBooks popularBooksPromise={popularBooksPromise} />
      <AboutBookHaven />
      <TopGenres />
      <TopBooks></TopBooks>
    </div>
  );
};

export default Home;

