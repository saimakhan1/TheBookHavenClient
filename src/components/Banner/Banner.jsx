// import React from 'react';

// const Banner = () => {
//     return (
//         <div>
            
//         </div>
//     );
// };

// export default Banner;

import React, { useEffect, useState } from "react";

const images = [
  "https://i.ibb.co/vv4gBMYW/icebound.jpg",
  "https://i.ibb.co/PfJkykZ/shatterred-Reflections.jpg",
  "https://i.ibb.co/fdp5P6X9/house-Of-Ash.jpg",
  "https://i.ibb.co/jZ99DY0k/echostime.jpg",
];

const Banner = () => {
  const [index, setIndex] = useState(0);
  const delay = 4000;

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, delay);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-[70vh] overflow-hidden bg-[#eaf8fc]">
      {/* Images */}
      <div className="absolute inset-0">
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Slide ${i + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Text + Buttons */}
      <div className="relative z-10 flex flex-col justify-center items-center text-center h-full px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Welcome to <span className="text-[#0abde3]">The Book Haven</span>
        </h1>
        <p className="text-lg text-white/90 mb-6">
          Discover, read, and manage your favorite books effortlessly.
        </p>
        <div className="flex gap-4">
          <a
            href="/all-books"
            className="btn bg-[#0abde3] hover:bg-[#0097c2] border-none text-white"
          >
            All Books
          </a>
          <a
            href="/addBook"
            className="btn bg-white text-[#0097c2] hover:bg-[#e0f7ff] border-none"
          >
            Create Book
          </a>
        </div>
      </div>

      {/* Dots navigation */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full ${
              i === index ? "bg-[#0abde3]" : "bg-white/70"
            } transition-all duration-300`}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default Banner;



