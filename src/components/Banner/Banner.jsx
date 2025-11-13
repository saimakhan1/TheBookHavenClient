import React, { useEffect, useState } from "react";

const images = [
  "https://i.ibb.co/vv4gBMYW/icebound.jpg",
  "https://i.ibb.co.com/XxWbrp5s/echo.jpg",
  "https://i.ibb.co.com/Z6XzdWk4/cityofmirrors.jpg",
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
    <section className="relative w-full h-[70vh] overflow-hidden bg-[#eaf8fc] dark:bg-gray-900 transition-colors duration-300">
      {/* Images */}
      <div className="absolute inset-0">
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Slide ${i + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
              i === index ? "opacity-80" : "opacity-0"
            }`}
          />
        ))}
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/30 dark:bg-black/30 transition-colors duration-300"></div>

      {/* Text + Buttons */}
      <div className="relative z-10 flex flex-col justify-center items-center text-center h-full px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 dark:text-white bg-white/30 dark:bg-black/30 p-4 rounded-2xl transition-colors duration-300">
          Welcome to <span className="text-blue-800 dark:text-[#38d3f8]">The Book Haven</span>
        </h1>
        <p className="text-lg text-white/70 dark:text-white/80 mb-6 transition-colors duration-300">
          Discover, read, and manage your favorite books effortlessly.
        </p>
        <div className="flex gap-4">
          <a
            href="/all-books"
            className="btn bg-[#0abde3] dark:bg-[#0a8bbf] hover:bg-[#0097c2] dark:hover:bg-[#096c99] border-none text-white transition-colors duration-300"
          >
            All Books
          </a>
          <a
            href="/addBook"
            className="btn bg-white dark:bg-gray-800 text-[#0097c2] dark:text-[#38d3f8] hover:bg-[#e0f7ff] dark:hover:bg-gray-700 border-none transition-colors duration-300"
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
              i === index ? "bg-[#0abde3] dark:bg-[#38d3f8]" : "bg-white/70 dark:bg-gray-400/70"
            } transition-all duration-300`}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default Banner;
