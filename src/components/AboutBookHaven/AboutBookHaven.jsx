import React from 'react';

const AboutBookHaven = () => {
    return (
         <section className="py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-[#0a8bbf] mb-8">
          About The Book Haven
        </h2>
        <p className="text-gray-800 text-lg md:text-2xl leading-relaxed mb-10 text-justify">
  Welcome to <span className="font-semibold text-[#0a8bbf]">The Book Haven</span>, your
  ultimate online library! Explore a wide range of books from various genres, manage
  your personal collection, and stay updated with the latest additions. Our platform
  is designed to make discovering, reading, and sharing books effortless, enjoyable,
  and inspiring. Dive into a world of knowledge and imagination with just a few clicks!
</p>
        <div className="flex justify-center gap-6">
          <button className="btn bg-[#0a8bbf] hover:bg-[#096c99] text-white border-none px-8 py-3 text-lg">
            Explore Books
          </button>
          <button className="btn bg-white text-[#0a8bbf] hover:bg-[#e0f0f5] border-[#0a8bbf] px-8 py-3 text-lg">
            Learn More
          </button>
        </div>
      </div>
    </section>
    );
};

export default AboutBookHaven;