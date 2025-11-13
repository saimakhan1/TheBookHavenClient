import React from 'react';

const AboutBookHaven = () => {
    return (
         <section className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-[#0a8bbf] dark:text-[#38d3f8] mb-8">
          About The Book Haven
        </h2>
        <p className="text-gray-800 dark:text-gray-300 text-lg md:text-2xl leading-relaxed mb-10 text-justify">
          Welcome to <span className="font-semibold text-[#0a8bbf] dark:text-[#38d3f8]">The Book Haven</span>, your
          ultimate online library! Explore a wide range of books from various genres, manage
          your personal collection, and stay updated with the latest additions. Our platform
          is designed to make discovering, reading, and sharing books effortless, enjoyable,
          and inspiring. Dive into a world of knowledge and imagination with just a few clicks!
          Whether you're a lifelong reader or just beginning your literary journey, The Book
          Haven offers endless opportunities to learn, grow, and connect with stories that
          touch hearts and expand minds. Enjoy personalized recommendations, insightful reviews,
          and an ever-growing digital bookshelf designed to make reading more accessible,
          interactive, and truly unforgettable for every book lover.
        </p>
        <div className="flex justify-center gap-6">
          <button className="btn bg-[#0a8bbf] hover:bg-[#096c99] text-white border-none px-8 py-3 text-lg">
            Explore Books
          </button>
          <button className="btn bg-white dark:bg-gray-800 text-[#0a8bbf] hover:bg-[#e0f0f5] dark:hover:bg-gray-700 border-[#0a8bbf] px-8 py-3 text-lg">
            Learn More
          </button>
        </div>
      </div>
    </section>
    );
};

export default AboutBookHaven;
