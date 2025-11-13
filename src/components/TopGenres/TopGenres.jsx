

import React from "react";

const genres = [
  {
    name: "Mystery",
    image: "https://i.ibb.co/PfJkykZ/shatterred-Reflections.jpg",
  },
  {
    name: "Fantasy",
    image: "https://i.ibb.co/fdp5P6X9/house-Of-Ash.jpg",
  },
  {
    name: "Science Fiction",
    image: "https://i.ibb.co/jZ99DY0k/echostime.jpg",
  },
  {
    name: "Adventure",
    image: "https://i.ibb.co/vv4gBMYW/icebound.jpg",
  },
];

const TopGenres = () => {
  return (
    <section className="py-16 mb-0 bg-[#f0f9ff] dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#0abde3] dark:text-[#38d3f8] mb-12">
          Top Genres
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {genres.map((genre, idx) => (
            <div
              key={idx}
              className="relative cursor-pointer overflow-hidden rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 dark:shadow-gray-700"
            >
              <img
                src={genre.image}
                alt={genre.name}
                className="w-full h-56 object-cover"
              />
              {/* Always visible genre name */}
              <div className="absolute bottom-0 left-0 right-0 bg-[#0abde3]/90 dark:bg-[#38d3f8]/90 text-center py-2 transition-colors duration-300">
                <h3 className="text-white text-lg md:text-xl font-semibold">
                  {genre.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopGenres;

